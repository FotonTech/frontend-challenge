import React, { useState } from 'react';
import SearchInput from '../components/SearchInput/index';
import HomeDisplay from '../styles/HomeDisplay';
import Footer from '../components/Footer/index';
import SearchSection from '../components/SearchSection/Index';
import HomeSection from '../components/HomeSection';

export default function Main() {
  const [search, setSearch] = useState('');

  return (
    <HomeDisplay className="App">
      <SearchInput searchInfo={{ search, setSearch }} />
      { search !== ''
        ? <SearchSection />
        : <HomeSection />}
      <Footer />
    </HomeDisplay>
  );
}
