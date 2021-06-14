import React, { useState } from 'react';
import { Books } from '../models/books';

export interface GlobalStateType {
  searchResult?: Books
  setSearchResult: (searchResult: Books) => void
}

const intialGlobalState: GlobalStateType = {
  searchResult: undefined,
  setSearchResult: (books) => {}
}

export const GlobalStateContext = React.createContext(intialGlobalState)

const GlobalState: React.FC = ({ children }) => {
  const [searchResult, setSearchResult] = useState<Books>()

  const globalState = {
    searchResult,
    setSearchResult,
  }

  return (
    <GlobalStateContext.Provider value={globalState}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
