import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookCardDisplay from './styles/BookCardDisplay';
import unavailableCover from '../../imgs/unavailable.png';
import fetchBook from '../../services';

export default function BookCard({ info }) {
  const history = useHistory();
  const image = info.cover === 'unavailable' ? unavailableCover : info.cover;
  const cleanedTitle = info.title.length > 30 ? `${info.title.slice(0, 30)}...` : info.title;
  const onClickMain = async () => {
    const { id } = info;
    const result = await fetchBook(id);
    history.push({
      pathname: '/details',
      book: result,
      id,
    });
  };

  return (
    <BookCardDisplay>
      <button type="button" onClick={onClickMain}>
        <img src={image} alt="book cover" />
        <p className="title">{cleanedTitle}</p>
        <p className="author">{info.author ? info.author : 'unavailable'}</p>
      </button>
    </BookCardDisplay>
  );
}

BookCard.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
