/**
 * Service Worker registration and management
 */

let registration: ServiceWorkerRegistration | null = null;

/**
 * Register the service worker
 */
export async function registerServiceWorker(): Promise<void> {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  try {
    registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/'
    });

    // Handle updates
    registration.addEventListener('updatefound', () => {
      const newWorker = registration?.installing;
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New service worker available
            notifyUpdateAvailable();
          }
        });
      }
    });

    // Check for updates periodically
    setInterval(() => {
      registration?.update();
    }, 60000); // Check every minute
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Service Worker registration failed:', error);
    }
  }
}

/**
 * Unregister the service worker
 */
export async function unregisterServiceWorker(): Promise<void> {
  if (registration) {
    try {
      await registration.unregister();
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to unregister Service Worker:', error);
      }
    }
  }
}

/**
 * Clear service worker cache
 */
export async function clearServiceWorkerCache(): Promise<void> {
  if (registration && navigator.serviceWorker.controller) {
    return new Promise((resolve, reject) => {
      const messageChannel = new MessageChannel();
      messageChannel.port1.onmessage = (event) => {
        if (event.data.success) {
          if (process.env.NODE_ENV === 'development') {
            console.log('Service Worker cache cleared');
          }
          resolve();
        } else {
          reject(new Error('Failed to clear cache'));
        }
      };

      navigator.serviceWorker.controller.postMessage(
        { type: 'CLEAR_CACHE' },
        [messageChannel.port2]
      );
    });
  }
}

/**
 * Check if offline
 */
export function isOffline(): boolean {
  return !navigator.onLine;
}

/**
 * Listen for offline/online status changes
 */
export function onOfflineStatusChange(callback: (isOffline: boolean) => void): () => void {
  const handleOnline = () => callback(false);
  const handleOffline = () => callback(true);

  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  };
}

/**
 * Notify user about service worker update
 */
function notifyUpdateAvailable(): void {
  // Dispatch custom event that components can listen to
  const event = new CustomEvent('serviceWorkerUpdated', {
    detail: { message: 'A new version of the app is available' }
  });
  window.dispatchEvent(event);
}

/**
 * Accept service worker update and reload
 */
export async function acceptServiceWorkerUpdate(): Promise<void> {
  if (registration?.waiting) {
    registration.waiting.postMessage({ type: 'SKIP_WAITING' });

    // Wait for controller change
    await new Promise((resolve) => {
      let refreshing = false;
      navigator.serviceWorker.oncontrollerchange = () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
        resolve(undefined);
      };
    });
  }
}
