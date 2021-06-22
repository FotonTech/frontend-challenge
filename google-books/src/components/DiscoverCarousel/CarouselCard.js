import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CarouselCardDisplay from './styles/CarouselCardDisplay';
import Stats from '../../imgs/home/graphic_icon.png';

export default function CarouselCard({ info }) {
  return (
    <CarouselCardDisplay>
      <Link to="/detail" className="details-link">
        <div className={`book-card ${info.theme}`}>
          <div className="card-info">
            <div>
              <p className="book-title">{info.title}</p>
              <p className="book-author">{info.author}</p>
            </div>
            <span>
              <img src={Stats} alt="statistics icon" className="stats" />
              <p className="book-length">
                <b>{`${info.length}+`}</b>
                {' '}
                Read Now
              </p>
            </span>
          </div>
          <img src={info.cover} alt="book cover" className="book-cover" />
        </div>
      </Link>
    </CarouselCardDisplay>
  );
}

CarouselCard.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
  }).isRequired,
};
