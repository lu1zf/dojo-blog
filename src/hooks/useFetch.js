import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return response.json();
        })
        .then(data => {
          setData(data);
          setError(null);
        })
        .catch(error => {
          setError(error.message);
        })
        .finally(() => {
          setIsPending(false);
        })
    }, 1000);
  }, [url]);

  return {
    data,
    isPending,
    error,
  }
}

export default useFetch;