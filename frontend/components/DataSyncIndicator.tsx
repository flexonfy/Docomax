import React, { useEffect, useState } from 'react';
import { Check, AlertCircle, Wifi, WifiOff } from 'lucide-react';

interface DataSyncIndicatorProps {
  isSyncing?: boolean;
  lastSyncTime?: Date;
  isOnline?: boolean;
  showLabel?: boolean;
}

export default function DataSyncIndicator({
  isSyncing = false,
  lastSyncTime,
  isOnline = true,
  showLabel = true
}: DataSyncIndicatorProps) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (isSyncing) {
      setDisplayText('Saving...');
    } else if (!isOnline) {
      setDisplayText('Offline');
    } else if (lastSyncTime) {
      const now = new Date();
      const diffMs = now.getTime() - lastSyncTime.getTime();
      const diffMins = Math.floor(diffMs / 60000);
      
      if (diffMins < 1) {
        setDisplayText('Saved');
      } else if (diffMins < 60) {
        setDisplayText(`Saved ${diffMins}m ago`);
      } else {
        const diffHours = Math.floor(diffMins / 60);
        setDisplayText(`Saved ${diffHours}h ago`);
      }
    } else {
      setDisplayText('Ready');
    }
  }, [isSyncing, lastSyncTime, isOnline]);

  return (
    <div className="flex items-center space-x-2 text-xs">
      {isSyncing ? (
        <>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          {showLabel && <span className="text-blue-600">{displayText}</span>}
        </>
      ) : !isOnline ? (
        <>
          <WifiOff className="w-3 h-3 text-red-600" />
          {showLabel && <span className="text-red-600">{displayText}</span>}
        </>
      ) : (
        <>
          <Check className="w-3 h-3 text-green-600" />
          {showLabel && <span className="text-gray-600">{displayText}</span>}
        </>
      )}
    </div>
  );
}
