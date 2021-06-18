import React from 'react';
import Loader from 'react-loader-spinner';
import { Container } from './styles';

import theme from '../../styles/theme';

const Loading: React.FC = () => {
  return (
    <Container>
      <Loader
        type="Puff"
        color={theme.palette.secondary.light}
        height={100}
        width={100}
      />
    </Container>
  );
};

export default Loading;
