import { useState, useEffect } from 'react';

const baseURL = 'https://api.coingecko.com/api/v3/';

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(baseURL + endpoint);
        if (!response.ok) {
          throw new Error(`An error has occurred: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { loading, data, error };
};

export default useFetch;
