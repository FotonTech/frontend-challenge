import React from 'react';
import BookCover from '../../imgs/book3.png';
import CurrentlyDisplay from './styles/CurrentlyDisplay';

export default function CurrentlySection() {
  return (
    <CurrentlyDisplay>
      <div className="section-header">
        <h3>Currently Reading</h3>
        <h4>All</h4>
      </div>
      <div className="section-info">
        <img src={BookCover} alt="book cover" />
        <div className="info">
          <div>
            <p className="title">Originals</p>
            <p className="author">by Adam Grant</p>
          </div>
          <p className="reading-point">
            Chapter
            {' '}
            <b>2</b>
            {' '}
            from 9
          </p>
        </div>
      </div>
    </CurrentlyDisplay>
  );
}
