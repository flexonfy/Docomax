import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getStorageItem, setStorageItem, safeJsonParse } from '../lib/localStorage';

export type ReminderFrequency = 'once' | 'daily' | 'weekly' | 'monthly';

export interface MedicationReminder {
  id: string;
  medicationId: string;
  medicationName: string;
  patientId: string;
  time: string; // HH:MM format
  frequency: ReminderFrequency;
  daysOfWeek?: number[]; // 0-6 for weekly reminders
  enabled: boolean;
  notificationsSent: Date[];
  notes?: string;
}

interface MedicationRemindersContextType {
  reminders: MedicationReminder[];
  addReminder: (reminder: Omit<MedicationReminder, 'id' | 'notificationsSent'>) => void;
  updateReminder: (id: string, updates: Partial<MedicationReminder>) => void;
  deleteReminder: (id: string) => void;
  getRemindersForMedication: (medicationId: string) => MedicationReminder[];
  getRemindersForPatient: (patientId: string) => MedicationReminder[];
  getUpcomingReminders: (patientId: string, minutesAhead?: number) => MedicationReminder[];
  markReminderSent: (id: string) => void;
  requestNotificationPermission: () => Promise<boolean>;
  sendLocalNotification: (reminder: MedicationReminder) => void;
}

const MedicationRemindersContext = createContext<MedicationRemindersContextType | undefined>(undefined);

export function MedicationRemindersProvider({ children }: { children: ReactNode }) {
  const [reminders, setReminders] = useState<MedicationReminder[]>([]);

  useEffect(() => {
    const saved = getStorageItem('medication_reminders');
    if (saved) {
      const parsed = safeJsonParse(saved);
      if (parsed) {
        setReminders(parsed.map((reminder: any) => ({
          ...reminder,
          notificationsSent: (reminder.notificationsSent || []).map((d: any) => new Date(d))
        })));
      }
    }
  }, []);

  useEffect(() => {
    setStorageItem('medication_reminders', JSON.stringify(reminders));
  }, [reminders]);

  // Check for reminders every minute
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentTimeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      
      reminders.forEach(reminder => {
        if (!reminder.enabled) return;
        if (reminder.time !== currentTimeStr) return;

        // Check if already sent today
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const lastSent = reminder.notificationsSent.find(date => {
          const sentDate = new Date(date);
          sentDate.setHours(0, 0, 0, 0);
          return sentDate.getTime() === today.getTime();
        });

        if (lastSent) return;

        // Check frequency
        const dayOfWeek = now.getDay();
        const shouldSend = reminder.frequency === 'once' ||
          reminder.frequency === 'daily' ||
          (reminder.frequency === 'weekly' && reminder.daysOfWeek?.includes(dayOfWeek)) ||
          (reminder.frequency === 'monthly' && now.getDate() === new Date().getDate());

        if (shouldSend) {
          sendLocalNotification(reminder);
          markReminderSent(reminder.id);
        }
      });
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [reminders]);

  const addReminder = (reminderData: Omit<MedicationReminder, 'id' | 'notificationsSent'>) => {
    const newReminder: MedicationReminder = {
      ...reminderData,
      id: `reminder-${Date.now()}`,
      notificationsSent: []
    };
    setReminders(prev => [...prev, newReminder]);
  };

  const updateReminder = (id: string, updates: Partial<MedicationReminder>) => {
    setReminders(prev => prev.map(reminder =>
      reminder.id === id ? { ...reminder, ...updates } : reminder
    ));
  };

  const deleteReminder = (id: string) => {
    setReminders(prev => prev.filter(reminder => reminder.id !== id));
  };

  const getRemindersForMedication = (medicationId: string): MedicationReminder[] => {
    return reminders.filter(reminder => reminder.medicationId === medicationId);
  };

  const getRemindersForPatient = (patientId: string): MedicationReminder[] => {
    return reminders.filter(reminder => reminder.patientId === patientId);
  };

  const getUpcomingReminders = (patientId: string, minutesAhead = 60): MedicationReminder[] => {
    const now = new Date();
    const cutoff = new Date(now.getTime() + minutesAhead * 60000);

    return getRemindersForPatient(patientId).filter(reminder => {
      if (!reminder.enabled) return false;

      const [reminderHours, reminderMinutes] = reminder.time.split(':').map(Number);
      const reminderTime = new Date();
      reminderTime.setHours(reminderHours, reminderMinutes, 0, 0);

      return reminderTime >= now && reminderTime <= cutoff;
    });
  };

  const markReminderSent = (id: string) => {
    setReminders(prev => prev.map(reminder =>
      reminder.id === id
        ? { ...reminder, notificationsSent: [...reminder.notificationsSent, new Date()] }
        : reminder
    ));
  };

  const requestNotificationPermission = async (): Promise<boolean> => {
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications');
      return false;
    }

    if (Notification.permission === 'granted') {
      return true;
    }

    if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    }

    return false;
  };

  const sendLocalNotification = (reminder: MedicationReminder) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(`Medication Reminder: ${reminder.medicationName}`, {
        body: `Time to take ${reminder.medicationName}`,
        icon: '/icon-192.svg',
        tag: `medication-${reminder.medicationId}`,
        requireInteraction: true
      });
    }
  };

  return (
    <MedicationRemindersContext.Provider
      value={{
        reminders,
        addReminder,
        updateReminder,
        deleteReminder,
        getRemindersForMedication,
        getRemindersForPatient,
        getUpcomingReminders,
        markReminderSent,
        requestNotificationPermission,
        sendLocalNotification
      }}
    >
      {children}
    </MedicationRemindersContext.Provider>
  );
}

export function useMedicationReminders() {
  const context = useContext(MedicationRemindersContext);
  if (!context) {
    throw new Error('useMedicationReminders must be used within MedicationRemindersProvider');
  }
  return context;
}
