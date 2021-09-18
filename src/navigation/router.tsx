import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom';
import NotFound from '../components/pages/404';
import Bio from '../components/pages/bio';
import Contact from '../components/pages/contact';
import Header from '../components/header';
import Home from '../components/pages/home';
import BenyHeader from './header';


export interface routeTypes {
  path: string;
  component: React.FC<RouteComponentProps>;
  isExact: boolean;
}


export default function Navigation() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <BenyHeader />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/bio">
            <Bio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
