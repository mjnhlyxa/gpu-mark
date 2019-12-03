import React from "react";
import "../../styles/containers/footer.scss";
import feedbackIcon from "../../assets/images/feedback.svg";

function Footer() {
    return (
        <div className="footer-wrap">
            <div className="footer-wrap__info">
                <span className="footer-wrap__reserved">© 2019 GPU-Mark</span>
                <span>About</span>
                <span>User guide</span>
                <span>FAQs</span>
                <span>Email</span>
            </div>
            <div className="footer-wrap__feedback">
                <img
                    className="footer-wrap__feedback-icon"
                    src={feedbackIcon}
                    alt="feedback-icon"
                ></img>
                <span className="footer-wrap__feedback-text">Feedback</span>
            </div>
        </div>
    );
}
export default Footer;
