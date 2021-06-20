import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from './pages/Detail';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/detail' component={Detail}  />
            </Switch>
        </Router>
    )
}

export default Routes;