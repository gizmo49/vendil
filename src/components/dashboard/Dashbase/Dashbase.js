import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import RoutesWithSubRoutes from "../routes/RoutesWithSubRoutes";
import routes from "../routes";
import Iconbar from "../iconbar";
import SideNavIcon from "../SideNavIcon/SideNavIcon";


const NotFound = () => (<h6 className="text-center">404</h6>);

const hist = createBrowserHistory();

export default class Dashbase extends Component {

    componentDidMount = () => {
        document.body.style.background = "#FDFDFE";
        console.log(routes);
    }

    render = () => {

        return (
            <>
                {/* <SideNavIcon/> */}
                <Router history={hist}>
                    <Switch>
                        {RoutesWithSubRoutes(routes)}
                        <Route exact path="*" render={() => <NotFound />} />
                    </Switch>
                </Router>
            </>
        )

    }

}