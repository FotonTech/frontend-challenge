import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../../globalStyles';
import { BooksProvider } from '../../providers/booksProvider';
import Home from '../Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <BooksProvider>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BooksProvider>
    </BrowserRouter>
  );
};

export default App;
