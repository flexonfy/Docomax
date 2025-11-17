/**
 * Toast utilities with predefined messages for common scenarios
 */

import { UseToastReturnType } from '@/components/ui/use-toast';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastOptions {
  title: string;
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const predefinedToasts = {
  // Success messages
  success: (message: string = 'Operation completed successfully'): ToastOptions => ({
    title: 'Success',
    description: message,
    duration: 3000
  }),

  saved: (): ToastOptions => ({
    title: 'Saved',
    description: 'Your changes have been saved successfully',
    duration: 3000
  }),

  created: (itemName: string): ToastOptions => ({
    title: 'Created',
    description: `${itemName} has been created successfully`,
    duration: 3000
  }),

  deleted: (itemName: string): ToastOptions => ({
    title: 'Deleted',
    description: `${itemName} has been deleted`,
    duration: 3000
  }),

  updated: (itemName: string): ToastOptions => ({
    title: 'Updated',
    description: `${itemName} has been updated successfully`,
    duration: 3000
  }),

  // Error messages
  error: (message: string = 'An error occurred'): ToastOptions => ({
    title: 'Error',
    description: message,
    duration: 5000
  }),

  validationError: (fieldName?: string): ToastOptions => ({
    title: 'Validation Error',
    description: fieldName
      ? `Please check the ${fieldName} field`
      : 'Please check all required fields',
    duration: 4000
  }),

  networkError: (): ToastOptions => ({
    title: 'Network Error',
    description: 'Unable to connect. Please check your internet connection',
    duration: 5000
  }),

  noResults: (searchTerm?: string): ToastOptions => ({
    title: 'No Results',
    description: searchTerm
      ? `No results found for "${searchTerm}"`
      : 'No results found',
    duration: 3000
  }),

  // Warning messages
  warning: (message: string): ToastOptions => ({
    title: 'Warning',
    description: message,
    duration: 4000
  }),

  unsavedChanges: (): ToastOptions => ({
    title: 'Unsaved Changes',
    description: 'You have unsaved changes',
    duration: 4000
  }),

  // Info messages
  info: (message: string): ToastOptions => ({
    title: 'Information',
    description: message,
    duration: 3000
  }),

  loadingStarted: (): ToastOptions => ({
    title: 'Loading',
    description: 'Please wait...',
    duration: 60000
  }),

  updateAvailable: (): ToastOptions => ({
    title: 'Update Available',
    description: 'A new version of the app is available',
    duration: 10000
  }),

  offlineMode: (): ToastOptions => ({
    title: 'Offline Mode',
    description: 'You are currently offline. Some features may be limited',
    duration: 5000
  }),

  onlineRestored: (): ToastOptions => ({
    title: 'Connection Restored',
    description: 'Your connection has been restored',
    duration: 3000
  }),

  // Health specific messages
  patientAdded: (patientName: string): ToastOptions => ({
    title: 'Patient Added',
    description: `${patientName} has been added to your records`,
    duration: 3000
  }),

  appointmentScheduled: (date: string): ToastOptions => ({
    title: 'Appointment Scheduled',
    description: `Appointment scheduled for ${date}`,
    duration: 3000
  }),

  recordsExported: (): ToastOptions => ({
    title: 'Records Exported',
    description: 'Your health records have been exported successfully',
    duration: 3000
  }),

  recordsImported: (count: number): ToastOptions => ({
    title: 'Records Imported',
    description: `${count} record(s) have been imported`,
    duration: 3000
  }),

  triageCompleted: (): ToastOptions => ({
    title: 'Triage Complete',
    description: 'Check the results below',
    duration: 3000
  })
};

/**
 * Enhanced toast function with better default styling
 */
export function showToast(
  toast: UseToastReturnType,
  options: ToastOptions & { variant?: 'default' | 'destructive' }
) {
  const { title, description, duration, action, variant = 'default' } = options;

  toast({
    title,
    description,
    duration: duration ?? 3000,
    ...(action && { action }),
    ...(variant && { variant })
  });
}

/**
 * Show success toast
 */
export function showSuccessToast(
  toast: UseToastReturnType,
  message: string | ToastOptions
) {
  const options = typeof message === 'string'
    ? predefinedToasts.success(message)
    : message;

  showToast(toast, options);
}

/**
 * Show error toast
 */
export function showErrorToast(
  toast: UseToastReturnType,
  message: string | ToastOptions
) {
  const options = typeof message === 'string'
    ? predefinedToasts.error(message)
    : message;

  showToast(toast, { ...options, variant: 'destructive' });
}

/**
 * Show warning toast
 */
export function showWarningToast(
  toast: UseToastReturnType,
  message: string
) {
  const options = predefinedToasts.warning(message);
  showToast(toast, options);
}

/**
 * Show info toast
 */
export function showInfoToast(
  toast: UseToastReturnType,
  message: string
) {
  const options = predefinedToasts.info(message);
  showToast(toast, options);
}

/**
 * Show action toast with retry capability
 */
export function showRetryableToast(
  toast: UseToastReturnType,
  message: string,
  onRetry: () => void
) {
  showErrorToast(toast, {
    title: 'Error',
    description: message,
    duration: 10000,
    action: {
      label: 'Retry',
      onClick: onRetry
    }
  });
}

/**
 * Show undo toast
 */
export function showUndoToast(
  toast: UseToastReturnType,
  message: string,
  onUndo: () => void
) {
  showToast(toast, {
    title: 'Action Completed',
    description: message,
    duration: 5000,
    action: {
      label: 'Undo',
      onClick: onUndo
    }
  });
}
