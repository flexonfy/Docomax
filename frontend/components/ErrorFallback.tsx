import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ErrorFallbackProps {
  error: Error;
  errorInfo: React.ErrorInfo | null;
  onReset: () => void;
}

export default function ErrorFallback({ error, errorInfo, onReset }: ErrorFallbackProps) {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 p-4">
      <Card className="w-full max-w-md border-red-200 shadow-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-red-100 rounded-full">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <CardTitle className="text-2xl text-red-600">Something Went Wrong</CardTitle>
          <CardDescription className="mt-2">
            An unexpected error occurred. Please try refreshing or going back home.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gray-100 rounded-lg p-3 overflow-auto max-h-40">
            <details className="cursor-pointer">
              <summary className="font-semibold text-gray-700 text-sm mb-2">
                Error Details
              </summary>
              <div className="text-xs text-gray-600 space-y-1">
                <p className="font-mono break-all">{error.message}</p>
                {errorInfo && (
                  <pre className="text-xs overflow-auto whitespace-pre-wrap max-h-32">
                    {errorInfo.componentStack}
                  </pre>
                )}
              </div>
            </details>
          </div>

          <div className="space-y-2 pt-2">
            <Button
              onClick={onReset}
              variant="default"
              className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
            <Button
              onClick={handleGoHome}
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <Home className="h-4 w-4" />
              Go Home
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center pt-2">
            If the problem persists, please refresh the page or contact support.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
