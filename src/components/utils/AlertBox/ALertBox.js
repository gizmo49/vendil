import React from "react";
import PropTypes from "prop-types";
import { Alert } from "antd";
import "antd/dist/antd.css";

const AlertBox = ({ message, description, type, handleClose }) => {
    return (
        <div className="mb-3">
            <Alert
                message={message}
                description={description}
                type={type}
                afterClose={handleClose}
                closable
                showIcon />
        </div>
    )
}

AlertBox.propTypes = {
    message: PropTypes.string,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default AlertBox;