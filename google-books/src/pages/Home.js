import React from 'react';
import SearchInput from '../components/SearchInput/index';
import HomeDisplay from '../styles/HomeDisplay';
import DiscoverCarousel from '../components/DiscoverCarousel/index';
import CurrentlySection from '../components/CurrentlySection';
import ReviewSection from '../components/ReviewSection/index';
import Footer from '../components/Footer/index';

export default function Home() {
  const user = 'Rafael Pufal';
  return (
    <HomeDisplay className="App">
      <SearchInput />
      <div className="welcome-message">
        <p>
          Hi,
          <p className="username">{`. ${user}  .`}</p>
          👋
        </p>
      </div>
      <DiscoverCarousel />
      <CurrentlySection />
      <ReviewSection />
      <Footer />
    </HomeDisplay>
  );
}
