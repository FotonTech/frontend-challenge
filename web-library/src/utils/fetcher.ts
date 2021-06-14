import { FetchDataInput, HttpMethod } from "../models/dataFetching";

export const fetcher = async <T>({ url, method, body, headers }: FetchDataInput): Promise<T> => {
  const fetchInput: RequestInit = {
    method: HttpMethod[method],
    headers,
    body: JSON.stringify(body),
  }
  const result = await fetch(url, fetchInput)
  const json = await result.json()
  return json
}

