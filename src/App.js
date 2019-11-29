import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import ProtectedRoute from './components/routesComps/ProtectedRoute';
import Landing from "./components/dashboard/landing";
import Register from './components/auth/Register/Register';
import Login from './components/auth/Login/Login';
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
            <Route path="/sign-up" component={Register} />
            <Route path="/sign-in" component={Login} />
            <ProtectedRoute component={Landing} />
            <Route exact path="*" render={() => <NotFound />} />
          </Switch>
        </Router>
      </>
    );
  }

}