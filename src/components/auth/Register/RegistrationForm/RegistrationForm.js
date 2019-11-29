import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePhone } from "../../../../actions/regAction";
import { API } from "../../../../lib/api";
import routes from "../../../../lib/api/routes";
import AlertBox from "../../../utils/AlertBox/ALertBox";
import Spinner from "../../../base/Spinner/Spinner";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';


class RegistrationForm extends Component {

    controller = new AbortController();
    _isMounted = false;

    state = {
        dialCode: "",
        phoneNumber: "",
        alertdata: {},
        showAlert: false,
    }

    componentDidMount = () => this._isMounted = true;

    componentWillUnmount = () => {
        this.controller.abort()
        this._isMounted = false;
    }

    SendOtp = () => {
        const { dialCode, phoneNumber } = this.state;
        const { signal } = this.controller;
        const telePhoneNumber = `+${dialCode}${phoneNumber}`;

        API({
            MethodType: 'POST',
            RequestUri: routes.sendOtp,
            Payload: { phoneNumber: telePhoneNumber },
            signal: signal
        }).then((res) => {
            if (res.status === true) {
                this.props.updatePhone(telePhoneNumber)
            }else{
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
            this.setState({
                showAlert: true,
                loading: false,
                alertdata: {
                    type:"error",
                    message: "Error!",
                    description: "Unable to complete action"
                }
            });
        })
    }

    HandleSubmit = (e) => {
        e.preventDefault();
        const { phoneNumber } = this.state;
        if (phoneNumber.length > 5) {
            this.setState({ "loading": true })
            this.SendOtp();
        }
    }

    handlePhone = (status, value, countryData) => {
        let Numbers = value.replace(/[^0-9]/g, '');
        value = Numbers.replace(/^(-?)0+/, '');
        this.setState({
            "phoneNumber": value,
            "dialCode": countryData.dialCode
        })
    }

    render = () => {
        const { phoneNumber, loading, alertdata, showAlert } = this.state;
        const { message, description, type } = alertdata;

        return (
            <>
                {(showAlert) && <AlertBox
                    message={message}
                    description={description}
                    type={type}
                    handleClose={() => this.setState({ showAlert: false })}
                     />}

                <form onSubmit={this.HandleSubmit} className="primary-form">
                    <div className="form-group">
                        <label>Phone Number</label>
                        <IntlTelInput
                            preferredCountries={['NG']}
                            onlyCountries={['NG', 'GH']}
                            onPhoneNumberChange={this.handlePhone}
                            value={phoneNumber}
                            maxLenght={12}
                            disabled={loading}
                            separateDialCode={true}
                            inputClassName="form-control primary"
                            autoComplete="off" />
                    </div>
                    <button
                        className="btn btn-primary"
                        disabled={loading}>
                        {(loading) ? <Spinner /> : "continue"}
                    </button>
                </form>
            </>
        )
    }
}

export default connect((state) => ({ regProps: state.register }), { updatePhone })(RegistrationForm);
