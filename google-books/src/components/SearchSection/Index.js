import React from 'react';
// import SearchInput from '../SearchInput/index';
// import Footer from '../Footer/index';
import BookCard from '../BookCard/index';
// import HomeDisplay from '../../styles/HomeDisplay';
import BookCover1 from '../../imgs/BookCover1.png';
import BookCover2 from '../../imgs/book2.png';

export default function SearchSection() {
  const booksInfo = [{
    title: 'Hooked',
    author: 'Nir Eyal',
    cover: BookCover1,
  }, {
    title: 'The One',
    author: 'Gary Keller',
    cover: BookCover2,
  },
  {
    title: 'Hooked',
    author: 'Nir Eyal',
    cover: BookCover1,
  }, {
    title: 'The One',
    author: 'Gary Keller',
    cover: BookCover2,
  },
  ];
  return (
    <div className="search-results">
      {booksInfo.map((info) => <BookCard info={info} key={`${info.title}-`} />)}
    </div>
    /* <button type="button" className="load-more">Load More</button> */
  );
}
