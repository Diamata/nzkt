import React, {useEffect, useState} from "react";
import axios from "axios";

export function useFetch (url: string) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(() => {
    (
      async function() {
        try {
          setLoading(true)
          const response = await axios.get(url);
          if (response.status === 200) {
            setData(response.data);
          }
        } catch (error) {
          setError(error)
        } finally {
          setLoading(false);
        }
      }
    )()
  }, [url]);

  return { data, error, loading };
}
