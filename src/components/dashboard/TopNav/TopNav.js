import React, { Component } from "react";
import ToggleImage from "./toggle.svg";
import "./TopNav.css";

const $ = window.jQuery;


class TopNav extends Component {

    componentDidMount() {

        $("#sidebarCollapse").click(() => {
            $("#sidebar").toggleClass("active");
            $("#content").toggleClass("active");
            $("#overlay").css("display", "block");
        })
    }

    render = () => {
        return (
            <nav id="topNav" className="navbar navbar-expand bg-white sticky-top">
                <div className="container-fluid d-flex justify-contents-space-around">
                    <button type="button" id="sidebarCollapse" className="btn scary">
                        <img src={ToggleImage} className="smartToggle" alt="menu" />
                    </button>

                    <button type="button" id="BigsidebarCollapse" className="btn scary">
                        <img src={ToggleImage} className="smartToggle" alt="menu" />
                    </button>

                    <div className="mx-auto">
                        <h6 className="mb-0 pageTitle">Dashboard</h6>
                    </div>

                    <div type="button" className="thumb dropdown-toggle" data-toggle="dropdown">
                        <img src="https://i.ibb.co/61bZbVq/Mask-Group.png" alt="profile" />
                    </div>

                </div>
            </nav>

        )
    }
}

export default TopNav;