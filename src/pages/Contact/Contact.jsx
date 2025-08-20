import s from "./Contact.module.css";

import { useTranslation } from "react-i18next";

import { PiMapPinAreaFill } from "react-icons/pi";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className={`${s.container} ${s.photoCont}`}>
      <h2 className={s.title}>
        {t("contact.title")}{" "}
        <span className={s.subtitle}>{t("contact.subtitle")}</span>{" "}
      </h2>

      <h3 className={s.contactText}>{t("contact.text")}</h3>

      <address className={s.contactAddress}>
        <ul className={s.contactsList}>
          <li className={s.contactsItem}>
            <a href="tel:+380958065331" className={s.contactLink}>
              +380 (95) 806-53-31
            </a>
          </li>

          <li className={s.contactsItem}>
            <a href="tel:+380954728246" className={s.contactLink}>
              +380 (95) 472-82-46
            </a>
          </li>

          <li className={s.contactsItem}>
            <a
              href="mailto:slavutych.zakarpattia@gmail.com"
              className={s.contactLink}
            >
              slavutych.zakarpattia@gmail.com
            </a>
          </li>
        </ul>
      </address>
      <h2 className={s.title}>
        {t("contact.route")}{" "}
        <span className={s.subroute}>{t("contact.subroute")} </span>{" "}
      </h2>

      <ul className={s.infoList}>
        <li className={s.infoItem}>
          <h3 className={s.infoTitle}>{t("contact.automobile")}</h3>
          <p className={s.infoText}>{t("contact.autoDescr")}</p>
        </li>

        <li className={s.infoItem}>
          <h3 className={s.infoTitle}>{t("contact.bus")}</h3>
          <p className={s.infoText}>{t("contact.busDescr")}</p>
        </li>

        <li className={s.infoItem}>
          <h3 className={s.infoTitle}>{t("contact.train")}</h3>
          <p className={s.infoText}>{t("contact.trainDescr")}</p>
        </li>

        <li className={s.infoItem}>
          <h3 className={s.infoTitle}>{t("contact.address")}</h3>
          <p className={s.infoText}>{t("contact.addressText")} </p>
        </li>
      </ul>

      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://maps.app.goo.gl/nSNpHwuNArrThXgw9"
        className={s.linkMap}
      >
        {t("contact.map")} <PiMapPinAreaFill className={s.icon} />
      </a>
    </div>
  );
};

export default Contact;
