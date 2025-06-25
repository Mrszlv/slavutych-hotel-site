import s from "./Rooms.module.css";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const imagesOne = [
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249275/IMG_3138_ezbnyk.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249276/IMG_3139_hqjdtc.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249276/IMG_3140_yivcpf.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249275/IMG_3136_kk4byv.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249276/IMG_3143_ptsgkr.jpg",
];

const imagesTwo = [
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249431/IMG_3130_adnmvh.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249432/IMG_3131_f2ieye.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249433/IMG_3132_k4bpyj.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249430/IMG_3129_lor4y7.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249435/IMG_3133_sjuez2.jpg",
];

const imagesTree = [
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249493/IMG_3125_gcdj2b.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249494/IMG_3126_bumjur.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249490/IMG_3123_l01h5d.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249490/IMG_3122_jrne2t.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249495/IMG_3127_ahu42y.jpg",
];

const imagesFor = [
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249532/IMG_3115_rgp3a3.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249530/IMG_3113_alswpi.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249535/IMG_3117_hophkn.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249533/IMG_3116_umtecu.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249537/IMG_3119_xybw93.jpg",
];

const Rooms = () => {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <h2 className={s.title}>
        {t("rooms.title")}{" "}
        <span className={s.subtitle}>{t("rooms.subtitle")}</span>
      </h2>
      <ul className={s.list}>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.luxe-2-1")}</h4>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {imagesOne.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt="Room image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={s.descrLink}>
            <p className={s.itemText}>{t("rooms.description-luxe-2-1")}</p>
            <NavLink className={s.link} to={"/"}>
              {t("rooms.link")}
            </NavLink>
          </div>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.junior-suite-1")}</h4>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {imagesTwo.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt="Room image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={s.descrLink}>
            <p className={s.itemText}>
              {t("rooms.description-junior-suite-1")}
            </p>
            <NavLink className={s.link} to={"/"}>
              {t("rooms.link")}
            </NavLink>
          </div>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.standart-1-1")}</h4>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {imagesTree.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt="Room image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={s.descrLink}>
            <p className={s.itemText}>{t("rooms.description-standart-1-1")}</p>
            <NavLink className={s.link} to={"/"}>
              {t("rooms.link")}
            </NavLink>
          </div>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.economy-1-1")}</h4>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {imagesFor.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt="Room image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={s.descrLink}>
            <p className={s.itemText}>{t("rooms.description-economy-1-1")}</p>
            <NavLink className={s.link} to={"/"}>
              {t("rooms.link")}
            </NavLink>
          </div>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.luxe-3-9")}</h4>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.luxe-2-9")}</h4>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.junior-suite-9")}</h4>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.economy-9")}</h4>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.standart-9-a")}</h4>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.economy-9-a")}</h4>
        </li>
      </ul>
    </div>
  );
};

export default Rooms;
