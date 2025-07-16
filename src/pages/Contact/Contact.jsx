import s from "./Contact.module.css";

import { useTranslation } from "react-i18next";

import { PiMapPinFill } from "react-icons/pi";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className={`${s.container} ${s.photoCont}`}>
      <h2 className={s.title}>
        {t("contact.title")}{" "}
        <span className={s.subtitle}>{t("contact.subtitle")}</span>{" "}
      </h2>
      <h3 className={s.contactsText}>{t("contact.text")}</h3>
      <address className={s.contactsAddress}>
        <ul className={s.contactsList}>
          <li className={s.contactsItem}>
            <a href="tel:+380958065331" className={s.addText}>
              Vodafone: +380 (95) 806-53-31
            </a>
          </li>
          <li className={s.contactsItem}>
            <a href="tel:+380954728246" className={s.addText}>
              Kyivstar: +380 (95) 472-82-46
            </a>
          </li>
          <li className={s.contactsItem}>
            <a
              href="mailto:slavutych.zakarpattia@gmail.com"
              className={s.addText}
            >
              Email: slavutych.zakarpattia@gmail.com
            </a>
          </li>
          {/* <li className={s.contactsItem}>
            <p className={s.contactsText}>{t("contact.manager")}</p>
            <a href="tel:+380951379410" className={s.addText}>
              <span className={s.span}>Vodafone:</span> +380 (50) 681-54-36
            </a>
          </li>
          <li className={s.contactsItem}>
            <a href="tel:+380680660303" className={s.addText}>
              <span className={s.span}>Kyivstar:</span> +380 (97) 338-58-94
            </a>
          </li> */}
        </ul>
      </address>
      <h2 className={s.title}>
        {t("contact.route")}{" "}
        <span className={s.subroute}>{t("contact.subroute")} </span>{" "}
      </h2>
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
