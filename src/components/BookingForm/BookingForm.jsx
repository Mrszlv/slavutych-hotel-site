import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import s from "./BookingForm.module.css";

const BookingForm = () => {
  const { t } = useTranslation();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert(t("Success"));
  };
  return (
    <>
      <h3 className={s.title}>
        {t("bookingForm.title")}
        <span className={s.subtitle}>{t("bookingForm.subtitle")}</span>
      </h3>
      <div className={s.bookingFormCont}>
        <img
          className={s.img}
          src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1738924893/IMG_2479_vatdmv.jpg"
          alt=""
        />

        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            className={s.input}
            {...register("name")}
            placeholder={t("bookingForm.name")}
            required
          />
          <input
            className={s.input}
            type="number"
            {...register("number")}
            placeholder={t("bookingForm.number")}
            required
          />
          <input
            className={s.input}
            type="number"
            {...register("people")}
            placeholder={t("bookingForm.people")}
            required
          />
          <input
            className={s.input}
            type="date"
            {...register("checkIn")}
            required
          />
          <input
            className={s.input}
            type="date"
            {...register("checkOut")}
            required
          />
          <button className={s.btn} type="submit">
            {t("bookingForm.book")}
          </button>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
