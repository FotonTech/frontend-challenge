import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import { Container, StyledTypography } from './styles';

import MenuItem from './MenuItem';

const Tabbar: React.FC = () => {
  return (
    <Container>
      <MenuItem exact to="/">
        <HomeOutlinedIcon />
        <StyledTypography>Home</StyledTypography>
      </MenuItem>
      <MenuItem to="/libraries">
        <LibraryBooksOutlinedIcon />
        <StyledTypography>Libraries</StyledTypography>
      </MenuItem>
      <MenuItem to="/profile">
        <PermIdentityOutlinedIcon />
        <StyledTypography>Profile</StyledTypography>
      </MenuItem>
    </Container>
  );
};

export default Tabbar;
