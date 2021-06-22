import React from 'react';
import PropTypes from 'prop-types';
import BookCardDisplay from './styles/BookCardDisplay';

export default function BookCard({ info }) {
  return (
    <BookCardDisplay>
      <img src={info.cover} alt="book cover" />
      <p className="title">{info.title}</p>
      <p className="author">{info.author}</p>
    </BookCardDisplay>
  );
}

BookCard.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,
};
