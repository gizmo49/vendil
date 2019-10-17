import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Landing from "./components/dashboard/landing";
import Home from "./components/home";
import "./assests/css/fonts.css";
import "./index.css";

const NotFound = () => (<h1 className="text-center">404 2</h1>);
const hist = createBrowserHistory();

export default class App extends Component {

  render = () => {
    return (
      <>
        <Router history={hist}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Landing} />
            <Route exact path="*" render={() => <NotFound />} />
          </Switch>
        </Router>
      </>
    );
  }

}