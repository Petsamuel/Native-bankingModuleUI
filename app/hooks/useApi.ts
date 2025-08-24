import { useState, useEffect, useCallback } from 'react';

type ApiFunction<T> = () => Promise<T>;
type Status = 'idle' | 'loading' | 'success' | 'error';

interface UseApiResult<T> {
  data: T | null;
  error: string | null;
  status: Status;
  execute: () => Promise<void>;
}

export function useApi<T>(apiFunction: ApiFunction<T>, immediate = true): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>('idle');

  const execute = useCallback(async () => {
    setStatus('loading');
    setError(null);
    
    try {
      const response = await apiFunction();
      setData(response);
      setStatus('success');
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      setStatus('error');
    }
  }, [apiFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { data, error, status, execute };
}