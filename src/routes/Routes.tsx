import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Home from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
