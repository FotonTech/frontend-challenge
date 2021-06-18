import React from 'react';
import { Container, StyledSearchIcon, StyledInput } from './styles';

interface Props {
  onChange: (name: string) => void;
}

const SearchBar: React.FC<Props> = ({ onChange }) => {
  return (
    <Container>
      <StyledSearchIcon />
      <StyledInput
        placeholder="Search Book"
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
};

export default SearchBar;
