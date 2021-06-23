import React from 'react';
import { useLocation } from 'react-router-dom';
// import React from 'react';
import DetailFooter from '../components/DetailFooter';
import DetailHeader from '../components/DetailHeader';
import DetailContent from '../components/DetailContent';
import DetailDisplay from '../styles/DetailDisplay';

export default function Details() {
  const location = useLocation();
  const book = location.book.volumeInfo;
  const bookInfo = {
    title: book.title,
    subtitle: book.subtitle ? book.subtitle : '',
    author: book.authors,
    description: book.description,
    thumbnail: book.imageLinks?.thumbnail ? book.imageLinks.thumbnail : 'unavailable',
  };
  return (
    <DetailDisplay>
      <DetailHeader thumbnail={bookInfo.thumbnail} />
      <DetailContent
        author={bookInfo.author[0]}
        description={bookInfo.description}
        title={bookInfo.title}
        subtitle={bookInfo.subtitle}
      />
      <DetailFooter />
    </DetailDisplay>
  );
}
