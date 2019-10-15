import React, { Component } from "react";
import { Link } from "react-router-dom";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import SweetCard from "../reuse/sweetcard";
import SweetHead from "../reuse/sweetcard/sweetHead";
import TwitterBird from "../../assests/img/twitterbird.svg"
import FlowerBack from "../base/flowerback";


export default class Home extends Component {

    render = () => {
        return (
            <section className="h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-7 col-10">
                        <FlowerBack />
                        <SweetCard>
                            <SweetHead title="Get Started"
                                paragraph="Ut enim ad minim veniam, quis nostrud exercitation." />

                            <div className="px-40 py-3">
                                <div className="mb-3">
                                    <IntlTelInput preferredCountries={['NG']}
                                        inputClassName="form-control primary"
                                        autoComplete="off" />
                                </div>
                                <div className="mb-3">
                                    <input type="password"
                                        className="form-control primary"
                                        placeholder="Create a password" />
                                </div>

                                <button className="btn btn-primary">Sign up</button>

                                <p className="text-center already">
                                    Already have an account?
                                    <Link to="/login">Log in</Link>
                                </p>

                                <div className="d-flex justify-content-center">
                                    <h6 className="tally"><span>or</span></h6>
                                </div>

                                <a href="#!" className="btn btn-primary twitter-link">
                                    <img src={TwitterBird} alt="twt" />
                                    <span>continue with twitter</span>
                                </a>
                            </div>
                        </SweetCard>

                    </div>
                </div>
            </section>
        )
    }

}
