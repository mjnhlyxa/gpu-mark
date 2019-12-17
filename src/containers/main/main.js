import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles/containers/main.scss";
import vgaIcon from "../../assets/images/vga.svg";
import cpuIcon from "../../assets/images/cpu.svg";
import stressGpuIcon from "../../assets/images/stress-vga.svg";
import stressCpuIcon from "../../assets/images/stress-cpu.svg";
import analyticsIcon from "../../assets/images/analytics.svg";
import CardButton from "../../components/buttons/cardButton";

function MainPage({ history }) {
    const ref = React.createRef();
    const { t } = useTranslation();
    setTimeout(() => {
        var a = document.getElementsByClassName("main-content__action-btn");
        console.log(a.style);
    }, 3000);
    return (
        <div className="main-content-wrap" ref={ref}>
            <div className="main-content__action-btn">
                <CardButton
                    icon={vgaIcon}
                    action={t("dashboard.label.runBenchMark")}
                    label={t("dashboard.label.runGpu")}
                />
                <CardButton
                    icon={cpuIcon}
                    action={t("dashboard.label.runBenchMark")}
                    label={t("dashboard.label.runCpu")}
                />
                <CardButton
                    icon={stressGpuIcon}
                    action={t("dashboard.label.stressTest")}
                    label={t("dashboard.label.runGpu")}
                    className="orange"
                />
                <CardButton
                    icon={stressCpuIcon}
                    action={t("dashboard.label.stressTest")}
                    label={t("dashboard.label.runCpu")}
                    className="orange"
                />
                <CardButton
                    icon={analyticsIcon}
                    action={t("dashboard.label.benchmarkResult")}
                    label={t("dashboard.label.report")}
                />
            </div>
            <div className="main-content__benchmark-wrap">
                <div className="main-content__benchmark-wrap-run"></div>
                <div className="main-content__benchmark-wrap-details">
                    <div className="main-content__benchmark-wrap-score"></div>
                    <div className="main-content__benchmark-wrap-extended"></div>
                </div>
            </div>
        </div>
    );
}
export default MainPage;
