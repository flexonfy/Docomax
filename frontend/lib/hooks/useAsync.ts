import { useState, useCallback, useEffect } from 'react';

export interface AsyncState<T> {
  status: 'idle' | 'pending' | 'success' | 'error';
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

export interface UseAsyncOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  autoRun?: boolean;
}

/**
 * Hook for managing async operations with loading states
 */
export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  options: UseAsyncOptions = {}
): AsyncState<T> & {
  execute: () => Promise<T | null>;
  reset: () => void;
} {
  const { onSuccess, onError, autoRun = false } = options;

  const [state, setState] = useState<AsyncState<T>>({
    status: 'idle',
    data: null,
    error: null,
    isLoading: false
  });

  const execute = useCallback(async () => {
    setState({
      status: 'pending',
      data: null,
      error: null,
      isLoading: true
    });

    try {
      const response = await asyncFunction();
      setState({
        status: 'success',
        data: response,
        error: null,
        isLoading: false
      });

      onSuccess?.();
      return response;
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      setState({
        status: 'error',
        data: null,
        error: err,
        isLoading: false
      });

      onError?.(err);
      return null;
    }
  }, [asyncFunction, onSuccess, onError]);

  const reset = useCallback(() => {
    setState({
      status: 'idle',
      data: null,
      error: null,
      isLoading: false
    });
  }, []);

  useEffect(() => {
    if (autoRun) {
      execute();
    }
  }, [autoRun, execute]);

  return {
    ...state,
    execute,
    reset
  };
}

/**
 * Hook for managing multiple async operations
 */
export function useAsyncMany<T>(
  asyncFunctions: (() => Promise<T>)[],
  options: UseAsyncOptions = {}
): AsyncState<T[]> & {
  execute: () => Promise<T[] | null>;
  reset: () => void;
} {
  const { onSuccess, onError, autoRun = false } = options;

  const [state, setState] = useState<AsyncState<T[]>>({
    status: 'idle',
    data: null,
    error: null,
    isLoading: false
  });

  const execute = useCallback(async () => {
    setState({
      status: 'pending',
      data: null,
      error: null,
      isLoading: true
    });

    try {
      const responses = await Promise.all(asyncFunctions.map(fn => fn()));
      setState({
        status: 'success',
        data: responses,
        error: null,
        isLoading: false
      });

      onSuccess?.();
      return responses;
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      setState({
        status: 'error',
        data: null,
        error: err,
        isLoading: false
      });

      onError?.(err);
      return null;
    }
  }, [asyncFunctions, onSuccess, onError]);

  const reset = useCallback(() => {
    setState({
      status: 'idle',
      data: null,
      error: null,
      isLoading: false
    });
  }, []);

  useEffect(() => {
    if (autoRun) {
      execute();
    }
  }, [autoRun, execute]);

  return {
    ...state,
    execute,
    reset
  };
}

/**
 * Hook for managing async operations with manual control
 */
export function useFetch<T>(
  url: string,
  options: {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
    headers?: Record<string, string>;
    autoRun?: boolean;
  } = {}
): AsyncState<T> & {
  refetch: () => Promise<T | null>;
  reset: () => void;
} {
  const { method = 'GET', body, headers = {}, autoRun = false } = options;

  const [state, setState] = useState<AsyncState<T>>({
    status: 'idle',
    data: null,
    error: null,
    isLoading: false
  });

  const refetch = useCallback(async () => {
    setState(prev => ({
      ...prev,
      status: 'pending',
      isLoading: true
    }));

    try {
      const response = await fetch(url, {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json() as T;
      setState({
        status: 'success',
        data,
        error: null,
        isLoading: false
      });

      return data;
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      setState({
        status: 'error',
        data: null,
        error: err,
        isLoading: false
      });

      return null;
    }
  }, [url, method, body, headers]);

  const reset = useCallback(() => {
    setState({
      status: 'idle',
      data: null,
      error: null,
      isLoading: false
    });
  }, []);

  useEffect(() => {
    if (autoRun) {
      refetch();
    }
  }, [autoRun, refetch]);

  return {
    ...state,
    execute: refetch,
    refetch,
    reset
  };
}
