import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Details } from './pages/Details';
import { Main } from './pages/Main';
 

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Details} path="/details" />
        <Route component={Main} path="/" />
      </Switch>
    </Router>
  );
}

export default App;
