import axios from 'axios';

type queryProps = {
  query: string;
  startIndex: number;
};

const { REACT_APP_GOOGLE_BOOKS_API, REACT_APP_GOOGLE_BOOKS_API_KEY } =
  process.env;

export const searchBooks = ({ query, startIndex }: queryProps) => {
  return axios.get(`${REACT_APP_GOOGLE_BOOKS_API}`, {
    params: {
      q: query,
      startIndex,
      maxResults: 10,
      key: REACT_APP_GOOGLE_BOOKS_API_KEY
    }
  });
};
