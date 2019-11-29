import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetCard from "../../reuse/sweetcard";
import SweetHead from "../../reuse/sweetcard/sweetHead";
import TwitterBird from "../../../assests/img/twitterbird.svg";
import CenterLogo from "../../base/CenterLogo";
import Maybe from "../../base/Maybe/Maybe";
import LoginForm from "./LoginForm/LoginForm";


export default class Login extends Component {

    componentDidMount = () => document.body.style.background = "#E0FAF8";
        
    render = () => {
        return (
            <section className="h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-7 col-10">
                        <SweetCard>
                            <CenterLogo />
                            <SweetHead info={{
                                title: "Welcome Back",
                                paragraph: "Sign Into Your Account"
                            }} />

                            <div className="px-40 py-3">
                                <LoginForm />
                                <p className="text-center already">
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                </p>
                                <Maybe />
                                <a href="#!" className="btn btn-primary twitter-link">
                                    <img src={TwitterBird} alt="twt" />
                                    <span>Login with twitter</span>
                                </a>
                                <p className="basil">Don't have an account? <Link to={'/sign-up'}>create account here</Link></p>
                            </div>

                        </SweetCard>
                    </div>
                </div>
            </section>
        )
    }

}
