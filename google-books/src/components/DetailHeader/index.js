import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReturnArrow from '../../imgs/detail/return_arrow.png';
import unavailableCover from '../../imgs/unavailable.png';
import DetailHeaderDisplay from './styles/DetailHeaderDisplay';

export default function DetailHeader({ thumbnail }) {
  const image = thumbnail === 'unavailable' ? unavailableCover : thumbnail;
  return (
    <DetailHeaderDisplay>
      <Link to="/" className="return-home">
        <button type="button">
          <img src={ReturnArrow} alt="return arrow" />
        </button>
      </Link>
      <img src={image} alt="Book Cover" className="book-cover" />
    </DetailHeaderDisplay>
  );
}

DetailHeader.propTypes = {
  thumbnail: PropTypes.string.isRequired,
};
