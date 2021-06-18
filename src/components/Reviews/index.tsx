import React from 'react';
import {
  Container,
  StyledImage,
  StyledTypography,
  StyledLinkButton,
} from './styles';

const Reviews: React.FC = () => {
  return (
    <>
      <StyledTypography>
        <span>Reviews of The Days</span>
        <StyledLinkButton>All Video</StyledLinkButton>
      </StyledTypography>
      <Container>
        <StyledImage src="https://i.imgur.com/VdTrKoe.png" />
        <StyledImage src="https://i.imgur.com/Y9pU3Q7.png" />
        <StyledImage src="https://i.imgur.com/Yi0OueN.png" />
        <StyledImage src="https://i.imgur.com/R5GYz1H.png" />
        <StyledImage src="https://i.imgur.com/Z7eo4XC.png" />
      </Container>
    </>
  );
};

export default Reviews;
