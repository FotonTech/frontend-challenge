import React, { useState } from 'react';
import SearchInputDisplay from './styles/SearchInputDisplay';
import searchIcon from './styles/magnifying-glass.png';

export default function SearchInput() {
  const [search, setSearch] = useState('');
  return (
    <SearchInputDisplay htmlFor="search-input">
      <img src={searchIcon} alt="search-icon" />
      <input
        id="search-input"
        placeholder="Search book"
        type="text"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        autoComplete="off"
      />
    </SearchInputDisplay>
  );
}
