import React, { Component } from "react";
import ActionCenter from "./ActionCenter";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import AccBalanceWidget from "./AccBalanceWidget/AccBalanceWidget";

export default class SideAttractions extends Component {
    render = () => {
        return (
            <div className="mt-5">
                <ProfileStatus />
                <AccBalanceWidget />
                <ActionCenter />
            </div>
        )
    }
}