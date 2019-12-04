import { tada, bounceOutRight, bounceInLeft } from "react-animations";
import Radium from "radium";

export const gpTada = {
    animation: "infinite 3s",
    animationName: Radium.keyframes(tada, "tada")
};

export const gpBounceOutRight = {
    animation: "1s",
    animationName: Radium.keyframes(bounceOutRight, "bounceOutRight")
};

export const gpBounceInLeft = {
    animation: "1s",
    animationName: Radium.keyframes(bounceInLeft, "bounceInLeft")
};
