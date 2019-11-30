import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import IntlTelInput from 'react-intl-tel-input';
import Spinner from "../../../base/Spinner/Spinner";
import AlertBox from "../../../utils/AlertBox/ALertBox";
import 'react-intl-tel-input/dist/main.css';
import { API } from "../../../../lib/api";
import routes from "../../../../lib/api/routes";


class LoginForm extends Component {

    controller = new AbortController();

    state = {
        loading: false,
        dialCode:"",
        password:"",
        alertdata:{},
        errors: {}
    }

    LogUser = () => {
        const {dialCode, phoneNumber, password} = this.state;
        const { signal } = this.controller;
        this.setState({ loading: true });
        API({
            signal,
            MethodType: 'POST',
            RequestUri: routes.phoneLogin,
            Payload: {
                phoneNumber: `+${dialCode}${phoneNumber}`,
                password
            }
        }).then((res) => {
            if(res.status && res.token){
                window.sessionStorage.setItem("authUser", res.token);
                this.props.history.push("/dashboard/home");
            } else {
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
            console.log(err)
        })
    }

    ValidateForm = (e) => {

        let errors = {};
        let formisValid = true;
        let form = {"phoneNumber": "","password":""};

        Object.keys(form).forEach((field) => {
            let target = e.target[field];
            if (target && target.value !== undefined) {
                let value = target.value;
                if ((value) === "") {
                    errors[field] = true;
                    formisValid = false;
                }
            }
        });

        this.setState({ errors })
        return (formisValid);

    }

    handlePhone = (status, value, countryData) => {
        let Numbers = value.replace(/[^0-9]/g, '');
        value = Numbers.replace(/^(-?)0+/, '');
        this.setState({
            "phoneNumber": value,
            "dialCode": countryData.dialCode
        });
    }

    handleInput = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let formisValid = this.ValidateForm(e);
        if (formisValid) {
            this.LogUser();
        }
    }

    render = () => {
        const { loading, showAlert, alertdata, errors, phoneNumber,password} = this.state;
        const { message, description, type } = alertdata;

        return (
            <>
              {(showAlert) && <AlertBox
                    message={message}
                    description={description}
                    type={type}
                    handleClose={() => this.setState({ showAlert: false })}
                     />}

                <form className="primary-form" 
                    onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <div className="form-group">
                            <label>Phone Number</label>
                            <IntlTelInput
                                preferredCountries={['NG']}
                                onlyCountries={['NG', 'GH']}
                                onPhoneNumberChange={this.handlePhone}
                                separateDialCode={true}
                                fieldName="phoneNumber"
                                value={phoneNumber}
                                disabled={loading}
                                maxLenght={12}
                                inputClassName={"form-control primary " + ((errors["phoneNumber"]) ? "has-error" : "")}
                                autoComplete="off" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.handleInput}
                                className={"form-control primary " + ((errors["password"]) ? "has-error" : "")}
                                placeholder="Enter your password" />
                        </div>
                    </div>
                    <button
                        className="btn btn-primary"
                        disabled={loading}>
                        {(loading) ? <Spinner /> : "Login To Your Account"}
                    </button>
                </form>
            </>
        )
    }
}

export default withRouter(LoginForm);