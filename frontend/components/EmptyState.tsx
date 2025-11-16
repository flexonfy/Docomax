import React from 'react';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  icon?: 'appointments' | 'records' | 'diseases' | 'favorites' | 'medications' | 'search' | 'generic';
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
}

const iconSVGs: { [key: string]: string } = {
  appointments: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-32 h-32">
    <rect fill="#e5f2ff" width="200" height="200" rx="20"/>
    <g transform="translate(50, 50)">
      <rect x="10" y="20" width="80" height="60" rx="4" fill="none" stroke="#3b82f6" stroke-width="2"/>
      <line x1="10" y1="40" x2="90" y2="40" stroke="#3b82f6" stroke-width="2"/>
      <circle cx="30" cy="60" r="3" fill="#3b82f6"/>
      <circle cx="50" cy="60" r="3" fill="#3b82f6"/>
      <circle cx="70" cy="60" r="3" fill="#3b82f6"/>
      <text x="50" y="90" text-anchor="middle" font-size="12" fill="#3b82f6" font-weight="bold">No Appointments</text>
    </g>
  </svg>`,
  
  records: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-32 h-32">
    <rect fill="#f0f9e8" width="200" height="200" rx="20"/>
    <g transform="translate(40, 30)">
      <path d="M 0 0 L 0 100 Q 0 110 10 110 L 110 110 Q 120 110 120 100 L 120 0" fill="none" stroke="#10b981" stroke-width="2"/>
      <line x1="10" y1="20" x2="110" y2="20" stroke="#10b981" stroke-width="2"/>
      <line x1="10" y1="35" x2="100" y2="35" stroke="#10b981" stroke-width="1" stroke-dasharray="2,2"/>
      <line x1="10" y1="50" x2="100" y2="50" stroke="#10b981" stroke-width="1" stroke-dasharray="2,2"/>
      <line x1="10" y1="65" x2="100" y2="65" stroke="#10b981" stroke-width="1" stroke-dasharray="2,2"/>
    </g>
  </svg>`,
  
  medications: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-32 h-32">
    <rect fill="#fef3e2" width="200" height="200" rx="20"/>
    <g transform="translate(60, 40)">
      <rect x="0" y="20" width="40" height="60" rx="4" fill="none" stroke="#f59e0b" stroke-width="2"/>
      <line x1="8" y1="28" x2="32" y2="28" stroke="#f59e0b" stroke-width="2"/>
      <line x1="8" y1="40" x2="32" y2="40" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2,2"/>
      <line x1="8" y1="52" x2="32" y2="52" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2,2"/>
      <circle cx="60" cy="35" r="8" fill="#f59e0b"/>
      <circle cx="60" cy="55" r="8" fill="#f59e0b"/>
      <circle cx="60" cy="75" r="8" fill="#f59e0b"/>
    </g>
  </svg>`,
  
  favorites: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-32 h-32">
    <rect fill="#fce7f3" width="200" height="200" rx="20"/>
    <g transform="translate(75, 40)">
      <path d="M 25 10 L 30 25 L 45 25 L 33 35 L 38 50 L 25 40 L 12 50 L 17 35 L 5 25 L 20 25 Z" fill="none" stroke="#ec4899" stroke-width="2"/>
    </g>
  </svg>`,
  
  search: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-32 h-32">
    <rect fill="#f3e8ff" width="200" height="200" rx="20"/>
    <g transform="translate(40, 40)">
      <circle cx="35" cy="35" r="25" fill="none" stroke="#a855f7" stroke-width="2"/>
      <line x1="55" y1="55" x2="75" y2="75" stroke="#a855f7" stroke-width="2" stroke-linecap="round"/>
    </g>
  </svg>`,
  
  diseases: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-32 h-32">
    <rect fill="#e0e7ff" width="200" height="200" rx="20"/>
    <g transform="translate(45, 45)">
      <circle cx="30" cy="30" r="25" fill="none" stroke="#6366f1" stroke-width="2"/>
      <line x1="30" y1="10" x2="30" y2="50" stroke="#6366f1" stroke-width="2"/>
      <line x1="10" y1="30" x2="50" y2="30" stroke="#6366f1" stroke-width="2"/>
    </g>
  </svg>`,
  
  generic: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-32 h-32">
    <rect fill="#f1f5f9" width="200" height="200" rx="20"/>
    <g transform="translate(75, 60)">
      <path d="M 0 0 L 10 20 L 0 20 Z" fill="#64748b"/>
      <rect x="-5" y="20" width="10" height="30" fill="#64748b"/>
    </g>
  </svg>`
};

export default function EmptyState({
  icon = 'generic',
  title,
  description,
  action,
  secondaryAction
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:py-20">
      {/* SVG Icon Illustration */}
      <div 
        className="mb-6 rounded-full p-2"
        dangerouslySetInnerHTML={{ __html: iconSVGs[icon] || iconSVGs.generic }}
      />
      
      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 text-center">
        {title}
      </h3>
      
      {/* Description */}
      {description && (
        <p className="text-sm sm:text-base text-gray-600 text-center mb-6 max-w-sm">
          {description}
        </p>
      )}
      
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        {action && (
          <Button 
            onClick={action.onClick}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {action.icon && <span className="mr-2">{action.icon}</span>}
            {action.label}
          </Button>
        )}
        
        {secondaryAction && (
          <Button 
            onClick={secondaryAction.onClick}
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            {secondaryAction.label}
          </Button>
        )}
      </div>
    </div>
  );
}
