import React from 'react';
import { Container, ItemContainer, StyledTypography } from './styles';
import { ReactComponent as HomeIcon } from '../../assets/images/home-icon.svg';
import { ReactComponent as BookIcon } from '../../assets/images/book-icon.svg';
import { ReactComponent as UserIcon } from '../../assets/images/user-icon.svg';

const Tabbar: React.FC = () => {
  return (
    <Container>
      <ItemContainer>
        <HomeIcon />
        <StyledTypography>Home</StyledTypography>
      </ItemContainer>
      <ItemContainer>
        <BookIcon />
        <StyledTypography>Libraries</StyledTypography>
      </ItemContainer>
      <ItemContainer>
        <UserIcon />
        <StyledTypography>Profile</StyledTypography>
      </ItemContainer>
    </Container>
  );
};

export default Tabbar;
