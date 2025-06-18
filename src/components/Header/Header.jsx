import { useTranslation } from "react-i18next";

import s from "./Header.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className={s.header}>
      <div className={s.imgCont}>
        <img
          src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1738248462/My%20Brand/Preview_jomntt.jpg"
          alt="logo"
          className={s.logo}
        />
        <h2 className={s.title}>
          {t("title")}
          <span className={s.subtitle}>{t("subtitle")}</span>
        </h2>
      </div>
      <LanguageSwitcher />
      <Navigation />
    </header>
  );
};

export default Header;
