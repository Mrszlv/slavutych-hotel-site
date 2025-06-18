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
          src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1750260476/20250617_143612_gmendp.jpg"
          alt=""
        />
        <img
          className={s.imgTwo}
          src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1750260476/20250617_143449_siwbub.jpg"
          alt=""
        />
        <img
          className={s.imgThree}
          src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1750260476/20250617_143453_ul3ixa.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
