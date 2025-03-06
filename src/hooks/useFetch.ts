import { useState, useEffect } from 'react';
import API_ENDPOINTS from '../config/apiConfig';

function useFetch<T>(endpointKey: keyof typeof API_ENDPOINTS) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = API_ENDPOINTS[endpointKey];

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);

        const result: T = await response.json();
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpointKey]);

  return { data, loading, error };
}

export default useFetch;
