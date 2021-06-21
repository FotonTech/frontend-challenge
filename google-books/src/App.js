import React from 'react';
import SearchInput from './components/SearchInput/index';
import AppDisplay from './styles/AppDisplay';

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
    </AppDisplay>
  );
}

export default App;
