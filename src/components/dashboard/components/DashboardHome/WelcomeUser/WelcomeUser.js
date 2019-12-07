import React from "react";
import "./WelcomeUser.css";

const WelcomeUser = () => (
    <div className="welcome-user">
        <div className="row">
            <div className="col-4"></div>
            <div className="col-8">
                <div className="welcome-text">
                    <h6>Welcome to Vendly!</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore.</p>
                    <div className="col-lg-4 pl-0">
                        <button className="btn btn--bordered">Top up wallet</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default WelcomeUser;