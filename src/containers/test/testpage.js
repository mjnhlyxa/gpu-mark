import React from "react";
import { useTranslation } from "react-i18next";

function TestPage() {
    const { t, i18n } = useTranslation();
    const onClick = () => {
        i18n.changeLanguage('vi')
    }
    return (
        <React.Fragment>
            <div>{t("test.we")}</div>
            <button onClick={onClick}>test</button>
        </React.Fragment>
    );
}
export default TestPage;
