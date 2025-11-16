import React from 'react';

interface SkeletonLoaderProps {
  variant?: 'card' | 'text' | 'circle' | 'line' | 'button';
  count?: number;
  width?: string;
  height?: string;
  className?: string;
}

export default function SkeletonLoader({
  variant = 'card',
  count = 1,
  width = 'w-full',
  height = 'h-12',
  className = ''
}: SkeletonLoaderProps) {
  const baseClass = 'bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded';
  
  const variants = {
    card: `${baseClass} p-4 space-y-4`,
    text: `${baseClass} rounded-lg`,
    circle: `${baseClass} rounded-full aspect-square`,
    line: `${baseClass} h-3 rounded-lg`,
    button: `${baseClass} rounded-lg h-10 w-24`
  };

  const skeletonClass = variants[variant] || variants.card;

  if (variant === 'card') {
    return (
      <div className={`${width} space-y-3 ${className}`}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="p-4 bg-white rounded-lg border border-gray-100 space-y-3">
            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-3/4"></div>
            <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-full"></div>
            <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-5/6"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`${skeletonClass} ${width} ${height} ${className}`}></div>
  );
}
