import React from 'react';
import PropTypes from 'prop-types';
import CarouselCardDisplay from './styles/CarouselCardDisplay';
import Stats from '../../imgs/home/graphic_icon.png';
import triangle from '../../imgs/home/effects/triangle.png';
import rectangle from '../../imgs/home/effects/Rectangle.png';
import circle from '../../imgs/home/effects/transparent_circle.png';
import oval from '../../imgs/home/effects/Oval.png';

export default function CarouselCard({ info, classCard }) {
  // const redirectTo = info.theme === 'foreground' ? '/detail' : '/';
  return (
    <CarouselCardDisplay>
      <div className={`book-card ${classCard}`}>
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
      <img src={triangle} alt="effects" style={{ position: 'absolute', top: '218px', left: '173px' }} />
      <img src={rectangle} alt="effects" style={{ position: 'absolute', top: '315px', left: '150px' }} />
      <img src={circle} alt="effects" style={{ position: 'absolute', top: '225px', left: '150px' }} />
      <img
        src={oval}
        className="behind"
        alt="effects"
        style={{ position: 'absolute', top: '245px', left: '-10px' }}
      />
      <img src={oval} alt="effects" style={{ position: 'absolute', top: '170px', left: '275px' }} />
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
    setTheme: PropTypes.func.isRequired,
    book: PropTypes.string.isRequired,
  }).isRequired,
  classCard: PropTypes.string.isRequired,
};
