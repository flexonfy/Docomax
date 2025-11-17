import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getStorageItem, setStorageItem, safeJsonParse } from '../lib/localStorage';

export interface AdherenceEntry {
  id: string;
  medicationId: string;
  date: Date;
  taken: boolean;
  notes?: string;
}

interface MedicationAdherenceContextType {
  adherenceHistory: AdherenceEntry[];
  addAdherenceEntry: (medicationId: string, taken: boolean, notes?: string) => void;
  getAdherenceForMedication: (medicationId: string, days?: number) => number; // percentage
  getAdherenceStats: () => { totalTracked: number; completionRate: number };
}

const MedicationAdherenceContext = createContext<MedicationAdherenceContextType | undefined>(undefined);

export function MedicationAdherenceProvider({ children }: { children: ReactNode }) {
  const [adherenceHistory, setAdherenceHistory] = useState<AdherenceEntry[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = getStorageItem('medication_adherence');
    if (saved) {
      const parsed = safeJsonParse(saved);
      if (parsed) {
        setAdherenceHistory(parsed.map((entry: any) => ({
          ...entry,
          date: new Date(entry.date)
        })));
      }
    }
  }, []);

  // Save to localStorage whenever history changes
  useEffect(() => {
    setStorageItem('medication_adherence', JSON.stringify(adherenceHistory));
  }, [adherenceHistory]);

  const addAdherenceEntry = (medicationId: string, taken: boolean, notes?: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if entry for today already exists
    const existingIndex = adherenceHistory.findIndex(entry => {
      const entryDate = new Date(entry.date);
      entryDate.setHours(0, 0, 0, 0);
      return entry.medicationId === medicationId && entryDate.getTime() === today.getTime();
    });

    if (existingIndex >= 0) {
      // Update existing entry
      const updated = [...adherenceHistory];
      updated[existingIndex] = { ...updated[existingIndex], taken, notes };
      setAdherenceHistory(updated);
    } else {
      // Add new entry
      const newEntry: AdherenceEntry = {
        id: `${medicationId}-${Date.now()}`,
        medicationId,
        date: new Date(),
        taken,
        notes
      };
      setAdherenceHistory([...adherenceHistory, newEntry]);
    }
  };

  const getAdherenceForMedication = (medicationId: string, days = 30): number => {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);

    const relevant = adherenceHistory.filter(entry => 
      entry.medicationId === medicationId && entry.date >= cutoff
    );

    if (relevant.length === 0) return 0;

    const taken = relevant.filter(e => e.taken).length;
    return Math.round((taken / relevant.length) * 100);
  };

  const getAdherenceStats = () => {
    const total = adherenceHistory.length;
    const completed = adherenceHistory.filter(e => e.taken).length;

    return {
      totalTracked: total,
      completionRate: total > 0 ? Math.round((completed / total) * 100) : 0
    };
  };

  return (
    <MedicationAdherenceContext.Provider
      value={{
        adherenceHistory,
        addAdherenceEntry,
        getAdherenceForMedication,
        getAdherenceStats
      }}
    >
      {children}
    </MedicationAdherenceContext.Provider>
  );
}

export function useMedicationAdherence() {
  const context = useContext(MedicationAdherenceContext);
  if (!context) {
    throw new Error('useMedicationAdherence must be used within MedicationAdherenceProvider');
  }
  return context;
}
