import React, { useEffect, useState } from 'react';
import { Input, InputGroupAddon, InputGroupText } from 'reactstrap';
import { useDebounce } from 'use-debounce';
import { InputGroup, SearchIcon } from './styled';

type SearchFieldProps = React.FC<{
  onSearch: (text: string) => void;
}>;

const SearchField: SearchFieldProps = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [textToSearch] = useDebounce(search, 1000);

  useEffect(() => {
    onSearch(textToSearch);
  }, [onSearch, textToSearch]);

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
