import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import routes from "../routes";
import SideNavIconBar from "../SideNavIconBar/SideNavIconBar";
import RoutesWithSubRoutes from "../routes/RoutesWithSubRoutes";
import SideBarSwitch from "../SideBarSwitch/SideBarSwitch";

const hist = createBrowserHistory();

class Landing extends Component {

    componentDidMount = () => document.body.style.background = "#FDFDFE";

    render = () => {

        return (
            <>
                <div className="wrapper" id="wrapper">
                    <Router history={hist}>
                        <>
                            <SideNavIconBar />
                            <div id="content">
                                <SideBarSwitch />
                                <Switch>
                                    {RoutesWithSubRoutes(routes)}
                                    <Route exact path="*" render={() => <Redirect to="/" />} />
                                </Switch>
                            </div>
                        </>
                    </Router>
                </div>
            </>
        )

    }

}


export default Landing;