import React from "react";
import "../../styles/components/cardButton.scss";

export const CardButton = ({ icon, action, label, className = "" }) => {
    return (
        <div className="card-button-wrap">
            <div className="card-button__icon">
                <img src={icon} alt="card-button-icon"></img>
            </div>
            <div className="card-button__content">
                <div className="card-button__content-action">{action}</div>
                <div className={`card-button__content-label ${className}`}>
                    {label}
                </div>
            </div>
        </div>
    );
};

export default CardButton;
