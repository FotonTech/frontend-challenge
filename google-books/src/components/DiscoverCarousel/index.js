import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DiscoverCarouselDisplay from './styles/DiscoverCarouselDisplay';
import CarouselCard from './CarouselCard';
import BookCover1 from '../../imgs/BookCover1.png';
import BookCover2 from '../../imgs/book2.png';

export default function DiscoverCarousel() {
  const history = useHistory();
  const book1 = {
    title: 'Hooked',
    author: 'Nir Eyal',
    length: 120,
    cover: BookCover1,
  };

  const book2 = {
    title: 'The One',
    author: 'Gary Keller',
    length: 90,
    cover: BookCover2,
  };

  const book3 = {
    title: 'The Two',
    author: 'Gary Keller',
    length: 90,
    cover: BookCover2,
  };
  const cardsArray = [book1, book2, book3];
  const [cardIndex, setCardIndex] = useState([0, 1]);

  const handleClick = () => {
    if (cardIndex[1] === cardsArray.length - 1) {
      setCardIndex([cardsArray.length - 1, 0]);
    } else if (cardIndex[1] === 0) {
      setCardIndex([0, 1]);
    } else {
      setCardIndex([cardIndex[0] + 1, cardIndex[1] + 1]);
    }
  };
  return (
    <DiscoverCarouselDisplay>
      <div className="carousel-header">
        <h3>Discover new books</h3>
        <h4>More</h4>
      </div>
      <div className="card-div">
        <button onClick={() => history.push({ pathname: '/detail' })} type="button">
          <CarouselCard
            info={cardsArray[cardIndex[0]]}
            classCard="main"
          />
        </button>
        <button onClick={handleClick} type="button">
          <CarouselCard
            info={cardsArray[cardIndex[1]]}
            classCard="background"
          />
        </button>
      </div>
    </DiscoverCarouselDisplay>
  );
}
