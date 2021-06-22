import React from 'react';
import { Link } from 'react-router-dom';
import ReturnArrow from '../../imgs/return_arrow.png';
import BookCover1 from '../../imgs/book1.png';
import DetailHeaderDisplay from './styles/DetailHeaderDisplay';

export default function DetailHeader() {
  return (
    <DetailHeaderDisplay>
      <Link to="/" className="return-home">
        <button type="button">
          <img src={ReturnArrow} alt="return arrow" />
        </button>
      </Link>
      <img src={BookCover1} alt="Book Cover" className="book-cover" />
    </DetailHeaderDisplay>
  );
}
