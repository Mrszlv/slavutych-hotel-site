import s from "./Footer.module.css";

import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import emailjs from "@emailjs/browser";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { SlCallIn } from "react-icons/sl";
import { LiaFacebook } from "react-icons/lia";
import { TbBrandBooking } from "react-icons/tb";

const Footer = () => {
  const form = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_tglaf38", "template_aju5n74", form.current, {
        publicKey: "5HJiJxVQzx39CK539",
      })
      .then(
        () => {
          iziToast.success({
            title: `${t("footer.iziToastSuccessTitle")}`,
            message: `${t("footer.iziToastSuccessMessage")}`,
            position: "topCenter",
          });
          form.current.reset();
        },
        (error) => {
          iziToast.error({
            title: `${t("footer.iziToastErrorTitle")}`,
            message: `${t("footer.iziToasrErrorMessage")}`,
            position: "topCenter",
          });
          console.error("Error sending email:", error.text);
        }
      );
  };

  return (
    <footer className={s.footer}>
      <img
        src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1738248462/My%20Brand/Preview_jomntt.jpg"
        className={s.logo}
        alt="logo"
        loading="lazy"
        decoding="async"
      />
      {/* <p className={s.text}>
        &copy; {new Date().getFullYear()} {t("footer.text")}
        <span className={s.span}>{t("footer.subtext")}</span>
      </p> */}
      <div className={s.formCont}>
        <p className={s.formTitle} onClick={toggleAccordion}>
          {isOpen ? `${t("footer.formClose")}` : `${t("footer.formOpen")}`}{" "}
          <SlCallIn className={s.icon} />
        </p>
        <div className={`${s.accordionContent} ${isOpen ? s.open : ""}`}>
          <form ref={form} onSubmit={sendEmail} className={s.form}>
            <input
              type="text"
              name="user_name"
              placeholder={t("footer.inputName")}
              className={s.input}
              required
            />

            <input
              type="tel"
              name="user_phone"
              placeholder={t("footer.inputNumber")}
              className={s.input}
              required
            />

            <textarea
              name="user_message"
              placeholder={t("footer.inputMessage")}
              className={`${s.input} ${s.textarea}`}
            />
            <input
              type="submit"
              value={t("footer.inputSend")}
              className={s.btn}
            />
          </form>
        </div>
      </div>
      <NavLink to={"/privacy"} className={s.privacyLink}>
        {t("privacy.title")}
      </NavLink>
      <div className={s.footerLinksCont}>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className={s.footerLink}
          href="https://www.facebook.com/search/top?q=%D1%81%D0%BB%D0%B0%D0%B2%D1%83%D1%82%D0%B8%D1%87-%D0%B7%D0%B0%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%82%D1%8F"
        >
          <LiaFacebook className={s.footerIcon} />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className={s.footerLink}
          href="https://www.booking.com/hotel/ua/slavutych-zakarpattya.ru.html?aid=356980&label=gog235jc-1FCAso6QFCFXNsYXZ1dHljaC16YWthcnBhdHR5YUgpWANo6QGIAQGYASG4ARfIAQzYAQHoAQH4AQyIAgGoAgO4ArXYk70GwAIB0gIkODRmYjVhNjMtOWUwNy00ZDgwLThjOWQtYmIyODFjN2UxZGQy2AIG4AIB&sid=1f2681111bfaea4f9a53423d6dc960f3&dest_id=-1051227&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1738908808&srpvid=db402bc0597d011b&type=total&ucfs=1&"
        >
          <TbBrandBooking className={s.footerIcon} />
        </a>
      </div>
      {/* <NavLink to={"/privacy"} className={s.privacyLink}>
        {t("privacy.title")}
      </NavLink> */}
    </footer>
  );
};
export default Footer;
