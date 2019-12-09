import React, { Component } from "react";
import CheckMark from "./checkmark.svg";
import "./BreadCrumb.css";

class BreadCrumb extends Component {

    render = () => {

        return (
            <ul className="breadcrumb-container">
                <li>
                    <div className="steps active">
                        <span className="step-text">Personal Information</span>
                        <span className="step-number">
                            <img src={CheckMark} alt="do" />
                        </span>
                    </div>
                </li>
                <li>
                    <div className="steps">
                        <span className="step-text">Account Verification</span>
                        <span className="step-number">
                            <span className="solidDot"></span>
                        </span>
                    </div>
                </li>
            </ul>
        )
    }
}

export default BreadCrumb;