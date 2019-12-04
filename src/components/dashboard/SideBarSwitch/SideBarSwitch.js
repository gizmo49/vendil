import React, { Component } from "react";
import ArrowLeft from "./arrow-left.svg";
import "./SideBarSwitch.css";
const $ = window.jQuery;

export default class SideBarSwitch extends Component {

    componentDidMount() {
        $("#BigsidebarCollapse").click(() => {
            $("#BigsidebarCollapse").toggleClass('active')
            $("#sidebar").toggleClass("active");
            $("#content").toggleClass("active");
        })
    }

    render = () => {
        return (
            <button type="button"
                id="BigsidebarCollapse"
                className="btn switchBar">
                <img src={ArrowLeft} alt="Toggle"/>
            </button>
        )
    }
}