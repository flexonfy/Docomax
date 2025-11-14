import React from 'react';

interface LoadingSkeletonProps {
  count?: number;
  type?: 'card' | 'list' | 'table' | 'text';
  className?: string;
}

function SkeletonLine({ width = 'w-full' }: { width?: string }) {
  return <div className={`${width} h-4 bg-gray-200 rounded animate-pulse mb-2`} />;
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-4 animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-3/4" />
      <div className="space-y-2">
        <SkeletonLine />
        <SkeletonLine width="w-5/6" />
        <SkeletonLine width="w-4/5" />
      </div>
      <div className="flex gap-2 pt-2">
        <div className="h-8 w-20 bg-gray-200 rounded" />
        <div className="h-8 w-20 bg-gray-200 rounded" />
      </div>
    </div>
  );
}

function SkeletonListItem() {
  return (
    <div className="flex gap-3 p-4 border-b animate-pulse">
      <div className="h-10 w-10 bg-gray-200 rounded-full" />
      <div className="flex-1">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
      </div>
    </div>
  );
}

function SkeletonTableRow() {
  return (
    <div className="flex gap-4 p-4 border-b animate-pulse">
      <div className="h-4 bg-gray-200 rounded flex-1" />
      <div className="h-4 bg-gray-200 rounded flex-1" />
      <div className="h-4 bg-gray-200 rounded flex-1" />
      <div className="h-4 bg-gray-200 rounded w-20" />
    </div>
  );
}

function SkeletonText() {
  return (
    <div className="space-y-2 animate-pulse">
      <SkeletonLine width="w-full" />
      <SkeletonLine width="w-4/5" />
      <SkeletonLine width="w-3/4" />
    </div>
  );
}

export default function LoadingSkeleton({
  count = 1,
  type = 'card',
  className = ''
}: LoadingSkeletonProps) {
  const items = [];

  for (let i = 0; i < count; i++) {
    switch (type) {
      case 'card':
        items.push(<SkeletonCard key={i} />);
        break;
      case 'list':
        items.push(<SkeletonListItem key={i} />);
        break;
      case 'table':
        items.push(<SkeletonTableRow key={i} />);
        break;
      case 'text':
        items.push(<SkeletonText key={i} />);
        break;
    }
  }

  const gapClass = type === 'card' ? 'gap-4' : '';

  return (
    <div className={`flex flex-col ${gapClass} ${className}`}>
      {items}
    </div>
  );
}
