import React from "react";
import { Link } from "react-router-dom";
import "./UserAvatar.css";

const UserAvatar = ({ imgSrc }) => (
    <div className="avatar-container">
        <Link to={'/account'}>
            <img src={imgSrc} alt="avatar" />
        </Link>
    </div>
)

export default UserAvatar;