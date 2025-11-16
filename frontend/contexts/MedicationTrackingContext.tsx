import React, { createContext, useContext, useEffect, useState } from 'react';

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: 'once-daily' | 'twice-daily' | 'three-times-daily' | 'four-times-daily' | 'as-needed';
  frequency_custom?: string; // For custom frequencies like "every 8 hours"
  startDate: string;
  endDate?: string;
  prescribedBy?: string;
  reason: string;
  sideEffects?: string[];
  interactions?: string[];
  notes?: string;
  patientId: string;
  createdAt: string;
  reminderEnabled: boolean;
  reminderTime?: string; // "08:00" format
}

export interface MedicationEntry {
  id: string;
  medicationId: string;
  patientId: string;
  date: string;
  time: string;
  taken: boolean;
  dosage: string;
  notes?: string;
  createdAt: string;
}

interface MedicationTrackingContextType {
  medications: Medication[];
  entries: MedicationEntry[];
  addMedication: (medication: Omit<Medication, 'id' | 'createdAt'>) => void;
  updateMedication: (id: string, medication: Partial<Medication>) => void;
  removeMedication: (id: string) => void;
  recordMedicationTaken: (medicationId: string, patientId: string, dosage: string, notes?: string) => void;
  getMedicationHistory: (medicationId: string) => MedicationEntry[];
  getAdherenceRate: (medicationId: string, days?: number) => number;
  getUpcomingMedications: (patientId: string) => Array<Medication & { nextDueTime: string }>;
}

const MedicationTrackingContext = createContext<MedicationTrackingContextType | undefined>(undefined);

export function MedicationTrackingProvider({ children }: { children: React.ReactNode }) {
  const [medications, setMedications] = useState<Medication[]>([]);
  const [entries, setEntries] = useState<MedicationEntry[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedMedications = localStorage.getItem('medications');
    const savedEntries = localStorage.getItem('medication_entries');
    
    if (savedMedications) {
      try {
        setMedications(JSON.parse(savedMedications));
      } catch (error) {
        console.error('Failed to parse medications:', error);
      }
    }
    
    if (savedEntries) {
      try {
        setEntries(JSON.parse(savedEntries));
      } catch (error) {
        console.error('Failed to parse medication entries:', error);
      }
    }
  }, []);

  // Save to localStorage whenever medications change
  useEffect(() => {
    localStorage.setItem('medications', JSON.stringify(medications));
  }, [medications]);

  // Save to localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem('medication_entries', JSON.stringify(entries));
  }, [entries]);

  const addMedication = (medication: Omit<Medication, 'id' | 'createdAt'>) => {
    const newMedication: Medication = {
      ...medication,
      id: `med_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };
    setMedications([...medications, newMedication]);
  };

  const updateMedication = (id: string, updates: Partial<Medication>) => {
    setMedications(
      medications.map(med => 
        med.id === id ? { ...med, ...updates } : med
      )
    );
  };

  const removeMedication = (id: string) => {
    setMedications(medications.filter(med => med.id !== id));
    // Also remove all entries for this medication
    setEntries(entries.filter(entry => entry.medicationId !== id));
  };

  const recordMedicationTaken = (
    medicationId: string,
    patientId: string,
    dosage: string,
    notes?: string
  ) => {
    const newEntry: MedicationEntry = {
      id: `entry_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      medicationId,
      patientId,
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      taken: true,
      dosage,
      notes,
      createdAt: new Date().toISOString(),
    };
    setEntries([...entries, newEntry]);
  };

  const getMedicationHistory = (medicationId: string): MedicationEntry[] => {
    return entries.filter(entry => entry.medicationId === medicationId).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  };

  const getAdherenceRate = (medicationId: string, days: number = 30): number => {
    const medication = medications.find(m => m.id === medicationId);
    if (!medication) return 0;

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const relevantEntries = entries.filter(
      entry =>
        entry.medicationId === medicationId &&
        new Date(entry.date) >= startDate
    );

    if (relevantEntries.length === 0) return 0;

    const takenCount = relevantEntries.filter(e => e.taken).length;
    return Math.round((takenCount / relevantEntries.length) * 100);
  };

  const getUpcomingMedications = (
    patientId: string
  ): Array<Medication & { nextDueTime: string }> => {
    const activeMedications = medications.filter(
      med =>
        med.patientId === patientId &&
        (!med.endDate || new Date(med.endDate) > new Date())
    );

    return activeMedications.map(med => {
      const now = new Date();
      let nextDueTime = '';

      if (med.reminderTime) {
        const [hours, minutes] = med.reminderTime.split(':').map(Number);
        const reminderDate = new Date();
        reminderDate.setHours(hours, minutes, 0);

        if (reminderDate <= now) {
          reminderDate.setDate(reminderDate.getDate() + 1);
        }

        nextDueTime = reminderDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        });
      } else {
        nextDueTime = 'Not scheduled';
      }

      return {
        ...med,
        nextDueTime,
      };
    });
  };

  const value: MedicationTrackingContextType = {
    medications,
    entries,
    addMedication,
    updateMedication,
    removeMedication,
    recordMedicationTaken,
    getMedicationHistory,
    getAdherenceRate,
    getUpcomingMedications,
  };

  return (
    <MedicationTrackingContext.Provider value={value}>
      {children}
    </MedicationTrackingContext.Provider>
  );
}

export function useMedicationTracking() {
  const context = useContext(MedicationTrackingContext);
  if (!context) {
    throw new Error(
      'useMedicationTracking must be used within MedicationTrackingProvider'
    );
  }
  return context;
}
