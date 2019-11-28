import React, { Component } from "react";
import PasswordRules from "./PasswordRules/PasswordRules";
import ValidatePassword from "./PasswordRules/validatePassword";

class CreatePassword extends Component {

    state = {
        password: "",
        ValidationResult: []
    }

    handlePassword = e => {
        const { value } = e.target;
        this.setState({ 
            "password": value,
            "ValidationResult": []
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { password } = this.state;
        const ValidationResult  = ValidatePassword(password);
        this.setState({ ValidationResult })
    }

    render = () => {
        const { password, ValidationResult} = this.state;

        return (
            <form onSubmit={this.handleSubmit} className="primary-form">
                <div className="form-group mb-0">
                    <label>Password</label>
                    <input
                        name="password"
                        value={password}
                        onChange={this.handlePassword}
                        type="password"
                        maxLength="50"
                        className={"form-control primary border-bottom-none " + ( ((ValidationResult).length > 1) && "has-error" )}
                        placeholder="Create password" />
                    <PasswordRules ValidationResult={ValidationResult}/>
                </div>
                <button className="btn btn-primary">
                    Create Password
                </button>
            </form>
        )
    }
}

export default CreatePassword;