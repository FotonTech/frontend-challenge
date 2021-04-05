import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { GlobalContainer, ScreenContainer } from "./components/GlobalStyles";
import HomeScreen from "./screens/Home";
import ListScreen from "./screens/List";

export default function Routes() {
  return (
    <GlobalContainer>
      <Header />
      <ScreenContainer>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/list/:topic">
              <ListScreen />
            </Route>
            <Route path="/book/:id">book</Route>
          </Switch>
        </Router>
      </ScreenContainer>
    </GlobalContainer>
  );
}
