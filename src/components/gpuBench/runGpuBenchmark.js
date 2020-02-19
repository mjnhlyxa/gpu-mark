import React from "react";
import "../../styles/components/gpuBenchmark.scss";
import Dot from "../../elements/dot";

const GPU = require("gpu.js");
const dots = [];
for (let i = 0; i < 20; i++) {
    dots.push(new Dot());
}
function kernelExcution(vers, horz, scales) {
    const x = this.thread.x;
    const y = this.thread.y;
    const dotCount = 20;
    const radius = 4;
    let isMarked = false;
    for (let i = 0; i < dotCount; i++) {
        const x1 = vers[i];
        const y1 = horz[i];
        const scale = scales[i];
        if (
            Math.abs(x - x1) <= radius * scale &&
            Math.abs(y - y1) <= radius * scale
        ) {
            isMarked = true;
            break;
        }
    }
    if (isMarked) {
        this.color(1, 0, 0, 0.2);
    } else {
        this.color(1, 1, 1, 1);
    }
    // this.color(1, 0, 0, 0);
}

const renderLoop = (cvDiv, kernel) => {
    for (var i = 0; i < dots.length; i++) {
        dots[i].update();
    }
    const vert = dots.map(dot => {
        return dot.xProjected;
    });
    const horz = dots.map(dot => {
        return dot.yProjected;
    });
    const scales = dots.map(dot => {
        return dot.scaleProjected;
    });
    kernel(vert, horz, scales);
    const cv = kernel.canvas;
    const gl = cv.getContext("webgl2", { premultipliedAlpha: false });
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_COLOR, gl.SRC_ALPHA_SATURATE);
    var child = cvDiv.childNodes[0];
    if (child) {
        cvDiv.replaceChild(cv, child);
    } else {
        cvDiv.appendChild(cv);
    }
    requestAnimationFrame(() => renderLoop(cvDiv, kernel));
};

export const RunGpuBenchmark = () => {
    const gpu = new GPU();
    const kernel = gpu.createKernel(kernelExcution, {
        graphical: true,
        output: [300, 300]
    });
    setTimeout(() => {
        const cvDiv = document.getElementById("gpu-canvas");
        renderLoop(cvDiv, kernel);
    }, 1000);
    return <div id="gpu-canvas" className="test111"></div>;
};


export default RunGpuBenchmark;
