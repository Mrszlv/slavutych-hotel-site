import { useState, useEffect } from "react";

import { LiaAngleUpSolid } from "react-icons/lia";

import s from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${s.scroll} ${isVisible ? s.visible : ""}`}
      onClick={scrollToTop}
    >
      <LiaAngleUpSolid className={s.icon} />
    </button>
  );
};

export default ScrollToTop;
