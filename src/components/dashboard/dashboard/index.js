import React, { Component } from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";

// with default styles:
// import "styles/react-router-tabs.css";

const Home = () => (<div className="text-center">Dashboard nested home</div>);
const Transcations = () => (<div className="text-center">Dashboard nested Transcations!!!</div>)

class DashboardHome extends Component {

    render = () => {
        const { path } = this.props.match;

        return (
            <>
                    <div className="row">
                        <div className="col-3">
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <NavLink to={`${path}/home`}
                                    activeClassName="active" exact>
                                    <span className="side-text">
                                        Dashboard
                            </span>
                                </NavLink>
                                <Link to={`${path}/transcations`}
                                    activeClassName="active" exact>
                                    <span className="side-text">
                                        Transcations
                            </span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="tab-content" id="v-pills-tabContent">
                                <Switch>
                                    <Route
                                        exact
                                        path={`${path}`}
                                        component={Home} />} />
                                    <Route path={`${path}/home`} component={Home} />
                                    <Route path={`${path}/transcations`} component={Transcations} />
                                </Switch>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
}

export default DashboardHome;