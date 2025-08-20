import { useTranslation } from "react-i18next";
import iziToast from "izitoast";
import emailjs from "@emailjs/browser";

import { useRef } from "react";

import s from "./BookingForm.module.css";

export default function BookingForm() {
  const { t } = useTranslation();
  const form = useRef(null);

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
          form.current?.reset();
        },

        (error) => {
          iziToast.error({
            title: t("footer.iziToastErrorTitle"),
            message: t("footer.iziToastErrorMessage"),
            position: "topCenter",
          });
          console.error("Email error:", error?.text);
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
          alt={t("bookingForm.imageAlt", { defaultValue: "Форма бронювання" })}
          loading="lazy"
          decoding="async"
          width="600"
          height="400"
        />

        <form
          id="booking-form"
          ref={form}
          className={s.form}
          onSubmit={onSubmit}
          noValidate
        >
          <fieldset className={s.fieldset}>
            <legend className={s.legend}>{t("bookingForm.legend")}</legend>

            <div className={s.field}>
              <label htmlFor="bf-name">{t("bookingForm.name")}</label>
              <input
                id="bf-name"
                className={s.input}
                type="text"
                name="user_name"
                placeholder={t("bookingForm.enter-name")}
                autoComplete="name"
                required
              />
            </div>

            <div className={s.field}>
              <label htmlFor="bf-phone">{t("bookingForm.number")}</label>
              <input
                id="bf-phone"
                className={s.input}
                type="tel"
                name="user_number"
                placeholder={t("bookingForm.enter-number")}
                autoComplete="tel"
                inputMode="tel"
                pattern="[\d+()\-\s]{6,}"
                aria-describedby="bf-phone-hint"
                required
              />
              <small id="bf-phone-hint" className="sr-only">
                {t("bookingForm.phoneHint")}
              </small>
            </div>

            <div className={s.field}>
              <label htmlFor="bf-people">{t("bookingForm.people")}</label>
              <input
                id="bf-people"
                className={s.input}
                type="number"
                name="user_people"
                placeholder={t("bookingForm.enter-people")}
                inputMode="numeric"
                min={1}
                max={20}
                step={1}
                required
              />
            </div>

            <div className={s.field}>
              <label htmlFor="bf-checkin" className={s.label}>
                {t("bookingForm.check-in")}
              </label>
              <input
                id="bf-checkin"
                className={s.input}
                type="date"
                name="user_checkIn"
                autoComplete="off"
                inputMode="numeric"
                required
              />
            </div>

            <div className={s.field}>
              <label htmlFor="bf-checkout" className={s.label}>
                {t("bookingForm.check-out")}
              </label>
              <input
                id="bf-checkout"
                className={s.input}
                type="date"
                name="user_checkOut"
                autoComplete="off"
                inputMode="numeric"
                required
              />
            </div>

            <button className={s.btn} type="submit">
              {t("bookingForm.book")}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
