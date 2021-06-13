import React from 'react';
import { Container, StyledSearchIcon, StyledInput } from './styles';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <StyledSearchIcon />
      <StyledInput placeholder="Search Book" />
    </Container>
  );
};

export default SearchBar;
