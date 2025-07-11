import { useTranslation } from "react-i18next";

import { useState } from "react";

import { IoLanguage } from "react-icons/io5";

import s from "./LanguageSwitcher.module.css";

import clsx from "clsx";

const LanguageSwitcher = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { i18n } = useTranslation();

  return (
    <>
      <div className={s.containerDesk}>
        <button
          className={clsx(s.btnDesk, i18n.language === "ua" && s.active)}
          onClick={() => i18n.changeLanguage("ua")}
        >
          UA
        </button>
        <button
          className={clsx(s.btnDesk, i18n.language === "ru" && s.active)}
          onClick={() => i18n.changeLanguage("ru")}
        >
          RU
        </button>
        <button
          className={clsx(s.btnDesk, i18n.language === "en" && s.active)}
          onClick={() => i18n.changeLanguage("en")}
        >
          EN
        </button>
      </div>

      <div className={s.modalMenu}>
        <button onClick={handleOpenMenu} className={s.openBtn}>
          <IoLanguage className={s.icon} />
        </button>
        <div className={`${s.containerMob} ${menuOpen ? s.open : ""}`}>
          <button
            className={s.btn}
            onClick={() => {
              i18n.changeLanguage("ua");
              setMenuOpen(false);
            }}
          >
            UA
          </button>
          <button
            className={s.btn}
            onClick={() => {
              i18n.changeLanguage("ru");
              setMenuOpen(false);
            }}
          >
            RU
          </button>
          <button
            className={s.btn}
            onClick={() => {
              i18n.changeLanguage("en");
              setMenuOpen(false);
            }}
          >
            EN
          </button>
        </div>
      </div>
    </>
  );
};

export default LanguageSwitcher;
