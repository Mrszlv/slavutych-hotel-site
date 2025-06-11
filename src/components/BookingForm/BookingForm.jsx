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
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={s.input}
        {...register("name")}
        placeholder={t("name")}
        required
      />
      <input
        className={s.input}
        type="number"
        {...register("number")}
        placeholder={t("number")}
        required
      />
      <input
        className={s.input}
        type="number"
        {...register("people")}
        placeholder={t("people")}
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
        {t("book")}
      </button>
    </form>
  );
};

export default BookingForm;
