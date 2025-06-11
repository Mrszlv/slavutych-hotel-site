import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ua from "./ua.json";
import ru from "./ru.json";
import en from "./en.json";

i18n.use(initReactI18next).init({
  resources: {
    ua: { translation: ua },
    ru: { translation: ru },
    en: { translation: en },
  },
  lng: "ua",
  fallbackLng: "ua",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
