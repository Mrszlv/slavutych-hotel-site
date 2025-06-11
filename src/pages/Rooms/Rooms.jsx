import s from "./Rooms.module.css";
import { useTranslation } from "react-i18next";

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
          <h4>{t("rooms.luxe-2")}</h4>
        </li>
        <li className={s.item}>
          <h4>{t("rooms.luxe-1")}</h4>
        </li>
        <li className={s.item}>
          <h4>{t("rooms.junior-suite")}</h4>
        </li>
        <li className={s.item}>
          <h4>{t("rooms.standart")}</h4>
        </li>
        <li className={s.item}>
          <h4>{t("rooms.economy")}</h4>
        </li>
      </ul>
    </div>
  );
};

export default Rooms;
