import React, { Component } from "react";

class PersonalInfo extends Component {

    render = () => {
        return (
            <div>
                <div className="primary-form mt-5">
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

                </div>
            </div>
        )
    }

}

export default PersonalInfo;