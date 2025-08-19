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
          type="button"
          className={clsx(s.btnDesk, i18n.language === "ua" && s.active)}
          onClick={() => i18n.changeLanguage("ua")}
          aria-label="language selection ua"
        >
          UA
        </button>
        <button
          className={clsx(s.btnDesk, i18n.language === "ru" && s.active)}
          onClick={() => i18n.changeLanguage("ru")}
          aria-label="language selection ru"
        >
          RU
        </button>
        <button
          className={clsx(s.btnDesk, i18n.language === "en" && s.active)}
          onClick={() => i18n.changeLanguage("en")}
          aria-label="language selection en"
        >
          EN
        </button>
      </div>

      <div className={s.modalMenu}>
        <button
          onClick={handleOpenMenu}
          className={s.openBtn}
          aria-label="language selection"
          aria-controls="langMenu"
          aria-expanded={handleOpenMenu}
        >
          <IoLanguage className={s.icon} />
        </button>
        <div
          id="langMenu"
          className={`${s.containerMob} ${menuOpen ? s.open : ""}`}
        >
          <button
            aria-label="language selection ua"
            className={s.btn}
            onClick={() => {
              i18n.changeLanguage("ua");
              setMenuOpen(false);
            }}
          >
            UA
          </button>
          <button
            aria-label="language selection ru"
            className={s.btn}
            onClick={() => {
              i18n.changeLanguage("ru");
              setMenuOpen(false);
            }}
          >
            RU
          </button>
          <button
            aria-label="language selection en"
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
