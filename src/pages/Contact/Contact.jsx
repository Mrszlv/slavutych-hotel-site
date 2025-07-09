import s from "./Contact.module.css";

import { useTranslation } from "react-i18next";

import { PiMapPinFill } from "react-icons/pi";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className={`${s.container} ${s.photoCont}`}>
      <h2 className={s.title}>{t("contact.title")}</h2>
      <address className={s.contactsAddress}>
        <ul className={s.contactsList}>
          <li className={s.contactsItem}>
            <p className={s.contactsText}>{t("contact.text")}</p>
            <a href="tel:+380951379410" className={s.addText}>
              <span className={s.span}>Vodafone:</span> +380 (95) 137-94-10
            </a>
          </li>
          <li className={s.contactsItem}>
            <a href="tel:+380680660303" className={s.addText}>
              <span className={s.span}>Kyivstar:</span> +380 (68) 066-03-03
            </a>
          </li>
          <li className={s.contactsItem}>
            <a
              href="mailto:slavutych.zakarpattia@gmail.com"
              className={s.addText}
            >
              <span className={s.span}>Email:</span>{" "}
              slavutych.zakarpattia@gmail.com
            </a>
          </li>
          <li className={s.contactsItem}>
            <p className={s.contactsText}>{t("contact.manager")}</p>
            <a href="tel:+380951379410" className={s.addText}>
              <span className={s.span}>Vodafone:</span> +380 (50) 681-54-36
            </a>
          </li>
          <li className={s.contactsItem}>
            <a href="tel:+380680660303" className={s.addText}>
              <span className={s.span}>Kyivstar:</span> +380 (97) 338-58-94
            </a>
          </li>
        </ul>
      </address>
      <h2 className={s.title}>{t("contact.route")}</h2>
      <h3 className={s.title}>{t("contact.automobile")}</h3>
      <p className={s.text}>{t("contact.autoDescr")}</p>
      <h3 className={s.title}>{t("contact.bus")}</h3>
      <p className={s.text}>{t("contact.busDescr")}</p>
      <h3 className={s.title}>{t("contact.train")}</h3>
      <p className={s.text}>{t("contact.trainDescr")}</p>
      <h3 className={s.title}>{t("contact.address")}</h3>
      <p className={s.text}>{t("contact.addressText")} </p>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://maps.app.goo.gl/nSNpHwuNArrThXgw9"
        className={s.link}
      >
        {t("contact.map")} <PiMapPinFill className={s.icon} />
      </a>
    </div>
  );
};

export default Contact;
