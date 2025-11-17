import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getStorageItem, setStorageItem, safeJsonParse } from '../lib/localStorage';

export interface AppointmentReminder {
  id: string;
  appointmentId: string;
  minutesBefore: number; // 15, 30, 60, 1440 (1 day)
  enabled: boolean;
  notificationsSent: Date[];
}

interface AppointmentRemindersContextType {
  reminders: AppointmentReminder[];
  addReminder: (reminder: Omit<AppointmentReminder, 'id' | 'notificationsSent'>) => void;
  updateReminder: (id: string, updates: Partial<AppointmentReminder>) => void;
  deleteReminder: (id: string) => void;
  getRemindersForAppointment: (appointmentId: string) => AppointmentReminder[];
  markReminderSent: (id: string) => void;
  generateICS: (appointment: any) => string;
  downloadICS: (appointment: any, filename: string) => void;
  requestNotificationPermission: () => Promise<boolean>;
  sendLocalNotification: (appointmentTitle: string, date: Date) => void;
}

const AppointmentRemindersContext = createContext<AppointmentRemindersContextType | undefined>(undefined);

export function AppointmentRemindersProvider({ children }: { children: ReactNode }) {
  const [reminders, setReminders] = useState<AppointmentReminder[]>([]);

  useEffect(() => {
    const saved = getStorageItem('appointment_reminders');
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
    setStorageItem('appointment_reminders', JSON.stringify(reminders));
  }, [reminders]);

  const addReminder = (reminderData: Omit<AppointmentReminder, 'id' | 'notificationsSent'>) => {
    const newReminder: AppointmentReminder = {
      ...reminderData,
      id: `appointment-reminder-${Date.now()}`,
      notificationsSent: []
    };
    setReminders(prev => [...prev, newReminder]);
  };

  const updateReminder = (id: string, updates: Partial<AppointmentReminder>) => {
    setReminders(prev => prev.map(reminder =>
      reminder.id === id ? { ...reminder, ...updates } : reminder
    ));
  };

  const deleteReminder = (id: string) => {
    setReminders(prev => prev.filter(reminder => reminder.id !== id));
  };

  const getRemindersForAppointment = (appointmentId: string): AppointmentReminder[] => {
    return reminders.filter(reminder => reminder.appointmentId === appointmentId);
  };

  const markReminderSent = (id: string) => {
    setReminders(prev => prev.map(reminder =>
      reminder.id === id
        ? { ...reminder, notificationsSent: [...reminder.notificationsSent, new Date()] }
        : reminder
    ));
  };

  const generateICS = (appointment: any): string => {
    const startDate = new Date(appointment.date);
    const endDate = new Date(startDate.getTime() + 60 * 60000); // 1 hour duration

    const formatDate = (date: Date): string => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      return `${year}${month}${day}T${hours}${minutes}${seconds}`;
    };

    const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Docomax//Health Records//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${appointment.id}@docomax.local
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:${appointment.title}
DESCRIPTION:${appointment.notes || 'Medical Appointment'}
LOCATION:${appointment.location || 'TBD'}
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT15M
ACTION:DISPLAY
DESCRIPTION:Reminder: ${appointment.title}
END:VALARM
END:VEVENT
END:VCALENDAR`;

    return ics;
  };

  const downloadICS = (appointment: any, filename: string = 'appointment.ics'): void => {
    const ics = generateICS(appointment);
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/calendar;charset=utf-8,' + encodeURIComponent(ics));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
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

  const sendLocalNotification = (appointmentTitle: string, date: Date) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(`Appointment Reminder: ${appointmentTitle}`, {
        body: `Your appointment is coming up on ${date.toLocaleString()}`,
        icon: '/icon-192.svg',
        tag: `appointment-${appointmentTitle}`,
        requireInteraction: true
      });
    }
  };

  return (
    <AppointmentRemindersContext.Provider
      value={{
        reminders,
        addReminder,
        updateReminder,
        deleteReminder,
        getRemindersForAppointment,
        markReminderSent,
        generateICS,
        downloadICS,
        requestNotificationPermission,
        sendLocalNotification
      }}
    >
      {children}
    </AppointmentRemindersContext.Provider>
  );
}

export function useAppointmentReminders() {
  const context = useContext(AppointmentRemindersContext);
  if (!context) {
    throw new Error('useAppointmentReminders must be used within AppointmentRemindersProvider');
  }
  return context;
}
