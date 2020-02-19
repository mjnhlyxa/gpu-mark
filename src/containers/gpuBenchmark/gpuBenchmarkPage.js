import React from "react";
import '../../styles/containers/gpuBenchmarkPage.scss';
import RunBenchmarkLayout from "../layout/runBenchmark.layout";
import PlayButton from '../../components/buttons/playButton';

export function RunGpuBenchmarkComponent() {
    const onStart = () => {
        
    }
    return (
        <div className="run-gpu-benchmark">
            <div className="run-gpu-benchmark_start-btn">
                <PlayButton onClick={onStart} />
            </div>
        </div>
    )
}

export function GPUBenchmarkPage(props) {
    return <RunBenchmarkLayout {...props} LeftContainer={RunGpuBenchmarkComponent}/>;
}
export function GPUBenchmarkPage1(props) {
    return <RunBenchmarkLayout {...props}/>;
}

export default GPUBenchmarkPage;
