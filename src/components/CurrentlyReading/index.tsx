import React from 'react';
import { Container, Card, StyledTypography, StyledLinkButton } from './styles';

const CurrentlyReading: React.FC = () => {
  return (
    <>
      <StyledTypography>
        <span>Discover new book</span>
        <StyledLinkButton>All</StyledLinkButton>
      </StyledTypography>
      <Container>
        <Card />
      </Container>
    </>
  );
};

export default CurrentlyReading;
