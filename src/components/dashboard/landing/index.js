import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import SideNavIconBar from "../SideNavIconBar/SideNavIconBar";
import RoutesWithSubRoutes from "../routes/RoutesWithSubRoutes";
import TopNav from "../TopNav/TopNav";
import SideBarSwitch from "../SideBarSwitch/SideBarSwitch";
import SideAttractions from "../SideAttractions/SideAttractions";
import Overlay from "../Overlay/Overlay";
import routes from "../routes";


const hist = createBrowserHistory();

class Landing extends Component {

    state = {
        isDesktop: window.innerHeight > 768,
    }

    componentDidMount = () => document.body.style.background = "#FDFDFE";

    render = () => {
        const {isDesktop} = this.state;
        
        return (
            <>
                <div className="wrapper" id="wrapper">
                    <Router history={hist}>
                        <SideNavIconBar />
                        <div id="content">
                            { !(isDesktop) && <TopNav /> }
                            <SideBarSwitch />
                            <div className="custom-container">
                                <div className="row">
                                    <div className="col-xl-8">
                                        <Switch>
                                            {RoutesWithSubRoutes(routes)}
                                            <Route exact path="*" render={() => <Redirect to="/" />} />
                                        </Switch>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="container">
                                            <SideAttractions />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Overlay />
                    </Router>
                </div>
            </>
        )

    }

}


export default Landing;