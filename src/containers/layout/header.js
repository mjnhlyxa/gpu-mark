import React from "react";
import { tada } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "../../styles/containers/header.scss";
import logo from "../../assets/images/logo.svg";

const styles = {
    tada: {
        animation: "infinite 3s",
        animationName: Radium.keyframes(tada, "tada")
    }
};

function Header() {
    return (
        <div className="header-wrap">
            <div className="header-wrap__logo">
                <StyleRoot>
                    <img src={logo} alt="logo" style={styles.tada}></img>
                </StyleRoot>
            </div>
            <p className="header-wrap__app-name effect-box">GPU Mark</p>
            <div className="search-bar"></div>
        </div>
    );
}
export default Header;
