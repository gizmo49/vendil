import React, { Component } from "react";
import {connect} from "react-redux";
import renderPasswordInstance from "./renderPasswordInstance";
import headings from "./data";
import SweetCard from "../../reuse/sweetcard";
import CenterLogo from "../../base/CenterLogo";
import SweetHead from "../../reuse/sweetcard/sweetHead";

class ForgotPassword extends Component {

    componentDidMount = () => document.body.style.background = "#E0FAF8";

    getHeadInfo = () => {
        const { regProps: { currentStep } } = this.props;
        return (headings.find((x) => x.id === currentStep));
    }

    render = () => {
        const { regProps: { currentStep }, history } = this.props;

        return (
            <section className="h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-7 col-10">
                        <SweetCard>
                            <CenterLogo />
                            <SweetHead info={this.getHeadInfo()} />

                            <div className="px-40 py-3">
                                {renderPasswordInstance(currentStep, history)}
                                <p className="basil">Remeber password? <a href={'/sign-in'}>sign in</a></p>
                            </div>

                        </SweetCard>
                    </div>
                </div>
            </section>
        )
    }
}

export default connect((state) => ({ regProps : state.forgotPassword }), null)(ForgotPassword);
