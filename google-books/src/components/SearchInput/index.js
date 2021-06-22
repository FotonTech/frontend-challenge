import React from 'react';
import PropTypes from 'prop-types';
import SearchInputDisplay from './styles/SearchInputDisplay';
import searchIcon from '../../imgs/home/search_icon.png';

export default function SearchInput({ searchInfo }) {
  // const [search, setSearch] = useState('');
  const { search, setSearch } = searchInfo;
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

SearchInput.propTypes = {
  searchInfo: PropTypes.shape({
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
  }).isRequired,
};
