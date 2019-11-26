import React, { useState } from "react";
import "../../styles/main.scss";
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

function MainPage({ history }) {
    const [style, setStyle] = useState(styles.slideInLeft);
    const onClick = () => {
        setStyle(styles.tada);
        setTimeout(() => {
            history.push("/test");
        }, 500);
    };
    return (
        <div className="main-content-wrap">
            <StyleRoot>
                <div style={style} className="main-content-wrap__breadcrumb">
                    main
                </div>
            </StyleRoot>
            <button onClick={onClick}>test</button>
        </div>
    );
}
export default MainPage;
