import React, { Component } from "react";
import {connect} from "react-redux";
import PasswordRules from "./PasswordRules/PasswordRules";
import ValidatePassword from "./PasswordRules/validatePassword";
import { API } from "../../../../lib/api";
import routes from "../../../../lib/api/routes";

class CreatePassword extends Component {

    controller = new AbortController();

    state = {
        password: "",
        ValidationResult: []
    }

    componentWillUnmount = () => this.controller.abort();

    CreatePassword = () => {
        const { password } = this.state;
        const { regProps: { phoneNumber } } = this.props;
        const access_token = window.sessionStorage.getItem("temp_access_token");
        let request =  {
            phoneNumber,
            access_token,
            password,
            confirmPassword: password
        }
        API({
            MethodType: 'POST',
            RequestUri: routes.setPassword,
            Payload: {...request},
            signal: this.controller.signal
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })

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
        const ValidationResult = ValidatePassword(password);
        this.setState({ ValidationResult });
        (ValidationResult.length === 0) && this.CreatePassword();
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

export default connect((state) => ({ regProps: state.register }), null)(CreatePassword);