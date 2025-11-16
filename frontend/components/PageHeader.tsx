import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  backButton?: boolean;
  backTo?: string;
  actions?: React.ReactNode;
  className?: string;
}

export default function PageHeader({
  title,
  subtitle,
  icon,
  backButton = false,
  backTo,
  actions,
  className = ''
}: PageHeaderProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (backTo) {
      navigate(backTo);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4 flex-1">
          {backButton && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBack}
              className="mt-1"
              aria-label="Go back"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          )}

          <div className="flex items-start space-x-3 flex-1">
            {icon && (
              <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl text-blue-600 flex-shrink-0">
                {icon}
              </div>
            )}

            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg text-gray-600 mt-2">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>

        {actions && (
          <div className="flex items-center space-x-2 ml-4 flex-shrink-0">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
