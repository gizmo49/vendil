import React, { Component } from "react";
import { connect } from "react-redux";
import { setStep } from "../../../../actions/regAction";
import { API } from "../../../../lib/api";
import routes from "../../../../lib/api/routes";

class VerificationForm extends Component {

    controller = new AbortController();

    state = {
        otp: ""
    }

    confirmOTP = () => {
        const { otp } = this.state;
        const { regProps: { phoneNumber }, setStep } = this.props;
        API({
            MethodType: 'POST',
            RequestUri: routes.confirmOtp,
            Payload: { phoneNumber, otp },
            signal: this.controller.signal
        }).then((res) => {
            if (res.status === true) {
                setStep(3)
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    handleOtp = e => {
        const { value } = e.target;
        this.setState({ "otp": value })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { otp } = this.state;
        if (otp.length > 4) {
            this.confirmOTP()
        }
    }

    render = () => {
        const { otp } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className="primary-form">
                <div className="form-group">
                    <label>Verification Code</label>
                    <input name="otp"
                        value={otp}
                        onChange={this.handleOtp}
                        className="form-control text-center primary"
                        placeholder="Enter Verification Code" />
                </div>
                <button className="btn btn-primary">
                    Verify Your Account
                </button>
            </form>
        )
    }
}

export default connect((state) => ({ regProps: state.register }), { setStep })(VerificationForm);