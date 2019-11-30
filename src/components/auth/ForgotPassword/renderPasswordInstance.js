import React from "react";
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";
import ConfirmOtp from "./ConfirmOtp/ConfirmOtp";
import ResetPassword from "./ResetPassword/ResetPassword";

export default (step, history) => {
    switch (step) {
        case 1:
            return <ForgotPasswordForm history={history}/>
        case 2: 
            return <ConfirmOtp history={history} />
        case 3:
            return <ResetPassword history={history} />
        default:
            return <ForgotPasswordForm  history={history} />
    }
}