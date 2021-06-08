import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/home'
import { routes } from '../constants/routes'

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
