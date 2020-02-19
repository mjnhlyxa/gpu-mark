import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../styles/containers/main.scss";
import vgaIcon from "../../assets/images/vga.svg";
import cpuIcon from "../../assets/images/cpu.svg";
import stressGpuIcon from "../../assets/images/stress-vga.svg";
import stressCpuIcon from "../../assets/images/stress-cpu.svg";
import analyticsIcon from "../../assets/images/analytics.svg";
import CardButton from "../../components/buttons/cardButton";
import GPUBenchmarkPage, {
    GPUBenchmarkPage1
} from "../gpuBenchmark/gpuBenchmarkPage";
import { PAGE } from "../../utils/contants";

function MainPage({ history }) {
    const [unmount, setUnmount] = useState(false);
    const [page, setPage] = useState(PAGE.BENCHMARK_GPU);
    const { t } = useTranslation();
    const onCardClick = name => {
        if (name === page) {
            return;
        }
        setUnmount(true);
        setTimeout(() => {
            setUnmount(false);
            setPage(name);
        }, 500);
    };
    return (
        <div className="main-content-wrap">
            <div className="main-content__action-btn">
                <CardButton
                    icon={vgaIcon}
                    action={t("dashboard.label.runBenchMark")}
                    label={t("dashboard.label.runGpu")}
                    name={PAGE.BENCHMARK_GPU}
                    onClick={onCardClick}
                />
                <CardButton
                    icon={cpuIcon}
                    action={t("dashboard.label.runBenchMark")}
                    label={t("dashboard.label.runCpu")}
                    name={PAGE.BENCHMARK_CPU}
                    onClick={onCardClick}
                />
                <CardButton
                    icon={stressGpuIcon}
                    action={t("dashboard.label.stressTest")}
                    label={t("dashboard.label.runGpu")}
                    className="orange"
                    name={PAGE.STRESS_GPU}
                    onClick={onCardClick}
                />
                <CardButton
                    icon={stressCpuIcon}
                    action={t("dashboard.label.stressTest")}
                    label={t("dashboard.label.runCpu")}
                    className="orange"
                    name={PAGE.STRESS_CPU}
                    onClick={onCardClick}
                />
                <CardButton
                    icon={analyticsIcon}
                    action={t("dashboard.label.benchmarkResult")}
                    label={t("dashboard.label.records")}
                    name={PAGE.RECORDS}
                    onClick={onCardClick}
                />
            </div>
            <div className="main-content__benchmark-wrap">
                {page === PAGE.BENCHMARK_GPU && <GPUBenchmarkPage unmount={unmount} />}
                {page === PAGE.BENCHMARK_CPU && <GPUBenchmarkPage1 unmount={unmount} />}
            </div>
        </div>
    );
}
export default MainPage;
