import React, { useState } from "react";
import "../../styles/containers/layout/runBenchmarkLayout.scss";
import {
    bounceOutLeft,
    bounceInLeft,
    bounceOutRight,
    bounceInRight
} from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
    bounceOutLeft: {
        animation: "1s",
        animationName: Radium.keyframes(bounceOutLeft, "bounceOutLeft")
    },
    bounceInLeft: {
        animation: "1s",
        animationName: Radium.keyframes(bounceInLeft, "bounceInLeft")
    },
    bounceOutRight: {
        animation: "1s",
        animationName: Radium.keyframes(bounceOutRight, "bounceOutRight")
    },
    bounceInRight: {
        animation: "1s",
        animationName: Radium.keyframes(bounceInRight, "bounceInRight")
    }
};

export const EmptyContainer = () => <React.Fragment />;

export function RunBenchmarkLayout({
    LeftContainer = EmptyContainer,
    TopContainer = EmptyContainer,
    BottomContainer = EmptyContainer,
    unmount = false
}) {
    const style = {
        left: styles.bounceInLeft,
        top: styles.bounceInRight,
        bottom: styles.bounceInRight,
    };
    // let style = styles.bounceInLeft;
    // const [style, setStyle] = useState(styles.slideInLeft);
    if (unmount) {
        style.left = styles.bounceOutLeft;
        style.top = styles.bounceOutRight;
        style.bottom = styles.bounceOutRight;
    }

    return (
        <div className="run-benchmark-layout-wrapper">
            <StyleRoot className="style-root-left">
                <div style={style.left} className="run-benchmark-layout-left">
                    <LeftContainer />
                </div>
            </StyleRoot>
            <div className="run-benchmark-layout-right">
                <StyleRoot style={style.top} className="style-root-top">
                    <div className="run-benchmark-layout-top">
                        <TopContainer />
                    </div>
                </StyleRoot>
                <StyleRoot style={style.bottom} className="style-root-bottom">
                    <div className="run-benchmark-layout-bottom">
                        <BottomContainer />
                    </div>
                </StyleRoot>
            </div>
        </div>
    );
}

export default RunBenchmarkLayout;
