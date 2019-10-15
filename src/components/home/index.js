import React, { Component } from "react";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import SweetCard from "../reuse/sweetcard";
import SweetHead from "../reuse/sweetcard/sweetHead";



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
                            </div>

                        </SweetCard>

                    </div>
                </div>
            </section>
        )
    }

}
