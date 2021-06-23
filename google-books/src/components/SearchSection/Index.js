import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BookCard from '../BookCard/index';

export default function SearchSection({ query }) {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState('');
  const pageIndex = 1 * 9;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=relevance&startIndex=${pageIndex}&maxResults=9`;

  const getResultsFromQuery = async (queryUrl) => {
    const responseJSON = await fetch(queryUrl);
    const response = await responseJSON.json();
    const books = response.items.map((item) => (
      {
        id: item.id,
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors ? item.volumeInfo.authors[0] : 'unavailable',
        cover: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : 'unavailable',
      }));
    return books;
  };
  useEffect(async () => {
    const queryResult = await getResultsFromQuery(url);
    setResults(queryResult);
    setLoading(false);
  }, [query]);

  return (
    <div className="search-results">
      {loading
        ? <h1>loading</h1>
        : results.map((info) => <BookCard info={info} key={`${info.title}-`} />)}
    </div>
    /* <button type="button" className="load-more">Load More</button> */
  );
}

SearchSection.propTypes = {
  query: PropTypes.string.isRequired,
};
