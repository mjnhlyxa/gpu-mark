import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../styles/containers/main.scss";
import vgaIcon from "../../assets/images/vga.svg";
import cpuIcon from "../../assets/images/cpu.svg";
import stressGpuIcon from "../../assets/images/stress-vga.svg";
import stressCpuIcon from "../../assets/images/stress-cpu.svg";
import CardButton from "../../components/buttons/cardButton";

function MainPage({ history }) {
    const { t } = useTranslation();
    return (
        <div className="main-content-wrap">
            <div className="main-content__action-btn">
                <CardButton
                    icon={vgaIcon}
                    action={t('dashboard.label.runBenchMark')}
                    label={t('dashboard.label.runGpu')}
                />
                <CardButton
                    icon={cpuIcon}
                    action={t('dashboard.label.runBenchMark')}
                    label={t('dashboard.label.runCpu')}
                />
                <CardButton
                    icon={stressGpuIcon}
                    action={t('dashboard.label.stressTest')}
                    label={t('dashboard.label.runGpu')}
                />
                <CardButton
                    icon={stressCpuIcon}
                    action={t('dashboard.label.stressTest')}
                    label={t('dashboard.label.runCpu')}
                />
                <CardButton
                    icon={vgaIcon}
                    action={t('dashboard.label.benchmarkResult')}
                    label={t('dashboard.label.report')}
                />
            </div>
        </div>
    );
}
export default MainPage;
