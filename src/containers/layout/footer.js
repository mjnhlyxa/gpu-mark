import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles/containers/footer.scss";
import feedbackIcon from "../../assets/images/feedback.svg";

function Footer() {
    const { t } = useTranslation();
    return (
        <div className="footer-wrap">
            <div className="footer-wrap__info">
                <span className="footer-wrap__reserved">© 2019 GPU-Mark</span>
                <span>{t("footer.label.about")}</span>
                <span>{t("footer.label.guide")}</span>
                <span>{t("footer.label.faq")}</span>
                <span>{t("footer.label.email")}</span>
            </div>
            <div className="footer-wrap__feedback">
                <img
                    className="footer-wrap__feedback-icon"
                    src={feedbackIcon}
                    alt="feedback-icon"
                ></img>
                <span className="footer-wrap__feedback-text">{t("footer.label.feedback")}</span>
            </div>
        </div>
    );
}
export default Footer;
