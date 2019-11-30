import React from "react";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import VerificationForm from "./VerificationForm/VerificationForm";
import CreatePassword from "./CreatePassword/CreatePassword";

export default (step, history) => {
    switch (step) {
        case 1:
            return <RegistrationForm history={history}/>
        case 2: 
            return <VerificationForm  history={history}/>
        case 3: 
            return <CreatePassword  history={history}/>
        default:
            return <RegistrationForm  history={history} />
    }
}