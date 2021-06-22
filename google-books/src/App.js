import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

export default function App() {
  return (
    <Switch>
      <Route path="/detail" component={Detail} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}
