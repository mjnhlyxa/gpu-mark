import React from "react";
import "../../styles/components/playButton.scss";

export function PlayButton({ onClick }) {
    return <div onClick={onClick} className="play-btn"></div>;
}

export default PlayButton;
