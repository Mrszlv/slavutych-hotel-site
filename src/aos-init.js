import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function useAOS() {
  useEffect(() => {
    AOS.init({
      // глобальні опції
      duration: 700, // ms
      easing: "ease-out", // cubic-bezier також ок
      offset: 80, // відступ до тригера
      once: true, // анімувати лише один раз
      mirror: false, // не анімувати назад при прокрутці вгору
      anchorPlacement: "top-bottom", // де має бути видно елемент для тригера
      // disable: "mobile",  // можна вимкнути для мобільних, якщо треба
    });

    // невелике оновлення після mount — інколи корисно
    setTimeout(() => AOS.refresh(), 100);

    return () => {
      // при розмонтуванні нічого не обов’язково
    };
  }, []);
}
