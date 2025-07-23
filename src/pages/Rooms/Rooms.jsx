import s from "./Rooms.module.css";

import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { NavLink } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const imagesOne = [
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753109913/IMG_3136_kk4byv_sqyrya.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753109913/IMG_3135_ahioxf_jtb13t.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753109913/IMG_3134_blc8ln_lfwono.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753109914/IMG_3137_affljm_uhpoj4.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753109915/IMG_3139_hqjdtc_ix4wiu.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753109916/IMG_3140_yivcpf_cnsoic.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753109918/IMG_3142_b4njeg_bjgjxm.jpg",
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

const imagesEight = [
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753255450/IMG_0204_izmng2.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753255454/IMG_0209_xu2zho.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753255453/IMG_0208_mv6ybw.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753255451/IMG_0205_xgwrrl.jpg",
  "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753255452/IMG_0206_xhjvr1.jpg",
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
          <h5 className={s.priceTitle}>{t("rooms.price")}</h5>
          <div className={s.tableContainer}>
            <table border={1} className={s.table}>
              <thead>
                <tr>
                  <th>{t("table.seasons")} </th>
                  <th>{t("table.for")} </th>
                  <th>{t("table.tree")} </th>
                  <th>{t("table.two")} </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01.06-31.10</td>
                  <td>2'860.00₴</td>
                  <td>2'565.00₴</td>
                  <td>2'455.00₴</td>
                </tr>
                <tr>
                  <td>01.11-24.12</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>25.12-10.01</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>11.01-30.04</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1440: { slidesPerView: 3 },
              }}
            >
              {imagesOne.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt={t("rooms.alt")} />
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
          <h5 className={s.priceTitle}>{t("rooms.price")}</h5>
          <div className={s.tableContainer}>
            <table border={1} className={s.table}>
              <thead>
                <tr>
                  <th>{t("table.seasons")} </th>
                  <th>{t("table.tree")} </th>
                  <th>{t("table.two")} </th>
                  <th>{t("table.one")} </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01.06-31.10</td>
                  <td>2'385.00₴</td>
                  <td>2'755.00₴</td>
                  <td>2'165.00₴</td>
                </tr>
                <tr>
                  <td>01.11-24.12</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>25.12-10.01</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>11.01-30.04</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1440: { slidesPerView: 3 },
              }}
            >
              {imagesTwo.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt={t("rooms.alt")} />
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
          <h5 className={s.priceTitle}>{t("rooms.price")}</h5>
          <div className={s.tableContainer}>
            <table border={1} className={s.table}>
              <thead>
                <tr>
                  <th>{t("table.seasons")} </th>
                  <th></th>
                  <th>{t("table.two")} </th>
                  <th>{t("table.one")} </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01.06-31.10</td>
                  <td></td>
                  <td>1'870.00₴</td>
                  <td>1'760.00₴</td>
                </tr>
                <tr>
                  <td>01.11-24.12</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>25.12-10.01</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>11.01-30.04</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1440: { slidesPerView: 3 },
              }}
            >
              {imagesTree.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt={t("rooms.alt")} />
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
          <h5 className={s.priceTitle}>{t("rooms.price")}</h5>
          <div className={s.tableContainer}>
            <table border={1} className={s.table}>
              <thead>
                <tr>
                  <th>{t("table.seasons")} </th>
                  <th></th>
                  <th>{t("table.two")} </th>
                  <th>{t("table.one")} </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01.06-31.10</td>
                  <td></td>
                  <td>1'820.00₴</td>
                  <td>1'710.00₴</td>
                </tr>
                <tr>
                  <td>01.11-24.12</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>25.12-10.01</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>11.01-30.04</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1440: { slidesPerView: 3 },
              }}
            >
              {imagesFor.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt={t("rooms.alt")} />
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
          <h5 className={s.priceTitle}>{t("rooms.price")}</h5>
          <div className={s.tableContainer}>
            <table border={1} className={s.table}>
              <thead>
                <tr>
                  <th>{t("table.seasons")} </th>
                  <th>{t("table.for")} </th>
                  <th>{t("table.tree")} </th>
                  <th>{t("table.two")} </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01.06-31.10</td>
                  <td>2'980.00₴</td>
                  <td>2'870.00₴</td>
                  <td>2'760.00₴</td>
                </tr>
                <tr>
                  <td>01.11-24.12</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>25.12-10.01</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>11.01-30.04</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1440: { slidesPerView: 3 },
              }}
            >
              {imagesFive.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt={t("rooms.alt")} />
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
          <h5 className={s.priceTitle}>{t("rooms.price")}</h5>
          <div className={s.tableContainer}>
            <table border={1} className={s.table}>
              <thead>
                <tr>
                  <th>{t("table.seasons")} </th>
                  <th>{t("table.for")} </th>
                  <th>{t("table.tree")} </th>
                  <th>{t("table.two")} </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01.06-31.10</td>
                  <td>2'765.00₴</td>
                  <td>2'505.00₴</td>
                  <td>2'395.00₴</td>
                </tr>
                <tr>
                  <td>01.11-24.12</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>25.12-10.01</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>11.01-30.04</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1440: { slidesPerView: 3 },
              }}
            >
              {imagesSix.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt={t("rooms.alt")} />
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
          <h5 className={s.priceTitle}>{t("rooms.price")}</h5>
          <div className={s.tableContainer}>
            <table border={1} className={s.table}>
              <thead>
                <tr>
                  <th>{t("table.seasons")} </th>
                  <th>{t("table.tree")} </th>
                  <th>{t("table.two")} </th>
                  <th>{t("table.one")} </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01.06-31.10</td>
                  <td>2'315.00₴</td>
                  <td>2'205.00₴</td>
                  <td>2'095.00₴</td>
                </tr>
                <tr>
                  <td>01.11-24.12</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>25.12-10.01</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>11.01-30.04</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1440: { slidesPerView: 3 },
              }}
            >
              {imagesSeven.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt={t("rooms.alt")} />
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
          <h5 className={s.priceTitle}>{t("rooms.price")}</h5>
          <div className={s.tableContainer}>
            <table border={1} className={s.table}>
              <thead>
                <tr>
                  <th>{t("table.seasons")} </th>
                  <th></th>
                  <th>{t("table.two")} </th>
                  <th>{t("table.one")} </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01.06-31.10</td>
                  <td></td>
                  <td>1'720.00₴</td>
                  <td>1'610.00₴</td>
                </tr>
                <tr>
                  <td>01.11-24.12</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>25.12-10.01</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>11.01-30.04</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1440: { slidesPerView: 3 },
              }}
            >
              {imagesEight.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt={t("rooms.alt")} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={s.descrLink}>
            <p className={s.itemText}>{t("rooms.description-economy-9")}</p>
            <NavLink className={s.link} to={"/contact"}>
              {t("rooms.link")}
            </NavLink>
          </div>
        </li>
        <li className={s.item}>
          <h4 className={s.itemTitle}>{t("rooms.standart-9-a")}</h4>
          <h5 className={s.priceTitle}>{t("rooms.price")}</h5>
          <div className={s.tableContainer}>
            <table border={1} className={s.table}>
              <thead>
                <tr>
                  <th>{t("table.seasons")} </th>
                  <th></th>
                  <th>{t("table.two")} </th>
                  <th>{t("table.one")} </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01.06-31.10</td>
                  <td></td>
                  <td>1'820.00₴</td>
                  <td>1'710.00₴</td>
                </tr>
                <tr>
                  <td>01.11-24.12</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>25.12-10.01</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>11.01-30.04</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1440: { slidesPerView: 3 },
              }}
            >
              {imagesNine.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt={t("rooms.alt")} />
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
          <h5 className={s.priceTitle}>{t("rooms.price")}</h5>
          <div className={s.tableContainer}>
            <table border={1} className={s.table}>
              <thead>
                <tr>
                  <th>{t("table.seasons")} </th>
                  <th></th>
                  <th>{t("table.two")} </th>
                  <th>{t("table.one")} </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01.06-31.10</td>
                  <td></td>
                  <td>1'770.00₴</td>
                  <td>1'660.00₴</td>
                </tr>
                <tr>
                  <td>01.11-24.12</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>25.12-10.01</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>11.01-30.04</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={s.contImg}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1440: { slidesPerView: 3 },
              }}
            >
              {imagesTen.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt={t("rooms.alt")} />
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
                1440: { slidesPerView: 3 },
              }}
            >
              {imagesDining.map((src, i) => (
                <SwiperSlide key={i}>
                  <img className={s.imgRoom} src={src} alt={t("rooms.alt")} />
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
