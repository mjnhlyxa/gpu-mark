import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locate-en";
import vi from "./locate-vi";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en,
            vi
        },
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
