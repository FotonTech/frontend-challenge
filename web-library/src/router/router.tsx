import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/home'
import { routes } from '../constants/routes'
import DetailedBook from '../pages/detailedBook/detailedBook';
import SearchResult from '../pages/searchResult/searchResult';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home}>
          <Home />
        </Route>
        <Route path={routes.detailedBook()}>
          <DetailedBook />
        </Route>
        <Route path={routes.searchBook()}>
          <SearchResult />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
