import React, { useState } from 'react';

import { SearchBar } from '../components/SearchBar';
import { SearchResults } from '../components/SearchResults';
import { Home } from '../components/Home';
import { BottomBar } from '../components/BottomBar';

import './styles.css'

export const Main = (props) => {
  const [query, setQuery] = useState(props.location.query);

  return (
    <div className="Main">
      <SearchBar query={query} setQuery={setQuery}/>
      {query && (
        <SearchResults query={query}/>
      )}
      {!query && (
        <Home />
      )}
      <BottomBar setQuery={setQuery}/>

    </div>
  )
}