import { useTranslation } from "react-i18next";

import s from "./Services.module.css";

import { IoWifi } from "react-icons/io5";
import { TbAirConditioning } from "react-icons/tb";
import { GiCampingTent } from "react-icons/gi";
import { MdOutdoorGrill } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { LuBus } from "react-icons/lu";
import { TbParkingCircle } from "react-icons/tb";
import { IoRestaurant } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <h2 className={s.title}>
        {t("services.title")}{" "}
        <span className={s.subtitle}>{t("services.subtitle")} </span>
      </h2>

      <p className={s.text}>{t("services.text")}</p>

      <ul className={s.list}>
        <li className={s.item}>
          <IoWifi className={s.itemIcon} />{" "}
          <p className={s.itemText}>{t("services.wifi")} </p>
        </li>

        <li className={s.item}>
          <TbAirConditioning className={s.itemIcon} />{" "}
          <p className={s.itemText}>{t("services.air")} </p>
        </li>

        <li className={s.item}>
          <GiCampingTent className={s.itemIcon} />{" "}
          <p className={s.itemText}>{t("services.camping")} </p>
        </li>

        <li className={s.item}>
          <MdOutdoorGrill className={s.itemIcon} />{" "}
          <p className={s.itemText}>{t("services.grill")} </p>
        </li>

        <li className={s.item}>
          <MdOutlinePool className={s.itemIcon} />{" "}
          <p className={s.itemText}>{t("services.pool")} </p>
        </li>

        <li className={s.item}>
          <LuBus className={s.itemIcon} />{" "}
          <p className={s.itemText}>{t("services.bus")} </p>
        </li>

        <li className={s.item}>
          <TbParkingCircle className={s.itemIcon} />{" "}
          <p className={s.itemText}>{t("services.parking")} </p>
        </li>

        <li className={s.item}>
          <IoRestaurant className={s.itemIcon} />{" "}
          <p className={s.itemText}>{t("services.rest")} </p>
        </li>

        <li className={s.item}>
          <FaCartShopping className={s.itemIcon} />{" "}
          <p className={s.itemText}>{t("services.shop")} </p>
        </li>
      </ul>
    </div>
  );
};

export default Services;
