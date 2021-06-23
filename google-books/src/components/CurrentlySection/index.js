import React from 'react';
import { useHistory } from 'react-router-dom';
import BookCover from '../../imgs/book3.png';
import CurrentlyDisplay from './styles/CurrentlyDisplay';
import ChapterIcon from '../../imgs/home/chapter.png';
import fetchBook from '../../services';

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
    </CurrentlyDisplay>
  );
}
