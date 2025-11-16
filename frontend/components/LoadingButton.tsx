import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/button';

interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
  loadingText?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  children: React.ReactNode;
}

export default function LoadingButton({
  isLoading = false,
  loadingText = 'Loading...',
  onClick,
  children,
  disabled,
  ...props
}: LoadingButtonProps) {
  const [internalLoading, setInternalLoading] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      setInternalLoading(true);
      try {
        const result = onClick(e);
        if (result instanceof Promise) {
          await result;
        }
      } finally {
        setInternalLoading(false);
      }
    }
  };

  const loading = isLoading || internalLoading;

  return (
    <Button
      {...props}
      disabled={disabled || loading}
      onClick={handleClick}
      className={props.className}
    >
      {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
      {loading ? loadingText : children}
    </Button>
  );
}
