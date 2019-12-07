import React from "react";
import DeadWallet from "./deadwallet.svg";
import "./DeadTranscations.css";

const DeadTranscations = () => (
    <div className="empty-transcations">
        <img src={DeadWallet} alt="empty"/>
        <p>There are no Transactions yet</p>
    </div>
)

export default DeadTranscations;