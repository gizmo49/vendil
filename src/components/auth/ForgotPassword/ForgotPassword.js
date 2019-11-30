import React, { useEffect } from "react";
import SweetCard from "../../reuse/sweetcard";
import CenterLogo from "../../base/CenterLogo";
import SweetHead from "../../reuse/sweetcard/sweetHead";
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";

const ForgotPassword = () => {

    useEffect(() => {
        document.body.style.background = "#E0FAF8";
    })

    return (
        <section className="h-100">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-7 col-10">
                    <SweetCard>
                        <CenterLogo />
                        <SweetHead info={{
                            title: "Forgot Password",
                            paragraph: "Enter Your Phone Number"
                        }} />

                        <div className="px-40 py-3">
                            <ForgotPasswordForm />
                            <p className="basil">Remeber password?<a href={'/sign-in'}>sign in</a></p>
                        </div>

                    </SweetCard>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword;