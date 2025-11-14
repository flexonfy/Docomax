import React, { useState, useEffect } from 'react';
import { acceptServiceWorkerUpdate } from '../lib/serviceWorker';
import { Button } from '@/components/ui/button';
import { X, RefreshCw } from 'lucide-react';

export default function ServiceWorkerUpdateNotification() {
  const [showUpdate, setShowUpdate] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const handleServiceWorkerUpdate = () => {
      setShowUpdate(true);
    };

    window.addEventListener('serviceWorkerUpdated', handleServiceWorkerUpdate);

    return () => {
      window.removeEventListener('serviceWorkerUpdated', handleServiceWorkerUpdate);
    };
  }, []);

  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      await acceptServiceWorkerUpdate();
    } catch (error) {
      console.error('Failed to update service worker:', error);
      setIsUpdating(false);
    }
  };

  const handleDismiss = () => {
    setShowUpdate(false);
  };

  if (!showUpdate) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-sm z-50 animate-in slide-in-from-bottom-2">
      <div className="bg-white border border-blue-200 rounded-lg shadow-lg p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-sm">Update Available</h3>
            <p className="text-gray-600 text-sm mt-1">
              A new version of the app is available. Restart to update.
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-gray-600 ml-2"
            disabled={isUpdating}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={handleUpdate}
            disabled={isUpdating}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-sm"
          >
            {isUpdating ? (
              <>
                <RefreshCw className="h-3 w-3 mr-2 animate-spin" />
                Updating...
              </>
            ) : (
              'Update Now'
            )}
          </Button>
          <Button
            onClick={handleDismiss}
            disabled={isUpdating}
            variant="outline"
            className="text-sm"
          >
            Later
          </Button>
        </div>
      </div>
    </div>
  );
}
