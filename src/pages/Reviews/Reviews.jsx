import { useState } from "react";
import { useTranslation } from "react-i18next";
import s from "./Reviews.module.css";

const Reviews = () => {
  const { t } = useTranslation();

  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem("reviews");
    return savedReviews ? JSON.parse(savedReviews) : [];
  });
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { id: Date.now(), text };
    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem("reviews", JSON.stringify(updated));
    setText("");
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>{t("nav.reviews")}</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <textarea
          className={s.textarea}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t("reviews.placeholder")}
        />
        <button className={s.btn} type="submit">
          {t("submit")}
        </button>
      </form>
      <ul className={s.list}>
        {reviews.map((review) => (
          <li className={s.item} key={review.id}>
            {review.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
