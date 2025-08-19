import s from "./Gallery.module.css";

import { useTranslation } from "react-i18next";

import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Video from "yet-another-react-lightbox/plugins/video";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const Gallery = () => {
  const [open, setOpen] = useState(false);

  const [index, setIndex] = useState(0);

  const { t } = useTranslation();

  const images = [
    {
      src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099426/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-3_yzcbm0_mjishp.jpg",
    },
    {
      src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099426/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-4_sirg77_pu0rga.jpg",
    },
    {
      src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099425/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-2_fqrmyc_vn3o10.jpg",
    },
    {
      src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099424/IMG_6476_1_rb0liy_lhpj1j.jpg",
    },
    {
      src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099424/20250711_185434_wq3kty_kzl17m.jpg",
    },
    {
      src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099424/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-1_t5bkc1_z8seeo.jpg",
    },
    {
      src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099421/20250711_185441_wrbjaj_p7aef7.jpg",
    },
    {
      src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099421/20250711_185420_faklha_iiztsf.jpg",
    },
    {
      src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099420/20250707_143004_xla84h_it8vjd.jpg",
    },
    {
      src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099419/20250617_143612_gmendp_suieph.jpg",
    },
    {
      src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099419/20250617_143449_siwbub_dm7mhh.jpg",
    },
    {
      src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099423/20250711_185850_o2jw6x_vlutdo.jpg",
    },
    {
      src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099422/20250711_185747_hjqgcp_vyri3r.jpg",
    },
    {
      src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099422/20250711_185732_tcarzh_e1spqt.jpg",
    },
    {
      src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099421/20250711_185724_xibnbi_x4khbl.jpg",
    },
    {
      src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099424/IMG_2479_vatdmv_vcsbsj.jpg",
    },
    {
      src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099642/IMG_1431_g7pnld_pukcio.jpg",
    },
    {
      src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753099420/20250711_185333_kfszbx_w6zulf.jpg",
    },
    {
      type: "video",
      poster:
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753278494/Video.mp4_winkhd.png",
      width: 1280,
      height: 720,
      sources: [
        {
          src: "https://res.cloudinary.com/ddqtzq55a/video/upload/v1753278097/20250723_153939_1_rsuxie.mp4",
          type: "video/mp4",
        },
      ],
    },
    {
      type: "video",
      poster:
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753278494/Video.mp4_winkhd.png",
      width: 1280,
      height: 720,
      sources: [
        {
          src: "https://res.cloudinary.com/ddqtzq55a/video/upload/v1753269881/20250723_140734_1_1_bkjkka.mp4",
          type: "video/mp4",
        },
      ],
    },
    {
      type: "video",
      poster:
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1753278494/Video.mp4_winkhd.png",
      width: 1280,
      height: 720,
      sources: [
        {
          src: "https://res.cloudinary.com/ddqtzq55a/video/upload/v1753271631/20250723_144625_1_btygvb.mp4",
          type: "video/mp4",
        },
      ],
    },
  ];

  return (
    <div className={s.container}>
      <h2 className={s.title}>{t("gallery.title")}</h2>
      <p className={s.text}>{t("gallery.description")}</p>

      <div className={s.contImg}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.poster || img.src}
            alt={t("gallery.alt")}
            onClick={() => {
              setIndex(idx);
              setOpen(true);
            }}
            className={s.img}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
        plugins={[Zoom, Captions, Video]}
      />

      <div className={s.regionCont}>
        <h2 className={s.regionTitle}>
          {t("gallery.title-2")}
          <span className={s.regionSubtitle}>{t("gallery.subtitle-2")}</span>
        </h2>
        <ul className={s.regionList}>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Vodopad_Shypit_1200.jpg"
              alt={t("gallery.shypit")}
              className={s.regionImg}
              loading="lazy"
              decoding="async"
            />
            <p className={s.regionText}>{t("gallery.region-text-1")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Ozero_Synevir_1200.jpg"
              alt={t("gallery.sinevir")}
              className={s.regionImg}
              loading="lazy"
              decoding="async"
            />
            <p className={s.regionText}>{t("gallery.region-text-2")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Selo_Kolochava_1200.jpg"
              alt={t("gallery.kolochava")}
              className={s.regionImg}
              loading="lazy"
              decoding="async"
            />
            <p className={s.regionText}>{t("gallery.region-text-3")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Zamok_Shernborna_1200.jpg"
              alt={t("gallery.kastle")}
              className={s.regionImg}
              loading="lazy"
              decoding="async"
            />
            <p className={s.regionText}>{t("gallery.region-text-4")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Zamok_Sent_Mikloch_1200.jpg"
              alt={t("gallery.miklosh")}
              className={s.regionImg}
              loading="lazy"
              decoding="async"
            />
            <p className={s.regionText}>{t("gallery.region-text-5")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Ferma_oleney_1200.jpg"
              alt={t("gallery.farm")}
              className={s.regionImg}
              loading="lazy"
              decoding="async"
            />
            <p className={s.regionText}>{t("gallery.region-text-6")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Zamok_Palanok_1200.jpg"
              alt={t("gallery.palanok")}
              className={s.regionImg}
              loading="lazy"
              decoding="async"
            />
            <p className={s.regionText}>{t("gallery.region-text-7")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Lozopletenie_Zakarpatie_1200.jpg"
              alt={t("gallery.iza")}
              className={s.regionImg}
              loading="lazy"
              decoding="async"
            />
            <p className={s.regionText}>{t("gallery.region-text-8")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Syrovarnya_Zakarpatie.jpg"
              alt="Селиська сироварня в Карпатах"
              className={s.regionImg}
              loading="lazy"
              decoding="async"
            />
            <p className={s.regionText}>{t("gallery.region-text-9")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Ferma_strausov.jpg"
              alt="Страусина ферма в Карпатах"
              className={s.regionImg}
              loading="lazy"
              decoding="async"
            />
            <p className={s.regionText}>{t("gallery.region-text-10")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Dolina_narcyssov_1200.jpg"
              alt="Долина нарцисів у Карпатах"
              className={s.regionImg}
              loading="lazy"
              decoding="async"
            />
            <p className={s.regionText}>{t("gallery.region-text-11")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Termalnie_basseyny.jpg"
              alt="Термальні басейни Закарпаття"
              className={s.regionImg}
              loading="lazy"
              decoding="async"
            />
            <p className={s.regionText}>{t("gallery.region-text-12")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Zamok_Ujgorod_1200.jpg"
              alt="Ужгородський замок"
              className={s.regionImg}
              loading="lazy"
              decoding="async"
            />
            <p className={s.regionText}>{t("gallery.region-text-13")}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Gallery;
