import React from 'react';
import DiscoverCarouselDisplay from './styles/DiscoverCarouselDisplay';
import CarouselCard from './CarouselCard';
import BookCover1 from '../../imgs/BookCover1.png';
import BookCover2 from '../../imgs/book2.png';

export default function DiscoverCarousel() {
  const booksInfo = [{
    title: 'Hooked',
    author: 'Nir Eyal',
    length: 120,
    cover: BookCover1,
    theme: 'blue',
  }, {
    title: 'The One',
    author: 'Gary Keller',
    length: 90,
    cover: BookCover2,
    theme: 'purple',
  }];
  return (
    <DiscoverCarouselDisplay>
      <div className="carousel-header">
        <h3>Discover new books</h3>
        <h4>More</h4>
      </div>
      {booksInfo.map((info) => (
        <CarouselCard info={info} key={`${info.title}-}`} />
      ))}
    </DiscoverCarouselDisplay>
  );
}
