import React from 'react';
import SearchInput from './components/SearchInput/index';
import AppDisplay from './styles/AppDisplay';
import DiscoverCarousel from './components/DiscoverCarousel/index';

function App() {
  const user = 'Rafael Pufal';
  return (
    <AppDisplay className="App">
      <SearchInput />
      <div className="welcome-message">
        <p>
          Hi,
          <p className="username">{`. ${user}  .`}</p>
          👋
        </p>
      </div>
      <DiscoverCarousel />
    </AppDisplay>
  );
}

export default App;
