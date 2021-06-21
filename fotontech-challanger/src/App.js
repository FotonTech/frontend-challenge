import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import BooksDetails from './routes/BooksDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/BooksDetails/:id" component={ BooksDetails } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
