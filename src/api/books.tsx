import axios from 'axios';

type searchProps = {
  query: string;
  startIndex: number;
};

const { REACT_APP_GOOGLE_BOOKS_API, REACT_APP_GOOGLE_BOOKS_API_KEY } =
  process.env;

export const searchBooks = ({ query, startIndex }: searchProps) => {
  return axios.get(`${REACT_APP_GOOGLE_BOOKS_API}`, {
    params: {
      q: query,
      startIndex,
      maxResults: 8,
      key: REACT_APP_GOOGLE_BOOKS_API_KEY
    }
  });
};

export const getById = (id: string) => {
  return axios.get(`${REACT_APP_GOOGLE_BOOKS_API}/${id}`, {
    params: {
      key: REACT_APP_GOOGLE_BOOKS_API_KEY
    }
  });
};
