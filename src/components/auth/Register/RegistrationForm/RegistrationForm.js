import React, { Component } from "react";
import {connect} from "react-redux";
import IntlTelInput from 'react-intl-tel-input';
import {setStep} from "../../../../actions/regAction";
import AlertBox from "../../../utils/AlertBox/ALertBox";
import Spinner from "../../../base/Spinner/Spinner";
import 'react-intl-tel-input/dist/main.css';

class RegistrationForm extends Component {

    state = {
        dialCode: "",
        phoneNumber: "",
        alertdata: {},
        showAlert: false,
    }

    HandleSubmit = (e) => {
        e.preventDefault();
        const { dialCode, phoneNumber } = this.state;
        if (phoneNumber.length > 5) {
            let telePhoneNumber = `+${dialCode}${phoneNumber}`;
            this.props.setStep(2);
            console.log(telePhoneNumber);
            this.setState({ "loading": true })
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
                    type={type} />}

                <form onSubmit={this.HandleSubmit} className="primary-form">
                    <div className="form-group">
                        <label>Phone Number</label>
                        <IntlTelInput
                            preferredCountries={['NG']}
                            onlyCountries={['NG', 'GH']}
                            onPhoneNumberChange={this.handlePhone}
                            value={phoneNumber}
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

export default connect((state) => ({ regProps : state.register }), {setStep})(RegistrationForm);
