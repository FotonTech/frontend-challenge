import React from 'react';
import { Input, InputGroupAddon, InputGroupText } from 'reactstrap';
import { InputGroup, SearchIcon } from './styled';

const SearchField: React.FC = () => {
  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <SearchIcon size="16px" />
        </InputGroupText>
      </InputGroupAddon>
      <Input placeholder="Search book" />
    </InputGroup>
  );
};

export default SearchField;
