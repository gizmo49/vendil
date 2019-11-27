import React, { Component } from "react";

class VerificationForm extends Component {

    handleSubmit = e => {
        e.preventDefault();
    }

    render = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Verification Code</label>
                    <input className="form-control" placeholder="Enter Verification Code" />
                </div>
                <button className="btn btn-primary">
                    Verify Your Account
            </button>
            </form>
        )
    }
}

export default VerificationForm;
