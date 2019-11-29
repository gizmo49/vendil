import React, { Component } from "react";
import { connect } from "react-redux";
import PasswordRules from "./PasswordRules/PasswordRules";
import ValidatePassword from "./PasswordRules/validatePassword";
import { API } from "../../../../lib/api";
import routes from "../../../../lib/api/routes";
import Spinner from "../../../base/Spinner/Spinner";
import AlertBox from "../../../utils/AlertBox/ALertBox";

class CreatePassword extends Component {

    controller = new AbortController();

    state = {
        showAlert: false,
        loading: false,
        password: "",
        ValidationResult: []
    }

    componentWillUnmount = () => this.controller.abort();

    CreatePassword = () => {
        const { password } = this.state;
        const { regProps: { phoneNumber } } = this.props;
        const access_token = window.sessionStorage.getItem("temp_access_token");
        let request = {
            phoneNumber,
            access_token,
            password,
        }
        API({
            MethodType: 'POST',
            RequestUri: routes.setPassword,
            Payload: { ...request },
            signal: this.controller.signal
        }).then((res) => {
            if(res.status === true){
                console.log(res);
                console.log(`success`);
            }else {
                this.setState({
                    showAlert: true,
                    loading: false,
                    alertdata: {
                        type:"error",
                        message: "Error!",
                        description: res.message
                    }
                });
            }
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

        const { password, ValidationResult, showAlert, alertdata, loading } = this.state;
        const { message, description, type } = alertdata;

        return (
            <>
                {(showAlert) && <AlertBox
                    message={message}
                    description={description}
                    type={type}
                    handleClose={() => this.setState({ showAlert: false })}
                />}
                <form onSubmit={this.handleSubmit} className="primary-form">
                    <div className="form-group mb-0">
                        <label>Password</label>
                        <input
                            name="password"
                            value={password}
                            onChange={this.handlePassword}
                            type="password"
                            maxLength="50"
                            className={"form-control primary border-bottom-none " + (((ValidationResult).length > 1) && "has-error")}
                            placeholder="Create password" />
                        <PasswordRules ValidationResult={ValidationResult} />
                    </div>

                    <button
                        className="btn btn-primary"
                        disabled={loading}>
                        {(loading) ? <Spinner /> : "Create Password"}
                    </button>
                </form>
            </>
        )
    }
}

export default connect((state) => ({ regProps: state.register }), null)(CreatePassword);