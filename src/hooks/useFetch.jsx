import { useEffect, useState, useCallback } from "react";

export const useFetch = (url) => {
  const [data, setdata] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const Data = await response.json();
      setdata(Data);
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, refetch: fetchData };
};
