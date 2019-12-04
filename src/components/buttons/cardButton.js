import React, { useState } from "react";
import "../../styles/components/cardButton.scss";

export const CardButton = ({ icon, action, label }) => {
    return (
        <div className="card-button-wrap">
            <div className="card-button__icon">
                <img src={icon} alt="card-button-icon"></img>
            </div>
            <div className="card-button__content">
                <div className="card-button__content-action">{action}</div>
                <div className="card-button__content-label">{label}</div>
            </div>
        </div>
    );
};

export default CardButton;
