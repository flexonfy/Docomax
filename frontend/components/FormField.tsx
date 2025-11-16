import React from 'react';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';
import { Label } from '@/components/ui/label';

interface FormFieldProps {
  label?: string;
  error?: string;
  success?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function FormField({
  label,
  error,
  success,
  hint,
  required = false,
  children,
  className = ''
}: FormFieldProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <Label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
      )}

      <div className="relative">
        {children}
      </div>

      {error && (
        <div className="flex items-start space-x-2 text-sm text-red-600 animate-in fade-in">
          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {success && !error && (
        <div className="flex items-start space-x-2 text-sm text-green-600 animate-in fade-in">
          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span>{success}</span>
        </div>
      )}

      {hint && !error && !success && (
        <div className="flex items-start space-x-2 text-sm text-gray-500">
          <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span>{hint}</span>
        </div>
      )}
    </div>
  );
}
