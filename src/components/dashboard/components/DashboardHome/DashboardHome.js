import React, { Component } from 'react';
import WelcomeUser from './WelcomeUser/WelcomeUser';
import RecentTranscations from './RecentTranscations/RecentTranscations';

class DashboardHome extends Component {

    render = () => {
        return (
            <div className="container mt-5">
                <WelcomeUser />
                <RecentTranscations/>
            </div>
        )
    }
}

export default DashboardHome;