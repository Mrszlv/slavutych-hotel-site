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

const imagesFive = [
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751720313/20250705_144035_tywmz8.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751720314/20250705_144048_kcye2l.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751720316/20250705_144058_gzodgm.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751720318/20250705_144134_bqn18p.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751720319/20250705_144148_gscx0c.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751720320/20250705_144113_ka2edd.jpg",
];

const imagesSix = [
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751720367/20250705_144409_samzby.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751720368/20250705_144419_sqvyym.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751720368/20250705_144430_t9bzdl.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751720369/20250705_144443_j88qxr.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751720371/20250705_144458_kzdm8a.jpg",
];

const imagesSeven = [
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751720420/20250705_144245_sa1vhz.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751720431/20250705_144252_s5lx5y.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751720432/20250705_144301_yagcil.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751720428/20250705_144333_crecam.jpg",
];

const imagesNine = [
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751714060/IMG_4136_z10gjs.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751714060/IMG_4138_zjevid.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751714061/IMG_4140_euuppt.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751714061/IMG_4142_rgc4r2.jpg",
];

const imagesTen = [
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751713985/IMG_4127_twdyvt.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751713986/IMG_4125_wmwdec.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751713986/IMG_4133_ptmsm5.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751713986/IMG_4129_u0dv6m.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751713986/IMG_4146_udlzw6.jpg",
];

const imagesDining = [
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751722770/20250705_162620_bgi2zm.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751722765/20250705_162645_nhfhyy.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751722764/20250705_162634_wtyybz.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751722768/20250705_162704_s15jol.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751722770/20250705_162737_reqyd9.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751722764/IMG_20250705_163102_858_yiscpf.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751723797/IMG_20250705_165414_570_kaz1zd.jpg",
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
          <h5 className={s.priceTitle}>
            {t("rooms.price")} <span className={s.priceSpan}>2'860.00₴</span>
          </h5>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
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
            <NavLink className={s.link} to={"/contact"}>
              {t("rooms.link")}
            </NavLink>
          </div>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.junior-suite-1")}</h4>
          <h5 className={s.priceTitle}>
            {t("rooms.price")} <span className={s.priceSpan}>2'385.00₴</span>
          </h5>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
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
            <NavLink className={s.link} to={"/contact"}>
              {t("rooms.link")}
            </NavLink>
          </div>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.standart-1-1")}</h4>
          <h5 className={s.priceTitle}>
            {t("rooms.price")} <span className={s.priceSpan}>1'870.00₴</span>
          </h5>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
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
            <NavLink className={s.link} to={"/contact"}>
              {t("rooms.link")}
            </NavLink>
          </div>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.economy-1-1")}</h4>
          <h5 className={s.priceTitle}>
            {t("rooms.price")} <span className={s.priceSpan}>1'820.00₴</span>
          </h5>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
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
            <NavLink className={s.link} to={"/contact"}>
              {t("rooms.link")}
            </NavLink>
          </div>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.luxe-3-9")}</h4>
          <h5 className={s.priceTitle}>
            {t("rooms.price")} <span className={s.priceSpan}>2'980.00₴</span>
          </h5>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {imagesFive.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt="Room image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={s.descrLink}>
            <p className={s.itemText}>{t("rooms.description-luxe-3-9")}</p>
            <NavLink className={s.link} to={"/contact"}>
              {t("rooms.link")}
            </NavLink>
          </div>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.luxe-2-9")}</h4>
          <h5 className={s.priceTitle}>
            {t("rooms.price")} <span className={s.priceSpan}>2'765.00₴</span>
          </h5>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {imagesSix.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt="Room image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={s.descrLink}>
            <p className={s.itemText}>{t("rooms.description-luxe-2-9")}</p>
            <NavLink className={s.link} to={"/contact"}>
              {t("rooms.link")}
            </NavLink>
          </div>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.junior-suite-9")}</h4>
          <h5 className={s.priceTitle}>
            {t("rooms.price")} <span className={s.priceSpan}>2'315.00₴</span>
          </h5>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {imagesSeven.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt="Room image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={s.descrLink}>
            <p className={s.itemText}>
              {t("rooms.description-junior-suite-9")}
            </p>
            <NavLink className={s.link} to={"/contact"}>
              {t("rooms.link")}
            </NavLink>
          </div>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.economy-9")}</h4>
          <h5 className={s.priceTitle}>
            {t("rooms.price")} <span className={s.priceSpan}>1'720.00₴</span>
          </h5>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.standart-9-a")}</h4>
          <h5 className={s.priceTitle}>
            {t("rooms.price")} <span className={s.priceSpan}>1'820.00₴</span>
          </h5>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {imagesNine.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt="Room image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={s.descrLink}>
            <p className={s.itemText}>{t("rooms.description-standart-9-a")}</p>
            <NavLink className={s.link} to={"/contact"}>
              {t("rooms.link")}
            </NavLink>
          </div>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.economy-9-a")}</h4>
          <h5 className={s.priceTitle}>
            {t("rooms.price")} <span className={s.priceSpan}>1'770.00₴</span>
          </h5>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {imagesTen.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt="Room image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={s.descrLink}>
            <p className={s.itemText}>{t("rooms.description-economy-9-a")}</p>
            <NavLink className={s.link} to={"contact"}>
              {t("rooms.link")}
            </NavLink>
          </div>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.dining")}</h4>
          <h5 className={s.priceTitle}>
            {t("rooms.price-dining")}{" "}
            <span className={s.priceSpan}>490.00₴</span>
          </h5>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {imagesDining.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt="Room image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={s.descrLink}>
            <p className={s.itemText}>{t("rooms.dining-descr")}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Rooms;
