import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import { Container, StyledTypography, Item } from './styles';

import MenuItem from './MenuItem';

const Tabbar: React.FC = () => {
  return (
    <Container>
      <MenuItem exact to="/">
        <HomeOutlinedIcon />
        <StyledTypography>Home</StyledTypography>
      </MenuItem>
      <Item>
        <LibraryBooksOutlinedIcon />
        <StyledTypography>Libraries</StyledTypography>
      </Item>
      <Item>
        <PermIdentityOutlinedIcon />
        <StyledTypography>Profile</StyledTypography>
      </Item>
    </Container>
  );
};

export default Tabbar;
