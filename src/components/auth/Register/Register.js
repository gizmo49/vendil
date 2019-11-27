import React, { Component } from "react";
import {connect} from "react-redux";
import headings from "./data";
import TwitterBird from "../../../assests/img/twitterbird.svg";
import SweetHead from "../../reuse/sweetcard/sweetHead";
import SweetCard from "../../reuse/sweetcard";
import CenterLogo from "../../base/CenterLogo";
import Maybe from "../../base/Maybe/Maybe";
import RenderRegInstace from "./RenderRegInstance";

const TwiiterButton = () => (
    <a href="#!" className="btn btn-primary twitter-link">
        <img src={TwitterBird} alt="twt" />
        <span>Login with twitter</span>
    </a>
)

class Register extends Component {

    componentDidMount = () => document.body.style.background = "#E0FAF8";

    getHeadInfo = () => {
        const {regProps: { currentStep }} = this.props;
        return (headings.find((x) => x.id === currentStep ));
    }

   
    render = () => {
        const {regProps: { currentStep }} = this.props;

        return (
            <section className="h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-7 col-10">
                        <SweetCard>
                            <div className="my-4">
                                <CenterLogo />
                            </div>
                            <SweetHead info={this.getHeadInfo()} />
                            <div className="px-40 py-3">
                                {RenderRegInstace(currentStep)}
                                <Maybe />
                                <TwiiterButton />
                            </div>
                        </SweetCard>
                    </div>
                </div>
            </section>
        )
    }
}

export default connect((state) => ({ regProps : state.register }), null)(Register);
