import { useTranslation } from "react-i18next";

import { NavLink } from "react-router-dom";

import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className={s.notCont}>
      <img
        className={s.img}
        src="https://www.dpmarketingcommunications.com/wp-content/uploads/2016/11/404-Page-Featured-Image.png"
        alt="404"
        loading="lazy"
      />
      <p className={s.text}>{t("not-found.not-page")}</p>
      <NavLink className={s.link} to={"/"}>
        {t("not-found.link")}
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
