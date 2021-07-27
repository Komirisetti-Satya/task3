import React from "react";
import {Router, Route} from 'react-router-dom';
import {Redirect, Switch} from "react-router";
import { createBrowserHistory } from "history";

import LoginComponent from "./components/LoginComponent";
import HomeComponent from "./components/HomeComponent";
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/"} component={LoginComponent} />
        <Route exact path={"/home"} component={HomeComponent} />
        <Redirect exact from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
