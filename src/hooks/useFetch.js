import { useState, useEffect } from 'react';

const useFetch = (endpoint, dataObj) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const options = !dataObj
    ? {}
    : {
        method: 'POST',
        body: JSON.stringify(dataObj),
        headers,
      };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint, options);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
