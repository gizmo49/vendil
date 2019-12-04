import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { NavTab } from 'react-router-tabs';
import { Icon } from '../../icons';
import routes from '../../routes';

class SideNav extends Component {

    componentDidMount = () => {
        console.log(routes);
    }

    render = () => {
        return (
            <>
                <nav id="sidebar">
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
                </nav>
            </>
        )
    }
}

export default withRouter(SideNav);