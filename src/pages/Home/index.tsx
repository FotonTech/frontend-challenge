import React from 'react';
import { Container } from './styles';

import Tabbar from '../../components/Tabbar';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Home Page</h1>
      </Container>
      <Tabbar />
    </>
  );
};

export default Home;
