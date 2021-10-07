import useSWR from "swr";
import { currentlyReading, parseBooks, URL } from "utils";

export const fetcher = async (url) => {
  const [book1, book2, book3] = await Promise.all([
    fetch(`${url}?q=${currentlyReading[0]}`).then((response) =>
      response.json()
    ),
    fetch(`${url}?q=${currentlyReading[1]}`).then((response) =>
      response.json()
    ),
    fetch(`${url}?q=${currentlyReading[2]}`).then((response) =>
      response.json()
    ),
  ]);

  return {
    book1: parseBooks(book1),
    book2: parseBooks(book2),
    book3: parseBooks(book3),
  };
};

export const useReadingBooks = () => {
  const { data, error } = useSWR(URL, fetcher);
  const loading = !data && !error;

  const dataArray =
    data &&
    Object.keys(data).map((d) => {
      return data[d];
    });

  return { data: dataArray, error, loading };
};
