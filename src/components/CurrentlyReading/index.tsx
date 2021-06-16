import React from 'react';
import { Container, StyledTypography, StyledLinkButton } from './styles';
import Card from './Card';

const CurrentlyReading: React.FC = () => {
  return (
    <>
      <StyledTypography>
        <span>Currently Reading</span>
        <StyledLinkButton>All</StyledLinkButton>
      </StyledTypography>
      <Container>
        <Card />
      </Container>
    </>
  );
};

export default CurrentlyReading;
