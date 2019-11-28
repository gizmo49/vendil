import React from "react";
import "./PasswordRules.css";

const PasswordRules = ({ ValidationResult }) => {

    const errorClass = (num) => (ValidationResult && (ValidationResult).includes(num) ? "error" : "");

    return (<div className="password-container">
        <p className="mb-0">
            Password must contain 
            <b className={errorClass(1)}> a lower case letter </b> and 
            <b className={errorClass(2)}> a number </b> , and be minimum of 
            <b className={errorClass(3)}> 8 characters</b>
        </p>
    </div>
)
}

export default PasswordRules;