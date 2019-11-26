import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./index.css"

class SweetHead extends Component {

    render = () => {
        const { title, paragraph } = this.props;
        return (
            <div className="sweet--card--head">
                <div className="px-40">
                    <h6>{title}</h6>
                    <p>{paragraph}</p>
                </div>
            </div>
        )
    }

}

SweetHead.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string
};


export default SweetHead;