import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData= <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps? : any[]) => {
  const [data, setGenre] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLaoding, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setLoading(false);
        setGenre(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
  }, deps ? [...deps] : []);

  return { data, error, isLaoding};
};

export default useData;
