import useSWR from "swr";
import { URL } from "../utils";

export const fetcher = async (url, id) => {
  const response = await fetch(`${url}/${id}`);

  if (!response.ok) {
    throw Error(response.status);
  }

  return response.json();
};

export const useGetBookById = (id) => {
  const { data, error } = useSWR([URL, id], fetcher);
  const loading = !data && !error;

  return { data, error, loading };
};
