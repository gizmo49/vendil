import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from "./components/dashboard/landing";
import Home from "./components/home";
import "./assests/css/fonts.css";
import "./index.css";

const NotFound = () => (<h1 className="text-center">404</h1>)

export default class App extends Component {

  render = () => {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Landing} />
            <Route exact path="*" render={() => <NotFound />} />
          </Switch>
        </Router>
      </>
    );
  }

}