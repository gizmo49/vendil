import React, { Component } from "react"
import "./index.css";

export default class SweetCard extends Component {

    render = () => {
        return (
            <div className="sweet--card">
                {this.props.children}
            </div>
        )
    }
    
}
