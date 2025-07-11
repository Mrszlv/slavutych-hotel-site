import s from "./Gallery.module.css";

import { useTranslation } from "react-i18next";

import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const images = [
  {
    src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1750260476/20250617_143453_ul3ixa.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1750260476/20250617_143612_gmendp.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1739107757/IMG_6476_1_rb0liy.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249381/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-2_fqrmyc.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249379/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-1_t5bkc1.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751889014/20250707_143004_xla84h.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738925137/IMG_1420_btmbth.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738924893/IMG_2479_vatdmv.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1751889313/IMG_1431_g7pnld.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1752249789/20250711_185333_kfszbx.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1752249787/20250711_185420_faklha.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1752249786/20250711_185434_wq3kty.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1752249787/20250711_185441_wrbjaj.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1752249787/20250711_185420_faklha.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1752249790/20250711_185850_o2jw6x.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1752249787/20250711_185747_hjqgcp.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1752249789/20250711_185732_tcarzh.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddqtzq55a/image/upload/v1752249790/20250711_185724_xibnbi.jpg",
  },
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <h2 className={s.title}>{t("gallery.title")}</h2>
      <p className={s.text}>{t("gallery.description")}</p>

      <div className={s.contImg}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt=""
            onClick={() => {
              setIndex(idx);
              setOpen(true);
            }}
            className={s.img}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
        plugins={[Zoom, Captions]}
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
              alt="Водоспад Шипіт"
              className={s.regionImg}
            />
            <p className={s.regionText}>{t("gallery.region-text-1")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Ozero_Synevir_1200.jpg"
              alt="Озеро Синевир"
              className={s.regionImg}
            />
            <p className={s.regionText}>{t("gallery.region-text-2")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Selo_Kolochava_1200.jpg"
              alt="Село десяти музеїв Колочава"
              className={s.regionImg}
            />
            <p className={s.regionText}>{t("gallery.region-text-3")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Zamok_Shernborna_1200.jpg"
              alt="Замок графа Шенборна"
              className={s.regionImg}
            />
            <p className={s.regionText}>{t("gallery.region-text-4")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Zamok_Sent_Mikloch_1200.jpg"
              alt="Замок Сент-Міклош"
              className={s.regionImg}
            />
            <p className={s.regionText}>{t("gallery.region-text-5")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Ferma_oleney_1200.jpg"
              alt="Оленяча ферма"
              className={s.regionImg}
            />
            <p className={s.regionText}>{t("gallery.region-text-6")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Zamok_Palanok_1200.jpg"
              alt="Мукачівський замок Паланок"
              className={s.regionImg}
            />
            <p className={s.regionText}>{t("gallery.region-text-7")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Lozopletenie_Zakarpatie_1200.jpg"
              alt="Лозоплетіння в с.Іза"
              className={s.regionImg}
            />
            <p className={s.regionText}>{t("gallery.region-text-8")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Syrovarnya_Zakarpatie.jpg"
              alt="Селиська сироварня в Карпатах"
              className={s.regionImg}
            />
            <p className={s.regionText}>{t("gallery.region-text-9")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Ferma_strausov.jpg"
              alt="Страусина ферма в Карпатах"
              className={s.regionImg}
            />
            <p className={s.regionText}>{t("gallery.region-text-10")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Dolina_narcyssov_1200.jpg"
              alt="Долина нарцисів у Карпатах"
              className={s.regionImg}
            />
            <p className={s.regionText}>{t("gallery.region-text-11")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Termalnie_basseyny.jpg"
              alt="Термальні басейни Закарпаття"
              className={s.regionImg}
            />
            <p className={s.regionText}>{t("gallery.region-text-12")}</p>
          </li>
          <li className={s.regionItem}>
            <img
              src="https://kiyavia.com/files/travel-provider/zakarpattya/mesta/Zamok_Ujgorod_1200.jpg"
              alt="Ужгородський замок"
              className={s.regionImg}
            />
            <p className={s.regionText}>{t("gallery.region-text-13")}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Gallery;
