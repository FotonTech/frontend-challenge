import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Details from './pages/Details';
import Main from './pages/Main';

export default function App() {
  return (
    <Switch>
      <Route path="/details" component={Details} />
      <Route exact path="/" component={Main} />
    </Switch>
  );
}
