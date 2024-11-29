import { useState, useEffect } from 'react';
import { MSG_ERROR_FAIL_TO_FETCH } from '@/constants';

type TReqMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export function useFetch<T>(url: string, method: TReqMethod = 'GET') {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<T>();
  useEffect(() => {
    setIsFetching(true);
    fetch(url, { method })
      .then(async (r) => {
        if (!r.ok) {
          throw new Error(MSG_ERROR_FAIL_TO_FETCH);
        }
        return r.json();
      })
      .then(setData)
      .catch((e) => setError(e.message))
      .finally(() => setIsFetching(false));
  }, [method, url]);
  return {
    isFetching,
    data,
    error,
  };
}
