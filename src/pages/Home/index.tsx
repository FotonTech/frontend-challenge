import React from 'react';
import { Container } from './styles';

import Title from './Title';
import SearchBar from '../../components/SearchBar';
import Tabbar from '../../components/Tabbar';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <SearchBar />
        <Title />
      </Container>
      <Tabbar />
    </>
  );
};

export default Home;
