import React, { Component } from "react";
import { Link } from "react-router-dom";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import SweetCard from "../../reuse/sweetcard";
import SweetHead from "../../reuse/sweetcard/sweetHead";
import TwitterBird from "../../../assests/img/twitterbird.svg";
import CenterLogo from "../../base/CenterLogo";
import Maybe from "../../base/Maybe/Maybe";


export default class Login extends Component {

    componentDidMount = () => document.body.style.background = "#E0FAF8";

    render = () => {
        return (
            <section className="h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-7 col-10">
                        <SweetCard>
                            <div className="my-4">
                                <CenterLogo />
                            </div>
                            <SweetHead title="Welcome Back"
                                paragraph="Sign Into Your Account" />

                            <div className="px-40 py-3">
                                <div className="primary-form">
                                    <div className="mb-3">
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <IntlTelInput preferredCountries={['NG']}
                                                inputClassName="form-control primary"
                                                autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password"
                                                className="form-control primary"
                                                placeholder="Create a password" />
                                        </div>
                                    </div>
                                    <button className="btn btn-primary">Login To Your Account</button>
                                </div>

                                <p className="text-center already">
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                </p>
                                <Maybe />
                                <a href="#!" className="btn btn-primary twitter-link">
                                    <img src={TwitterBird} alt="twt" />
                                    <span>Login with twitter</span>
                                </a>
                            </div>
                        </SweetCard>

                    </div>
                </div>
            </section>
        )
    }

}
