import useSWR from "swr";
import { discoverBooks, parseBooks } from "utils";
import { URL } from "utils/fetcher";

export const fetcher = async (url) => {
  const [book1, book2, book3, book4, book5] = await Promise.all([
    fetch(`${url}?q=${discoverBooks[0]}`).then((response) => response.json()),
    fetch(`${url}?q=${discoverBooks[1]}`).then((response) => response.json()),
    fetch(`${url}?q=${discoverBooks[2]}`).then((response) => response.json()),
    fetch(`${url}?q=${discoverBooks[3]}`).then((response) => response.json()),
    fetch(`${url}?q=${discoverBooks[4]}`).then((response) => response.json()),
    fetch(`${url}?q=${discoverBooks[5]}`).then((response) => response.json()),
  ]);

  return {
    book1: parseBooks(book1),
    book2: parseBooks(book2),
    book3: parseBooks(book3),
    book4: parseBooks(book4),
    book5: parseBooks(book5),
  };
};

export const useDiscoveryBooks = () => {
  const { data, error } = useSWR(URL, fetcher);
  const loading = !data && !error;

  const dataArray =
    data &&
    Object.keys(data).map((d) => {
      return data[d];
    });

  return { data: dataArray, error, loading };
};
