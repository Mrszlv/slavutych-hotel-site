import { useTranslation } from "react-i18next";
import iziToast from "izitoast";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import s from "./BookingForm.module.css";

const BookingForm = () => {
  const { t } = useTranslation();
  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_tglaf38", "template_gtmgywa", form.current, {
        publicKey: "5HJiJxVQzx39CK539",
      })
      .then(
        () => {
          iziToast.success({
            title: t("footer.iziToastSuccessTitle"),
            message: t("footer.iziToastSuccessMessage"),
            position: "topCenter",
          });
          form.current.reset();
        },
        (error) => {
          iziToast.error({
            title: t("footer.iziToastErrorTitle"),
            message: t("footer.iziToastErrorMessage"),
            position: "topCenter",
          });
          console.error("Email error:", error.text);
        }
      );
  };

  return (
    <div className={s.container}>
      <h3 className={s.title}>
        {t("bookingForm.title")}
        <span className={s.subtitle}>{t("bookingForm.subtitle")}</span>
      </h3>

      <div className={s.bookingFormCont}>
        <img
          className={s.img}
          src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1753534599/20250726_155304_1_azlbul.jpg"
          alt="Booking"
          loading="lazy"
        />

        <form ref={form} className={s.form} onSubmit={onSubmit}>
          <input
            className={s.input}
            type="text"
            name="user_name"
            placeholder={t("bookingForm.name")}
            required
          />

          <input
            className={s.input}
            type="tel"
            name="user_number"
            placeholder={t("bookingForm.number")}
            required
          />

          <input
            className={s.input}
            type="number"
            name="user_people"
            placeholder={t("bookingForm.people")}
            required
          />

          <input className={s.input} type="date" name="user_checkIn" required />

          <input
            className={s.input}
            type="date"
            name="user_checkOut"
            required
          />

          <button className={s.btn} type="submit">
            {t("bookingForm.book")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
