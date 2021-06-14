import React from 'react';
import { Container, FirstCard, StyledTypography } from './styles';

const HorizontalScroll: React.FC = () => {
  return (
    <>
      <StyledTypography>Discover new book</StyledTypography>
      <Container horizontal hideScrollbars>
        <FirstCard />
        <FirstCard />
        <FirstCard />
        <FirstCard />
        <FirstCard />
        <FirstCard />
        <FirstCard />
      </Container>
    </>
  );
};

export default HorizontalScroll;
