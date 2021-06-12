import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import Home from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
