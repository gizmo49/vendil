import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import ProtectedRoute from './components/routesComps/ProtectedRoute';
import PublicRoute from './components/routesComps/PublicRoute';
import Landing from "./components/dashboard/landing";
import Register from './components/auth/Register/Register';
import Login from './components/auth/Login/Login';
import ForgotPassword from './components/auth/ForgotPassword/ForgotPassword';
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
            <PublicRoute path="/sign-up" component={Register} />
            <PublicRoute path="/sign-in" component={Login} />
            <PublicRoute path="/forgot-password" component={ForgotPassword} />
            <ProtectedRoute component={Landing} />
            <Route exact path="*" render={() => <NotFound />} />
          </Switch>
        </Router>
      </>
    );
  }

}