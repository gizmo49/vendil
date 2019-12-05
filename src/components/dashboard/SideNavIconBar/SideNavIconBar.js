import React, { Component } from "react";
import { NavTab } from 'react-router-tabs';
import { Switch, Route } from "react-router-dom";
import Brand from "./brand.svg";
import Iconbar from "./iconbar";
import { Icon } from "../icons";
import routes from "../routes";
import "./SideNavIconBar.css";

class SideNavIconBar extends Component {

    render = () => {
        return (
            <nav id="sidebar">
                <div className="row">
                    <div className="col-3 pr-0">
                        <Iconbar />
                    </div>
                    <div className="col-9">
                        <div id="subSideMenu">
                            <div className="brand-img">
                                <img alt="vendly" src={Brand} />
                            </div>
                            <Switch>
                                {SideBarRoutes(routes)}
                            </Switch>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

}

const ConditionalSideBar = ({ routes }) => (
    <ul className="list-unstyled tabs-ul">
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

export default SideNavIconBar;

