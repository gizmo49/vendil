import React, { Component } from "react";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

class RegistrationForm extends Component {

    state = {
        phoneNumber: ""
    }

    HandleSubmit = (e) => {
        e.preventDefault();
        console.log("attempted form");
    }

    // handlePhone = (e) => {
    //     let {value} = e.target;
    //     let Numbers = value.replace(/[^0-9]/g, '');
    //     value = Numbers.replace(/^(-?)0+/, '');
    //     this.setState({
    //         "phoneNumber" : value
    //     })
    // }

    render = () => {
        return (
                <form onSubmit={this.HandleSubmit} className="primary-form">
                    <div className="form-group">
                        <label>Phone Number</label>
                        <IntlTelInput
                            preferredCountries={['NG']}
                            onlyCountries={['NG', 'GH']}
                            separateDialCode={true}
                            inputClassName="form-control primary"
                            autoComplete="off" />
                    </div>
                    <button className="btn btn-primary">continue</button>
                </form>
        )
    }
}

export default RegistrationForm;