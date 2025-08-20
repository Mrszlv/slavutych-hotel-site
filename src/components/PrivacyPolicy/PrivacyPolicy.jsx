import s from "./PrivacyPolicy.module.css";

import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className={s.contText}>
      <h2 className={s.title}>
        {t("privacy.title-1")}{" "}
        <span className={s.span}>{t("privacy.title-1-1")}</span>
      </h2>

      <p className={s.text}>{t("privacy.text-1")}</p>

      <h3 className={s.titleOne}>
        {t("privacy.subtitle-1")}{" "}
        <span className={s.span}>{t("privacy.subtitle-1-1")}</span>
      </h3>

      <p className={s.text}>{t("privacy.subtext-1")}</p>

      <h3 className={s.titleOne}>
        {t("privacy.subtitle-2")}
        <span className={s.span}>{t("privacy.subtitle-2-1")}</span>
      </h3>

      <p className={s.text}>{t("privacy.subtext-2")}</p>

      <p className={s.text}>{t("privacy.subtext-2-1")}</p>

      <h3 className={s.titleOne}>
        {t("privacy.subtitle-3")}
        <span className={s.span}>{t("privacy.subtitle-3-1")}</span>
      </h3>

      <p className={s.text}>{t("privacy.subtext-3")}</p>

      <h3 className={s.titleOne}>
        {t("privacy.subtitle-4")}
        <span className={s.span}>{t("privacy.subtitle-4-1")}</span>
      </h3>

      <p className={s.text}>{t("privacy.subtext-4")}</p>
    </div>
  );
};

export default PrivacyPolicy;
