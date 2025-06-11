import { useState } from "react";
import { useTranslation } from "react-i18next";

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
    <div>
      <h2>{t("nav.reviews")}</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your review"
        />
        <button type="submit">{t("submit")}</button>
      </form>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
