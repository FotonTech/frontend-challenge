import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Libraries from '../pages/Libraries';
import Profile from '../pages/Profile';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/libraries/:id" component={Libraries} />
      <Route path="/profile" component={Profile} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
