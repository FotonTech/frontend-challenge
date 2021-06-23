import React from 'react';
import { useHistory } from 'react-router-dom';
import BookCover from '../../imgs/book3.png';
import CurrentlyDisplay from './styles/CurrentlyDisplay';
import ChapterIcon from '../../imgs/home/chapter.png';
import fetchBook from '../../services';
import rectangle from '../../imgs/home/effects/Rectangle.png';
import circle from '../../imgs/home/effects/transparent_circle.png';
import oval from '../../imgs/home/effects/Oval.png';

export default function CurrentlySection() {
  const history = useHistory();
  return (
    <CurrentlyDisplay onClick={async () => {
      const result = await fetchBook('eLRhDgAAQBAJ');
      history.push({
        pathname: '/details',
        book: result,
      });
    }}
    >
      <div className="section-header">
        <h3>Currently Reading</h3>
        <h4>All</h4>
      </div>
      <div className="section-info">
        <img src={BookCover} alt="book cover" className="cover" />
        <div className="info">
          <div>
            <p className="title">Originals</p>
            <p className="author">by Adam Grant</p>
          </div>
          <span className="chapter-span">
            <img src={ChapterIcon} alt="chapter icon" />
            <p className="reading-point">
              Chapter
              {' '}
              <b>2</b>
              {' '}
              from 9
            </p>
          </span>
        </div>
      </div>
      <img src={rectangle} alt="effects" style={{ position: 'absolute', top: '500px', left: '305px' }} />
      <img src={circle} alt="effects" style={{ position: 'absolute', top: '425px', left: '210px' }} />
      <img src={oval} alt="effects" style={{ position: 'absolute', top: '375px', left: '275px' }} />
    </CurrentlyDisplay>
  );
}
