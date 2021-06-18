import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/libraries" ></Route>
      <Route exact path="/profile" ></Route>
      <Route exact path="/book-detail" component={Detail}></Route>
      <Route path="*" component={() => <h1>Página não encontrada</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;