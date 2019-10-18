import React, { Component } from "react";
import { NavLink, withRouter } from 'react-router-dom';
import V from "../../../assests/img/v.svg";
import {Icon} from "../icons";
import routes from "../routes";
import "./index.css";

class IconBar extends Component {

    render = () => {

        return (
            <div className="menu">
                
                <div className="vend--center">
                    <img src={V} alt="V" />
                </div>

                <ul className="list-unstyled">

                    {
                        (routes).map((item, key) => (
                            <li key={key}>
                                <NavLink to={item.path}
                                    className="icon-link"
                                    activeClassName="active">
                                    <Icon name={item.iconName}/>
                                </NavLink>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        )

    }

}

export default withRouter(IconBar);