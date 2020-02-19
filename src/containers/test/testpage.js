import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { bounceOutRight, bounceInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
    tada: {
        animation: "1s",
        animationName: Radium.keyframes(bounceOutRight, "bounceOutRight")
    },
    slideInLeft: {
        animation: "1s",
        animationName: Radium.keyframes(bounceInLeft, "bounceInLeft")
    }
};

function TestPage({ history }) {
    const { t, i18n } = useTranslation();
    const [style, setStyle] = useState(styles.slideInLeft);
    const onClick = () => {
        setStyle(styles.tada);
        setTimeout(() => {
            // history.push("/");
        }, 500);
    };
    return (
        <div className="main-content-wrap">
            <StyleRoot>
                <div style={style}>{t("test.we")}</div>
            </StyleRoot>
            <button onClick={onClick}>main</button>
        </div>
    );
}
export default TestPage;
