import React, { Component } from "react";
import { NavLink, withRouter } from 'react-router-dom';
import { Icon } from "../../icons";
import routes from "../../routes";
import V from "../../../../assests/img/v.svg";
import "./index.css";
import UserAvatar from "../UserAvatar/UserAvatar";

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
                                {
                                    !(item.hideElement) && (<NavLink to={item.path}
                                        className="icon-link"
                                        activeClassName="active">
                                        <Icon name={item.iconName} />
                                    </NavLink>)
                                }
                            </li>
                        ))
                    }

                </ul>

                <div className="bottomActions">

                    <ul className="list-unstyled">
                        <li>
                            <a href="#!">
                                <Icon name="bell" />
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <Icon name="helper" />
                            </a>
                        </li>
                        <li>
                            <UserAvatar imgSrc="https://i.ibb.co/61bZbVq/Mask-Group.png" />
                        </li>
                    </ul>

                </div>
            </div>
        )

    }

}

export default withRouter(IconBar);