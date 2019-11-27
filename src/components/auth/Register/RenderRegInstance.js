import React from "react";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import VerificationForm from "./VerificationForm/VerificationForm";
import CreatePassword from "./CreatePassword/CreatePassword";

export default (step) => {
    switch (step) {
        case 1:
            return <RegistrationForm />
        case 2: 
            return <VerificationForm />
        case 3: 
            return <CreatePassword />
        default:
            return <RegistrationForm />
    }
}