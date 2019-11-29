import React, { Component } from "react";
import { connect } from "react-redux";
import { setStep } from "../../../../actions/regAction";
import { API } from "../../../../lib/api";
import routes from "../../../../lib/api/routes";
import Spinner from "../../../base/Spinner/Spinner";
import AlertBox from "../../../utils/AlertBox/ALertBox";

class VerificationForm extends Component {

    controller = new AbortController();

    state = {
        otp: "",
        showAlert: false,
        alertdata: {},
    }

    componentWillUnmount = () => this.controller.abort();

    confirmOTP = () => {
        const { otp } = this.state;
        const { regProps: { phoneNumber }, setStep } = this.props;
        API({
            MethodType: 'POST',
            RequestUri: routes.confirmOtp,
            Payload: { phoneNumber, otp },
            signal: this.controller.signal
        }).then((res) => {
            this.setState({ loading: false })
            if (res.status === true) {
                window.sessionStorage.setItem("temp_access_token", res.access_token);
                setStep(3);
            } else{
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

    handleOtp = e => {
        const { value } = e.target;
        this.setState({ "otp": value })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { otp } = this.state;
        if (otp.length === 6 ) {
            this.setState({ loading: true })
            this.confirmOTP()
        }
    }

    render = () => {
        const { otp, loading, alertdata, showAlert} = this.state;
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
                    <div className="form-group">
                        <label>Verification Code</label>
                        <input name="otp"
                            value={otp}
                            maxLength={6}
                            onChange={this.handleOtp}
                            className="form-control text-center primary"
                            placeholder="Enter Verification Code" 
                            autoComplete="off" />
                    </div>
                    <button 
                        className="btn btn-primary"
                        disabled={loading}>
                        {(loading) ? <Spinner/> : "Verify Your Account"}
                    </button>
                </form>
            </>
        )
    }
}

export default connect((state) => ({ regProps: state.register }), { setStep })(VerificationForm);