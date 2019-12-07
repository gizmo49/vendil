import React, { Component } from "react";
import DeadTranscations from "../../../utils/DeadTranscations/DeadTranscations";
import "./RecentTranscations.css";


class RecentTranscations extends Component {

    render = () => {
        return (
            <div className="block-transcations">
                <div className="block-head">
                    <h6>Recent Transcations</h6>
                    <p>Summary of transcations you've done in the last week</p>
                </div>

                <DeadTranscations />

            </div>
        )
    }

}

export default RecentTranscations;