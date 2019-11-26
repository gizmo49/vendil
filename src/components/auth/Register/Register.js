import React, { useEffect } from "react";
import TwitterBird from "../../../assests/img/twitterbird.svg";
import SweetHead from "../../reuse/sweetcard/sweetHead";
import SweetCard from "../../reuse/sweetcard";
import CenterLogo from "../../base/CenterLogo";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import Maybe from "../../base/Maybe/Maybe";

const TwiiterButton = () => (
    <a href="#!" className="btn btn-primary twitter-link">
        <img src={TwitterBird} alt="twt" />
        <span>Login with twitter</span>
    </a>
)

const Register = () => {

    useEffect(() => {
        document.body.style.background = "#E0FAF8";
    });

    return (
        <section className="h-100">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-7 col-10">
                    <SweetCard>
                        <div className="my-4">
                            <CenterLogo />
                        </div>
                        <SweetHead
                            title="Get Started"
                            paragraph="Let’s get you all setup for vendly" />
                        <div className="px-40 py-3">
                            <RegistrationForm />
                            <Maybe />
                            <TwiiterButton />
                        </div>
                    </SweetCard>
                </div>
            </div>
        </section>
    )

}

export default Register;