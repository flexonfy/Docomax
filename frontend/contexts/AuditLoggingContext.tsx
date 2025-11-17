import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getStorageItem, setStorageItem, safeJsonParse } from '../lib/localStorage';

export type AuditActionType = 
  | 'create_patient'
  | 'update_patient'
  | 'delete_patient'
  | 'add_visit'
  | 'update_visit'
  | 'delete_visit'
  | 'add_medication'
  | 'delete_medication'
  | 'add_vaccination'
  | 'delete_vaccination'
  | 'add_lab_result'
  | 'delete_lab_result'
  | 'add_attachment'
  | 'delete_attachment'
  | 'add_referral'
  | 'delete_referral';

export interface AuditLog {
  id: string;
  patientId: string;
  patientName: string;
  action: AuditActionType;
  timestamp: Date;
  userId?: string; // For future use with user authentication
  changes?: {
    before?: any;
    after?: any;
  };
  description: string;
}

interface AuditLoggingContextType {
  logs: AuditLog[];
  addLog: (log: Omit<AuditLog, 'id' | 'timestamp'>) => void;
  getLogsForPatient: (patientId: string) => AuditLog[];
  getLogsByAction: (action: AuditActionType) => AuditLog[];
  getRecentLogs: (limit?: number) => AuditLog[];
  clearLogs: () => void;
  exportLogs: (patientId?: string) => string;
}

const AuditLoggingContext = createContext<AuditLoggingContextType | undefined>(undefined);

export function AuditLoggingProvider({ children }: { children: ReactNode }) {
  const [logs, setLogs] = useState<AuditLog[]>([]);

  useEffect(() => {
    const saved = getStorageItem('audit_logs');
    if (saved) {
      const parsed = safeJsonParse(saved);
      if (parsed) {
        setLogs(parsed.map((log: any) => ({
          ...log,
          timestamp: new Date(log.timestamp)
        })));
      }
    }
  }, []);

  useEffect(() => {
    setStorageItem('audit_logs', JSON.stringify(logs));
  }, [logs]);

  const addLog = (logData: Omit<AuditLog, 'id' | 'timestamp'>) => {
    const newLog: AuditLog = {
      ...logData,
      id: `log-${Date.now()}`,
      timestamp: new Date()
    };
    setLogs(prev => [newLog, ...prev]); // Most recent first
  };

  const getLogsForPatient = (patientId: string): AuditLog[] => {
    return logs.filter(log => log.patientId === patientId);
  };

  const getLogsByAction = (action: AuditActionType): AuditLog[] => {
    return logs.filter(log => log.action === action);
  };

  const getRecentLogs = (limit = 50): AuditLog[] => {
    return logs.slice(0, limit);
  };

  const clearLogs = () => {
    setLogs([]);
  };

  const exportLogs = (patientId?: string): string => {
    const logsToExport = patientId ? getLogsForPatient(patientId) : logs;
    
    let csv = 'Timestamp,Patient ID,Patient Name,Action,Description\n';
    logsToExport.forEach(log => {
      csv += `"${new Date(log.timestamp).toLocaleString()}","${log.patientId}","${log.patientName}","${log.action}","${log.description.replace(/"/g, '""')}"\n`;
    });
    
    return csv;
  };

  return (
    <AuditLoggingContext.Provider
      value={{
        logs,
        addLog,
        getLogsForPatient,
        getLogsByAction,
        getRecentLogs,
        clearLogs,
        exportLogs
      }}
    >
      {children}
    </AuditLoggingContext.Provider>
  );
}

export function useAuditLogging() {
  const context = useContext(AuditLoggingContext);
  if (!context) {
    throw new Error('useAuditLogging must be used within AuditLoggingProvider');
  }
  return context;
}
