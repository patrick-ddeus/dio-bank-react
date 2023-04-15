import axios from "axios";
import { useEffect, useState } from "react";

interface responseProtocols {
  _id?: string;
  email?: string;
  fullname?: string;
  __v?: number;
}

export interface RequestError extends Error {
  name: string;
  message: string;
  data?: object;
  statusCode?: number;
  statusText?: string;
}

const useFetch = (url: string) => {
  const [data, setData] = useState<responseProtocols[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | RequestError>(null);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const data: responseProtocols[] = await axios.get(url);
        setData(data);
      } catch (err: any) {
        setError(err);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetch;
