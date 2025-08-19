import s from "./Hero.module.css";
import { useTranslation } from "react-i18next";

const cldT = (url, tr) => url.replace("/upload/", `/upload/${tr}/`);
const srcset = (url, widths) =>
  widths
    .map(
      (w) => `${cldT(url, `f_auto,q_auto,dpr_auto,w_${w},c_fill,g_auto`)} ${w}w`
    )
    .join(", ");

const WIDTHS = [400, 600, 800];

const URL1 =
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099424/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-1_t5bkc1_z8seeo.jpg";
const URL2 =
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099424/20250711_185434_wq3kty_kzl17m.jpg";
const URL3 =
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099421/20250711_185420_faklha_iiztsf.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={s.container}>
      <picture className={s.heroMedia}>
        <source
          srcSet="/images/hero-480.avif 480w,
            /images/hero-768.avif 768w,
            /images/hero-1280.avif 1280w"
          type="image/avif"
        />
        <source
          srcSet="/images/hero-480.webp 480w,
            /images/hero-768.webp 768w,
            /images/hero-1280.webp 1280w"
          type="image/webp"
        />
        <img
          className={s.heroImg}
          src="/images/hero-768.jpg"
          alt={t("hero.alt")}
          width="768"
          height="432"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          sizes="(max-width: 480px) 100vw,
           (max-width: 768px) 100vw,
           1280px"
        />
      </picture>

      {/* Overlay */}
      <div className={s.overlay} aria-hidden="true" />

      <h1 className={s.title}>
        {t("hero.title")} <br />
        <span className={s.subtitle}>{t("hero.subtitle")}</span>
      </h1>

      {/* Додаткові зображення */}
      <div className={s.imgCont}>
        <img
          className={s.imgOne}
          src={cldT(URL1, "f_auto,q_auto,dpr_auto,w_600,c_fill,g_auto")}
          srcSet={srcset(URL1, WIDTHS)}
          sizes="(min-width:1440px) 350px, (min-width:768px) 250px, 40vw"
          alt={t("hero.alt")}
          width="600"
          height="400"
          loading="lazy"
          decoding="async"
        />

        <img
          className={s.imgTwo}
          src={cldT(URL2, "f_auto,q_auto,dpr_auto,w_600,c_fill,g_auto")}
          srcSet={srcset(URL2, WIDTHS)}
          sizes="(min-width:1440px) 350px, (min-width:768px) 250px, 40vw"
          alt={t("hero.alt")}
          width="600"
          height="400"
          loading="lazy"
          decoding="async"
        />

        <img
          className={s.imgThree}
          src={cldT(URL3, "f_auto,q_auto,dpr_auto,w_600,c_fill,g_auto")}
          srcSet={srcset(URL3, WIDTHS)}
          sizes="(min-width:1440px) 350px, (min-width:768px) 250px, 40vw"
          alt={t("hero.alt")}
          width="600"
          height="400"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default Hero;
