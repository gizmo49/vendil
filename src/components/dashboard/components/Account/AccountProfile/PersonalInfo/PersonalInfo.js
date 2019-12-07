import React, { Component } from "react";
import Select from "react-select";
import { SelectStyles } from "../../../../../../styles/SelectStyles";

class PersonalInfo extends Component {

    state = {
        genders: [
            {
                label: "Male",
                value: "male"
            },
            {
                label: "Female",
                value: "female"
            }
        ],
        countries: [
            {
                label: "Nigeria",
                value: "Nigeria"
            },
            {
                label: "Ghana",
                value: "Ghana"
            }
        ]
    }

    render = () => {
        return (
            <div>
                <div className="primary-form mt-5">
                    <div className="row">
                    <div className="col-lg-4">
                            <div className="form-summary">
                                <h6>Upload Profile Image</h6>
                                <p>Choose a new avatar to be used across Vendly</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="form-summary">
                                <h6>Full Name</h6>
                                <p>personalize your account</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="form-row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input className="form-control primary"
                                            placeholder="Gbenga" />
                                    </div>

                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input className="form-control primary"
                                            placeholder="Adekunle" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="form-summary">
                                <h6>Date of Birth</h6>
                                <p>tell us when you were born</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="form-row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Date of Birth</label>
                                        <input className="form-control primary" placeholder="2012-08-30" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="form-summary">
                                <h6>Sex</h6>
                                <p>tell us about your gender</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="form-row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Sex/Gender</label>
                                        <Select
                                        name="gender"
                                        // onChange={this.handleSelect}
                                        isSearchable={false}
                                        styles={SelectStyles()}
                                        placeholder={''}
                                        options={this.state.genders} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="form-summary">
                                <h6>Country</h6>
                                <p>Tell us your country of residence </p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="form-row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Country</label>
                                        <Select
                                        name="country"
                                        isSearchable={false}
                                        styles={SelectStyles()}
                                        placeholder={''}
                                        options={this.state.countries} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                        </div>
                        <div className="col-lg-8">
                            <div className="form-row">
                                <div className="col-lg-6">
                                    <button className="btn btn-primary">
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }

}

export default PersonalInfo;