import s from "./Footer.module.css";

import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";

import emailjs from "@emailjs/browser";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { SlCallIn } from "react-icons/sl";

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
      <p className={s.text}>
        &copy; {new Date().getFullYear()} {t("footer.text")}
      </p>
      <div className={s.formCont}>
        <h5 className={s.formTitle} onClick={toggleAccordion}>
          {isOpen ? `${t("footer.formClose")}` : `${t("footer.formOpen")}`}{" "}
          <SlCallIn className={s.icon} />
        </h5>

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
    </footer>
  );
};
export default Footer;
