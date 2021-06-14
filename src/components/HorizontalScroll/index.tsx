import React from 'react';
import {
  Container,
  FirstCard,
  StyledTypography,
  StyledLinkButton,
} from './styles';

const HorizontalScroll: React.FC = () => {
  return (
    <>
      <StyledTypography>
        <span>Discover new book</span>
        <StyledLinkButton>More</StyledLinkButton>
      </StyledTypography>
      <Container>
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
