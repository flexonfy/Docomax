import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: number | string;
  disabled?: boolean;
  content: React.ReactNode;
}

interface TabNavigationProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
  variant?: 'default' | 'pills' | 'underline';
}

export default function TabNavigation({
  tabs,
  defaultTab,
  onChange,
  className = '',
  variant = 'default'
}: TabNavigationProps) {
  const [activeTab, setActiveTab] = React.useState(defaultTab || tabs[0]?.id || '');

  const handleChange = (value: string) => {
    setActiveTab(value);
    onChange?.(value);
  };

  const triggerClassName = {
    default: 'data-[state=active]:border-b-2 data-[state=active]:border-blue-600',
    pills: 'rounded-full px-4 py-2 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700',
    underline: 'border-b-2 border-transparent data-[state=active]:border-blue-600 rounded-none'
  }[variant];

  return (
    <Tabs value={activeTab} onValueChange={handleChange} className={className}>
      <TabsList className="flex flex-wrap gap-1 w-full justify-start bg-transparent border-b border-gray-200 p-0 h-auto">
        {tabs.map(tab => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            disabled={tab.disabled}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${triggerClassName} disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {tab.icon && <span className="flex-shrink-0">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span className="ml-1 px-2 py-0.5 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">
                {tab.badge}
              </span>
            )}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map(tab => (
        <TabsContent key={tab.id} value={tab.id} className="mt-6">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
