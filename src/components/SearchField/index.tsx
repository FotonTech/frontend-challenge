import React, { useContext, useEffect, useState } from 'react';
import { Input, InputGroupAddon, InputGroupText } from 'reactstrap';
import { useDebounce } from 'use-debounce';
import { BooksContext } from '../../providers/booksProvider';
import { InputGroup, SearchIcon } from './styled';

const SearchField: React.FC = () => {
  const { actions } = useContext(BooksContext);
  const [search, setSearch] = useState('');
  const [textToSearch] = useDebounce(search, 1000);

  useEffect(() => {
    actions.setSearchIndex(0);
    actions.setSearchText(textToSearch);
  }, [actions.setSearchText, textToSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <SearchIcon size="16px" />
        </InputGroupText>
      </InputGroupAddon>
      <Input
        value={search}
        placeholder="Search book"
        autoComplete="off"
        onChange={handleChange}
      />
    </InputGroup>
  );
};

export default SearchField;
