import s from "./Hero.module.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className={`${s.container} ${s.containerImg}`}>
      <h1 className={s.title}>
        {t("hero.title")}{" "}
        <span className={s.subtitle}>{t("hero.subtitle")}</span>
      </h1>
      <img
        className={s.imgOne}
        src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1738856952/IMG_6422_es3peo.jpg"
        alt=""
      />
      <img
        className={s.imgTwo}
        src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249381/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-4_sirg77.jpg"
        alt=""
      />
      <img
        className={s.imgThree}
        src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249379/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-1_t5bkc1.jpg"
        alt=""
      />
    </div>
  );
};

export default Hero;
