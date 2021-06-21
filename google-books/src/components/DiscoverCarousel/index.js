import React from 'react';
import DiscoverCarouselDisplay from './styles/DiscoverCarouselDisplay';
import BookCover from './styles/book-cover.png';
import Stats from './styles/statistics.png';

export default function DiscoverCarousel() {
  return (
    <DiscoverCarouselDisplay>
      <div className="carousel-header">
        <h3>Discover new books</h3>
        <h4>More</h4>
      </div>
      <div className="book-card">
        <div className="card-info">
          <div>
            <p className="book-title">Hooked</p>
            <p className="book-author">Nir Eyal</p>
          </div>
          <span>
            <img src={Stats} alt="statistics icon" className="stats" />
            <p className="book-length">
              <b>120+</b>
              {' '}
              Read Now
            </p>
          </span>
        </div>
        <img src={BookCover} alt="book cover" className="book-cover" />
      </div>
    </DiscoverCarouselDisplay>
  );
}
