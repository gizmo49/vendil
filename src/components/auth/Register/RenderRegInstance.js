import React from "react";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import VerificationForm from "./VerificationForm/VerificationForm";

export default (step) => {
    switch (step) {
        case 1:
            return <RegistrationForm />
        case 2: 
            return <VerificationForm />
        default:
            return <RegistrationForm />
    }
}