import React, { Component } from "react";
import "./Overlay.css";

export default class Overlay extends Component {

    componentDidMount(){
        var sidebar = document.getElementById('sidebar');
        var content = document.getElementById('content');
        var overlay = document.getElementById('overlay');

        overlay.addEventListener('click', function() { 
            sidebar.classList.toggle('active');
            content.classList.toggle('active');
            overlay.style.display = "none"
         }, false);

    }

    render = () => {
        return (
            <div id="overlay">
                <button type="button" id="toggleSideNav" className="btn btn-close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }
}