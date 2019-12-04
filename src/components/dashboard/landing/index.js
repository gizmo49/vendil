import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { NavTab } from 'react-router-tabs';
import IconBar from "../iconbar";
import routes from "../routes";
import { Icon } from "../icons";

// const NotFound = () => (<h6 className="text-center">404</h6>);

const hist = createBrowserHistory();

class Landing extends Component {

    componentDidMount = () => document.body.style.background = "#FDFDFE";

    render = () => {

        return (
            <>
                <Router history={hist}>
                    <>
                        <IconBar />
                        <Switch>
                            {SideBarRoutes(routes)}
                        </Switch>
                        <div id="content">
                            <Switch>
                                {RoutesWithSubRoutes(routes)}
                                {/* <Route exact path="*" render={() => <NotFound />} /> */}
                                <Route exact path="*" render={() => <Redirect to="/" />} />
                            </Switch>
                        </div>
                    </>
                </Router>
            </>
        )

    }

}

const ConditionalSideBar = ({ routes }) => (
    <ul className="list-unstyled tabs-ul ">
        {routes.filter(route => route.tab).map(({ path, tab, tabIcon }, i) => (
            <li key={`tab_${i}`} >
                <NavTab to={path}>
                    <Icon name={tabIcon} />
                    <span>{tab}</span>
                </NavTab>
            </li>
        ))}
    </ul>
)

const SideBarRoutes = routes =>
    routes.map((route, i) => (
        <Route
            key={i}
            exact={route.exact || false}
            path={route.path}
            render={props => <ConditionalSideBar {...props} routes={route.routes} />}
        />
    ));

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