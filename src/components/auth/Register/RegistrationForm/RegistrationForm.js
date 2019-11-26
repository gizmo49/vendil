import React, { Component } from "react";
import IntlTelInput from 'react-intl-tel-input';
import AlertBox from "../../../utils/AlertBox/ALertBox";
import Spinner from "../../../base/Spinner/Spinner";
import 'react-intl-tel-input/dist/main.css';

export default class RegistrationForm extends Component {

    state = {
        dialCode: "",
        phoneNumber: ""
    }

    HandleSubmit = (e) => {
        e.preventDefault();
        const { dialCode,phoneNumber } = this.state;
        if(phoneNumber.length > 5) {
            let telePhoneNumber = `+${dialCode}${phoneNumber}`;
            console.log(telePhoneNumber);
            this.setState({ "loading" : true })
        }
    }

    handlePhone = (status, value, countryData) => {
        let Numbers = value.replace(/[^0-9]/g, '');
        value = Numbers.replace(/^(-?)0+/, '');
        this.setState({
            "phoneNumber" : value,
            "dialCode": countryData.dialCode
        })
    }

    render = () => {
        const {phoneNumber, loading} =  this.state;

        return (
            <>
                <AlertBox />
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
                        {(loading) ? <Spinner /> : "continue" }
                    </button>
                </form>
            </>
        )
    }
}