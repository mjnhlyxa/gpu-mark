import React from "react";
import { StyleRoot } from "radium";
import "../../styles/containers/header.scss";
import logo from "../../assets/images/logo.svg";
import { gpTada } from '../../utils/animations';

function Header() {
    return (
        <div className="header-wrap">
            <div className="header-wrap__logo">
                <StyleRoot>
                    <img src={logo} alt="logo" style={gpTada}></img>
                </StyleRoot>
            </div>
            <p className="header-wrap__app-name effect-box">GPU Mark</p>
            <div className="search-bar"></div>
        </div>
    );
}
export default Header;
