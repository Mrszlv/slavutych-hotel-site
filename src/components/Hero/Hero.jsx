import s from "./Hero.module.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={s.container}>
      <picture className={s.heroMedia}>
        {/* 1) AVIF */}
        <source
          type="image/avif"
          srcSet="/images/hero-768.avif 768w,
                  /images/hero-1280.avif 1280w,
                  /images/hero-1920.avif 1920w"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1280px) 100vw,
                 100vw"
        />

        {/* 2) WebP */}
        <source
          type="image/webp"
          srcSet="/images/hero-768.webp 768w,
                  /images/hero-1280.webp 1280w,
                  /images/hero-1920.webp 1920w"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1280px) 100vw,
                 100vw"
        />

        {/* 3) Fallback JPEG */}
        <img
          className={s.heroImg}
          src="/images/hero-1280.jpg"
          srcSet="/images/hero-768.jpg 768w,
                  /images/hero-1280.jpg 1280w,
                  /images/hero-1920.jpg 1920w"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1280px) 100vw,
                 100vw"
          alt={t("hero.alt")}
          width="1280"
          height="720"
          loading="eager"
          fetchPriority="high"
          decoding="async"
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
          src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099424/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-1_t5bkc1_z8seeo.jpg"
          alt={t("hero.alt")}
          loading="lazy"
          decoding="async"
          width="600"
          height="400"
        />
        <img
          className={s.imgTwo}
          src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099424/20250711_185434_wq3kty_kzl17m.jpg"
          alt={t("hero.alt")}
          loading="lazy"
          decoding="async"
          width="600"
          height="400"
        />
        <img
          className={s.imgThree}
          src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099421/20250711_185420_faklha_iiztsf.jpg"
          alt={t("hero.alt")}
          loading="lazy"
          decoding="async"
          width="600"
          height="400"
        />
      </div>
    </section>
  );
};

export default Hero;
