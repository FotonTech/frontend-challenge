import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/home'
import { routes } from '../constants/routes'
import DetailedBook from '../pages/detailedBook/detailedBook';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home}>
          <Home />
        </Route>
        <Route exact path={routes.detailedBook()}>
          <DetailedBook />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
