import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          home
        </Route>
        <Route path="/list/:topic" >
          list
        </Route>
        <Route path="/book/:id" >
          book
        </Route>
      </Switch>
    </Router>
  );
}
