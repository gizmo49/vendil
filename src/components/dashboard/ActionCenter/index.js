import React, { Component } from "react";
import { Icon } from "../icons";
import "./index.css";

const NotisPack = () => (
    <>
        <div className="notis-header">
            <div className="row align-items-center">
                <div className="col-1">
                    <Icon name="vendIcon--vend bell" />
                </div>
                <div className="col-7">
                    <h5>Recent Notifications</h5>
                </div>
                <div className="col-3 p-0">
                    <button className="btn btn--sec">View All</button>
                </div>
            </div>
        </div>
        <AcNotifications />
        <AcNotifications />
    </> 
)

const AcNotifications = () => (
    <>
        <div className="ac--notification">
            <p>Lorem ipsum dolor sit amet, conse ctetur ment adipiscing elit, sed do eiusmod</p>
            <span className="ac__time">2 Days ago</span>
        </div>
    </>
)



class ActionCenter extends Component {

    render = () => {
        return (
            <div className="action--center">
                <div className="action__header">
                    <h6>Action Center</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur ad</p>
                </div>
                <div className="action__body">
                    <NotisPack />
                </div>
            </div>
        )
    }

}

export default ActionCenter;