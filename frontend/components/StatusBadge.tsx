import React from 'react';
import { CheckCircle, AlertCircle, Clock, XCircle, Info } from 'lucide-react';

interface StatusBadgeProps {
  status: 'success' | 'error' | 'warning' | 'info' | 'pending';
  label: string;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function StatusBadge({
  status,
  label,
  showIcon = true,
  size = 'md',
  className = ''
}: StatusBadgeProps) {
  const baseClass = 'inline-flex items-center gap-2 rounded-full font-medium transition-colors';

  const statusConfig = {
    success: {
      icon: CheckCircle,
      bg: 'bg-green-100',
      text: 'text-green-800',
      border: 'border border-green-300'
    },
    error: {
      icon: XCircle,
      bg: 'bg-red-100',
      text: 'text-red-800',
      border: 'border border-red-300'
    },
    warning: {
      icon: AlertCircle,
      bg: 'bg-amber-100',
      text: 'text-amber-800',
      border: 'border border-amber-300'
    },
    info: {
      icon: Info,
      bg: 'bg-blue-100',
      text: 'text-blue-800',
      border: 'border border-blue-300'
    },
    pending: {
      icon: Clock,
      bg: 'bg-gray-100',
      text: 'text-gray-800',
      border: 'border border-gray-300'
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  const sizeClass = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  }[size];

  const iconSize = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  }[size];

  return (
    <div className={`${baseClass} ${config.bg} ${config.text} ${config.border} ${sizeClass} ${className}`}>
      {showIcon && <Icon className={iconSize} />}
      <span>{label}</span>
    </div>
  );
}
