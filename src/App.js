import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import Search from './pages/Search';
import Detail from './pages/Detail';
import BottomBar from "./BottomBar";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Detail} path="/detail" />
        <Route component={Search} path="/search" />
        <Route component={Home} path="/" />
      </Switch>
    </Router>
  );
}

export default App;
