import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../../globalStyles';
import { BooksProvider } from '../../providers/booksProvider';
import BookDetail from '../BookDetail';
import Home from '../Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <BooksProvider>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/book/:id" exact component={BookDetail} />
        </Switch>
      </BooksProvider>
    </BrowserRouter>
  );
};

export default App;
