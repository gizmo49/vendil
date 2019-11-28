import React, {Component} from "react";
import PasswordRules from "./PasswordRules/PasswordRules";

class CreatePassword extends Component {

    handleSubmit = e => {
        e.preventDefault();

    }

    render = () => {
        return (
            <form onSubmit={this.handleSubmit} className="primary-form">
                <div className="form-group mb-0">
                    <label>Password</label>
                    <input className="form-control primary border-bottom-none" placeholder="Create password" />
                    <PasswordRules />
                </div>
                <button className="btn btn-primary">
                    Create Password
                </button>
            </form>
        )
    }
}

export default CreatePassword;