import React from "react";
import "../../styles/main.scss";
import Header from "../layout/header";

function MainPage() {
    return (
        <div className="main-page-wrap">
            <div className="main-header-wrap">
                <Header />
            </div>
            <div className="main-content-wrap">
                <div className="main-content-wrap__breadcrumb"></div>
            </div>
            <div className="main-footer-wrap"></div>
        </div>
    );
}
export default MainPage;
