import React, {Component} from "react";
import "./ProfileCycle.css";

class ProfileCycle extends Component {

    componentDidMount = () => {
        var element = document.getElementById(`percentValue`);
        if(element !== null && element !== undefined){
            element.style.strokeDasharray = `20, 100`;
        }
    }

    render = () => {
        return (
            <div className="single-chart threeScale">
                <svg viewBox="0 0 40 40" className="circular-chart green">
                    <defs>
                        <linearGradient id="linear" gradientUnits='objectBoundingBox' gradientTransform='rotate(-310,0.5,0.5)'>
                            <stop offset="0%"  stopColor="#359BE0"/>
                            <stop offset="100%" stopColor="#359BE0"/>
                        </linearGradient>
                        <linearGradient id="complete" gradientUnits='objectBoundingBox' gradientTransform='rotate(-310,0.5,0.5)'>
                            <stop offset="0%"  stopColor="#4ABE86"/>
                            <stop offset="100%" stopColor="#4ABE86"/>
                        </linearGradient>
                    </defs>
                    <path className="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path className="circle"
                        id={`percentValue`}
                        strokeDasharray="0, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>

                <div className="bilTruck">
                    <div className="hold-img">
                        <img src="https://i.ibb.co/61bZbVq/Mask-Group.png" alt="Save "/>
                    </div>
                </div>
            </div>
        )
    }
}


export default ProfileCycle;