import React, { useEffect } from 'react';
import { Container } from './styles';

import Title from './Title';
import SearchBar from '../../components/SearchBar';
import Tabbar from '../../components/Tabbar';
import HorizontalScroll from '../../components/HorizontalScroll';
import { useBooks } from '../../hooks/useBooks';

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
      </Container>
      <Tabbar />
    </>
  );
};

export default Home;
