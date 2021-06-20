import React from 'react';
import SearchIcon from '../images/icons/SearchIcon.png';
import './SearchBar.css';

export const SearchBar = (props) => {
  const { query, setQuery } = props;
  const handleChange = (e) => {
    if (e.key === 'Enter') {
    setQuery(e.target.value);
    }
  }

  return (
    <div className="SearchBarWrapper">
      <input type="text" placeholder="Search book" className="SearchBar" onKeyPress={handleChange} defaultValue={query}/>
      <div className="IconDiv">
        <img src={SearchIcon} className="Icon" alt="Ícone de lupa"/>
      </div>

    </div>
  )
}
