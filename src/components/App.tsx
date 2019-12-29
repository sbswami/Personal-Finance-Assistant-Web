import * as React from "react";
import { hot } from "react-hot-loader";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import "./../assets/scss/App.scss";
import { Register } from "./authentication/Register";
import { NotFound } from './NotFound';
import { LogIn } from "./authentication/LogIn";
import { Dashboard } from "./dashboard/Dashboard";

class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className='root'>
        <Router>
          <Switch>
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/home" component={Dashboard} />
            <Route exact path="/" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        {/* <Register /> */}
      </div>
    );
  }
}

declare let module: object;

export default hot(module)(App);
