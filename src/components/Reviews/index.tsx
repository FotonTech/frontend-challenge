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
      </Container>
    </>
  );
};

export default Reviews;
