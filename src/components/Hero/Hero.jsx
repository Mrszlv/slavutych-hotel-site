import s from "./Hero.module.css";

import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className={`${s.container} ${s.containerImg}`}>
      <h1 className={s.title}>
        {t("hero.title")} <br />
        <span className={s.subtitle}>{t("hero.subtitle")}</span>
      </h1>
      <div className={s.imgCont}>
        <img
          className={s.imgOne}
          src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099424/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-1_t5bkc1_z8seeo.jpg"
          alt={t("hero.alt")}
        />
        <img
          className={s.imgTwo}
          src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099426/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-4_sirg77_pu0rga.jpg"
          alt={t("hero.alt")}
        />
        <img
          className={s.imgThree}
          src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099421/20250711_185420_faklha_iiztsf.jpg"
          alt={t("hero.alt")}
        />
      </div>
    </div>
  );
};

export default Hero;
