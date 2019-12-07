import React, { Component } from "react";
import WhiteVendly from "./whitevendly.svg";
import "./AccBalanceWidget.css";

class AccBalanceWidget extends Component {

    render = () => {
        return (
            <div className="vend-card">
                <h6 className="card--heading">Account Balance</h6>
                <div className="the_balance">
                    <h2><sup>₦</sup><span>129,125</span><sub>.97</sub></h2>
                    <div>
                        <img src={WhiteVendly} alt="vendly"/>
                    </div>
                </div>
            </div>
        )
    }

}

export default AccBalanceWidget;
