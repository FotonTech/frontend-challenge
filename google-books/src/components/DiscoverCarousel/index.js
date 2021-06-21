import React from 'react';
import DiscoverCarouselDisplay from './styles/DiscoverCarouselDisplay';
import CarouselCard from './CarouselCard';
import BookCover from './styles/book-cover.png';
import ThingCover from './styles/thing-cover.png';

export default function DiscoverCarousel() {
  const booksInfo = [{
    title: 'Hooked',
    author: 'Nir Eyal',
    length: 120,
    cover: BookCover,
    theme: 'blue',
  }, {
    title: 'The One Thing',
    author: 'Gary Keller',
    length: 90,
    cover: ThingCover,
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
