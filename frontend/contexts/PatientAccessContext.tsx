import React, { createContext, useContext, ReactNode } from 'react';
import { PatientRecord } from './PatientRecordsContext';

interface PatientAccessContextType {
  currentPatient: PatientRecord | null;
  setCurrentPatient: (patient: PatientRecord | null) => void;
}

const PatientAccessContext = createContext<PatientAccessContextType | undefined>(undefined);

export function PatientAccessProvider({ children }: { children: ReactNode }) {
  const [currentPatient, setCurrentPatient] = React.useState<PatientRecord | null>(null);

  return (
    <PatientAccessContext.Provider value={{ currentPatient, setCurrentPatient }}>
      {children}
    </PatientAccessContext.Provider>
  );
}

export function usePatientAccess() {
  const context = useContext(PatientAccessContext);
  if (!context) {
    return { currentPatient: null, setCurrentPatient: () => {} };
  }
  return context;
}
