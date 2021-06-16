import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import { useBooks } from '../../hooks/useBooks';

import Title from './Title';
import SearchBar from '../../components/SearchBar';
import Tabbar from '../../components/Tabbar';
import HorizontalScroll from '../../components/HorizontalScroll';
import CurrentlyReading from '../../components/CurrentlyReading/index';
import Reviews from '../../components/Reviews/index';

const Home: React.FC = () => {
  // eslint-disable-next-line
  const [books, setBooks] = useState<any>();
  const [loading, setLoading] = useState(true);
  const { getAll } = useBooks();

  useEffect(() => {
    getAll()
      .then((item) => {
        setBooks(item);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return null;
  }

  return (
    <>
      <Container>
        <SearchBar />
        <Title />
        <HorizontalScroll books={books.data.items} />
        <CurrentlyReading />
        <Reviews />
      </Container>
      <Tabbar />
    </>
  );
};

export default Home;
