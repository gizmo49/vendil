import React, { Component } from "react";
const $ = window.jQuery;

export default class SideBarSwitch extends Component {

    componentDidMount() {
        $("#BigsidebarCollapse").click(() => {
            $("#sidebar").toggleClass("active");
            $("#content").toggleClass("active");
        })
    }

    render = () => {
        return (
            <>

                <button type="button" id="BigsidebarCollapse" className="btn btn-primary">
                    Toggle Menu
                </button>

            </>
        )
    }
}