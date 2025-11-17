import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getStorageItem, setStorageItem, safeJsonParse } from '../lib/localStorage';

export interface VitalEntry {
  id: string;
  patientId: string;
  date: Date;
  temperature?: number;
  bloodPressure?: string;
  heartRate?: number;
  respiratoryRate?: number;
  oxygenSaturation?: number;
  weight?: number;
  height?: number;
  bmi?: number;
  painScale?: number;
  notes?: string;
}

interface VitalsTrackingContextType {
  vitals: VitalEntry[];
  addVitalEntry: (patientId: string, entry: Omit<VitalEntry, 'id' | 'date'> & { date?: Date }) => void;
  getPatientVitals: (patientId: string, days?: number) => VitalEntry[];
  deleteVitalEntry: (id: string) => void;
  getLatestVitals: (patientId: string) => VitalEntry | undefined;
}

const VitalsTrackingContext = createContext<VitalsTrackingContextType | undefined>(undefined);

export function VitalsTrackingProvider({ children }: { children: ReactNode }) {
  const [vitals, setVitals] = useState<VitalEntry[]>([]);

  useEffect(() => {
    const saved = getStorageItem('vitals_tracking');
    if (saved) {
      const parsed = safeJsonParse(saved);
      if (parsed) {
        setVitals(parsed.map((entry: any) => ({
          ...entry,
          date: new Date(entry.date)
        })));
      }
    }
  }, []);

  useEffect(() => {
    setStorageItem('vitals_tracking', JSON.stringify(vitals));
  }, [vitals]);

  const addVitalEntry = (
    patientId: string,
    entry: Omit<VitalEntry, 'id' | 'date'> & { date?: Date }
  ) => {
    const newEntry: VitalEntry = {
      ...entry,
      id: `${patientId}-${Date.now()}`,
      patientId,
      date: entry.date || new Date()
    };
    setVitals(prev => [...prev, newEntry]);
  };

  const getPatientVitals = (patientId: string, days = 30): VitalEntry[] => {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);

    return vitals.filter(
      entry => entry.patientId === patientId && entry.date >= cutoff
    ).sort((a, b) => a.date.getTime() - b.date.getTime());
  };

  const deleteVitalEntry = (id: string) => {
    setVitals(prev => prev.filter(entry => entry.id !== id));
  };

  const getLatestVitals = (patientId: string): VitalEntry | undefined => {
    const patientVitals = vitals.filter(entry => entry.patientId === patientId);
    if (patientVitals.length === 0) return undefined;
    return patientVitals.reduce((latest, current) =>
      current.date > latest.date ? current : latest
    );
  };

  return (
    <VitalsTrackingContext.Provider
      value={{
        vitals,
        addVitalEntry,
        getPatientVitals,
        deleteVitalEntry,
        getLatestVitals
      }}
    >
      {children}
    </VitalsTrackingContext.Provider>
  );
}

export function useVitalsTracking() {
  const context = useContext(VitalsTrackingContext);
  if (!context) {
    throw new Error('useVitalsTracking must be used within VitalsTrackingProvider');
  }
  return context;
}
