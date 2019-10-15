import React, { Component } from "react";
import IntlTelInput from 'react-intl-tel-input';
import { Link } from "react-router-dom";
import 'react-intl-tel-input/dist/main.css';
import SweetCard from "../reuse/sweetcard";
import SweetHead from "../reuse/sweetcard/sweetHead";
import TwitterBird from "../../assests/img/twitterbird.svg"


export default class Home extends Component {

    render = () => {
        return (
            <section className="h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-md-6">

                        <SweetCard>

                            <SweetHead title="Get Started"
                                paragraph="Ut enim ad minim veniam, quis nostrud exercitation." />

                            <div className="px-40">
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

                                <p className="text-center">
                                    Already have an account?
                                    <Link to="/login">login</Link>
                                </p>

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
