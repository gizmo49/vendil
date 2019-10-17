import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import IconBar from "../iconbar";
import routes from "../routes";

const NotFound = () => (<h6 className="text-center">404</h6>);

const hist = createBrowserHistory();

class Landing extends Component {

    componentDidMount = () =>  document.body.style.background = "rgb(194, 234, 228)";

    render = () => {

        return (
            <>
                <Router history={hist}>
                    <div className="container p-0">
                        <IconBar />
                        <div id="content">
                            <div className="container">
                                <Switch>
                                    {RoutesWithSubRoutes(routes)}
                                    <Route exact path="*" render={() => <NotFound />} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </Router>
            </>
        )

    }

}

const RoutesWithSubRoutes = routes =>
    routes.map((route, i) => (
        <Route
            key={i}
            exact={route.exact || false}
            path={route.path}
            render={props => <route.component {...props} routes={route.routes} />}
        />
    ));


export default Landing;