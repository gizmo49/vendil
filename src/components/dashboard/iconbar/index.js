import React, { Component } from "react";
import { NavLink, withRouter } from 'react-router-dom';
import "./index.css";

class IconBar extends Component {

    render = () => {

        return (
            <div className="menu">
                <ul className="list-unstyled">

                    <li>
                        <NavLink to="/dashboard/"
                            className="icon-link"
                            activeClassName="active">
                            <span className="icon"></span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/vend" 
                            className="icon-link"
                            activeClassName="active">
                            <span className="icon"></span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard" 
                            className="icon-link"
                            activeClassName="active">
                            <span className="icon"></span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )

    }

}

export default withRouter(IconBar);