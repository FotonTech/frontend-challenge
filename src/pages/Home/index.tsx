import React, { useEffect } from 'react';
import { Container } from './styles';

import { useBooks } from '../../hooks/useBooks';

import Title from './Title';
import SearchBar from '../../components/SearchBar';
import Tabbar from '../../components/Tabbar';
import HorizontalScroll from '../../components/HorizontalScroll';
import CurrentlyReading from '../../components/CurrentlyReading/index';
import Reviews from '../../components/Reviews/index';

const Home: React.FC = () => {
  const { getAll } = useBooks();

  useEffect(() => {
    getAll().then((data) => {
      // eslint-disable-next-line
      console.log(data);
    });
  }, [getAll]);

  return (
    <>
      <Container>
        <SearchBar />
        <Title />
        <HorizontalScroll />
        <CurrentlyReading />
        <Reviews />
      </Container>
      <Tabbar />
    </>
  );
};

export default Home;
