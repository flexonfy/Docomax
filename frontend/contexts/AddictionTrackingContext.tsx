import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type AddictionType = 'smoking' | 'alcohol' | 'drugs' | 'pornography';

export interface Addiction {
  type: AddictionType;
  startDate: string; // ISO string
  goal?: string;
}

export interface CheckIn {
  id: string;
  date: string; // ISO string
  cravingLevel: 1 | 2 | 3 | 4 | 5;
  mood: 1 | 2 | 3 | 4 | 5;
  triggers?: string[];
  notes?: string;
  abstained: boolean;
}

interface AddictionTrackingContextType {
  addiction: Addiction | null;
  setAddiction: (addiction: Omit<Addiction, 'startDate'> & { startDate: Date }) => void;
  resetAddiction: () => void;
  checkIns: CheckIn[];
  addCheckIn: (checkIn: Omit<CheckIn, 'id' | 'date'>) => void;
  getDaysSober: () => number;
}

const AddictionTrackingContext = createContext<AddictionTrackingContextType | undefined>(undefined);

export function AddictionTrackingProvider({ children }: { children: ReactNode }) {
  const [addiction, setAddictionState] = useState<Addiction | null>(() => {
    const saved = localStorage.getItem('docomax-addiction');
    return saved ? JSON.parse(saved) : null;
  });

  const [checkIns, setCheckIns] = useState<CheckIn[]>(() => {
    const saved = localStorage.getItem('docomax-addiction-checkins');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (addiction) {
      localStorage.setItem('docomax-addiction', JSON.stringify(addiction));
    } else {
      localStorage.removeItem('docomax-addiction');
    }
  }, [addiction]);

  useEffect(() => {
    localStorage.setItem('docomax-addiction-checkins', JSON.stringify(checkIns));
  }, [checkIns]);

  const setAddiction = (newAddiction: Omit<Addiction, 'startDate'> & { startDate: Date }) => {
    setAddictionState({ ...newAddiction, startDate: newAddiction.startDate.toISOString() });
    setCheckIns([]); // Reset check-ins for a new journey
  };

  const resetAddiction = () => {
    setAddictionState(null);
    setCheckIns([]);
  };

  const addCheckIn = (checkInData: Omit<CheckIn, 'id' | 'date'>) => {
    const newCheckIn: CheckIn = {
      ...checkInData,
      id: Date.now().toString(),
      date: new Date().toISOString()
    };
    setCheckIns(prev => [newCheckIn, ...prev]);
  };

  const getDaysSober = () => {
    if (!addiction) return 0;
    const startDate = new Date(addiction.startDate);
    const today = new Date();
    // Set hours to 0 to count full days
    startDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    const difference = today.getTime() - startDate.getTime();
    return Math.floor(difference / (1000 * 60 * 60 * 24));
  };

  return (
    <AddictionTrackingContext.Provider value={{
      addiction,
      setAddiction,
      resetAddiction,
      checkIns,
      addCheckIn,
      getDaysSober
    }}>
      {children}
    </AddictionTrackingContext.Provider>
  );
}

export function useAddictionTracking() {
  const context = useContext(AddictionTrackingContext);
  if (!context) {
    throw new Error('useAddictionTracking must be used within an AddictionTrackingProvider');
  }
  return context;
}
