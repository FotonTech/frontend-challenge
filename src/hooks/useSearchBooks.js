import useSWR from "swr";
import { URL } from "utils/fetcher";

export const fetcher = async (aha, params) => {
  const search = new URLSearchParams({
    maxResults: 20,
    startIndex: "0",
    orderBy: "relevance",
    ...params,
  });

  const response = await fetch(`${URL}?${search.toString()}`);

  if (!response.ok) {
    throw Error(response.status);
  }

  return response.json();
};

export const useSearchBooks = (queryParams) => {
  console.log("Query Params: ", queryParams);
  const { data, error } = useSWR([URL, queryParams], fetcher);
  const loading = !data && !error;

  return { data, error, loading };
};
