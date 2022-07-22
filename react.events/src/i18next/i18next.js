import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import en from './en.json'
import lt from './lt.json'

i18next.use(initReactI18next).init({
    resources: {
        en: {

            translation: en,
        },
        lt: {
            translation: lt,
        }
    },
    lng: localStorage.getItem('lng') || 'en'

});

export default i18next;