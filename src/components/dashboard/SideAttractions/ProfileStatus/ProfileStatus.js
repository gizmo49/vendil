import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileCycle from "./ProfileCycle/ProfileCycle";
import "./ProfileStatus.css";

export default class ProfileStatus extends Component {

    render = () => {
        return (
            <div className="vend-card">
                <h6 className="card--heading">Profile</h6>
                <div className="profile-details">
                    <ProfileCycle/>
                    <div className="profile-summary">
                        <h6 className="profileName">Joseph Bello</h6>
                        <div className="profile-status">
                            <p>
                                <span className="dot red"></span>
                                <span>Guru</span>
                            </p>
                        </div>
                        <div className="row justify-content-center">
                            <Link to="/account/profile" className="btn btn--tertiary"> Account Completion: 20% </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}