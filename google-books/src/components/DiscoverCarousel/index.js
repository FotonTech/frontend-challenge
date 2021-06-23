import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DiscoverCarouselDisplay from './styles/DiscoverCarouselDisplay';
import CarouselCard from './CarouselCard';
import BookCover1 from '../../imgs/BookCover1.png';
import BookCover2 from '../../imgs/book2.png';
import fetchBook from '../../services';
import triangle from '../../imgs/home/effects/triangle.png';
import rectangle from '../../imgs/home/effects/Rectangle.png';
import circle from '../../imgs/home/effects/transparent_circle.png';
import oval from '../../imgs/home/effects/Oval.png';

export default function DiscoverCarousel() {
  const history = useHistory();
  const book1 = {
    title: 'Hooked',
    author: 'Nir Eyal',
    length: 120,
    cover: BookCover1,
    id: 'dsz5AwAAQBAJ',
  };
  const book2 = {
    title: 'The One',
    author: 'Gary Keller',
    length: 90,
    cover: BookCover2,
    id: 'PqbDdQvjd8AC',
  };
  const cardsArray = [book1, book2];
  const [cardIndex, setCardIndex] = useState([0, 1]);

  const onClickMain = async () => {
    const { id } = cardsArray[cardIndex[0]];
    const result = await fetchBook(id);
    history.push({
      pathname: '/details',
      book: result,
      id,
    });
  };

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
        <button onClick={() => onClickMain()} type="button">
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
      <img src={triangle} alt="effects" style={{ position: 'absolute', top: '218px', left: '173px' }} />
      <img src={rectangle} alt="effects" style={{ position: 'absolute', top: '315px', left: '150px' }} />
      <img src={circle} alt="effects" style={{ position: 'absolute', top: '225px', left: '150px' }} />
      <img src={oval} alt="effects" style={{ position: 'absolute', top: '245px', left: '-10px' }} />
      <img src={oval} alt="effects" style={{ position: 'absolute', top: '170px', left: '275px' }} />
    </DiscoverCarouselDisplay>
  );
}
