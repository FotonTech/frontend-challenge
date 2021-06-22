import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Detail from './pages/Detail';
import Main from './pages/Main';

export default function App() {
  return (
    <Switch>
      <Route path="/detail" component={Detail} />
      <Route exact path="/" component={Main} />
    </Switch>
  );
}
