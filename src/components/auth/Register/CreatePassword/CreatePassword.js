import React, {Component} from "react";

class CreatePassword extends Component {

    handleSubmit = e => {
        e.preventDefault();
    }

    render = () => {
        return (
            <form onSubmit={this.handleSubmit} className="primary-form">>
                <div className="form-group">
                    <label>Password</label>
                    <input className="form-control primary" placeholder="Create password" />
                </div>
                <button className="btn btn-primary">
                    Create Password
                </button>
            </form>
        )
    }
}

export default CreatePassword;