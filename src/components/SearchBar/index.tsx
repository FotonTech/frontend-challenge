import React, { useState } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { Container, StyledSearchIcon, StyledInput } from './styles';

interface Props {
  onChange: (name: string) => void;
  clearSearch: () => void;
}

const SearchBar: React.FC<Props> = ({ onChange, clearSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const handleValue = (value: string) => {
    setInputValue(value);

    onChange(inputValue);
  };

  const handleClear = () => {
    setInputValue('');
    clearSearch();
  };

  return (
    <Container>
      <StyledSearchIcon />
      <StyledInput
        placeholder="Search Book"
        value={inputValue}
        onChange={(e) => handleValue(e.target.value)}
      />
      <ClearIcon style={{ color: '#E9E6E6' }} onClick={() => handleClear()} />
    </Container>
  );
};

export default SearchBar;
