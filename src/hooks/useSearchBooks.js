import useSWR from "swr";
import { URL } from "utils";

export const fetcher = async (url, params) => {
  const search = new URLSearchParams({
    maxResults: 20,
    startIndex: "0",
    orderBy: "relevance",
    ...params,
  });

  const response = await fetch(`${url}?${search.toString()}`);

  if (!response.ok) {
    throw Error(response.status);
  }

  return response.json();
};

export const useSearchBooks = (queryParams) => {
  const { data, error } = useSWR([URL, queryParams], fetcher);
  const loading = !data && !error;

  return { data, error, loading };
};
