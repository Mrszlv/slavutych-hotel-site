import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { IoLanguage } from "react-icons/io5";
import clsx from "clsx";
import s from "./LanguageSwitcher.module.css";

const STORAGE_KEY = "i18nextLng";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved !== i18n.language) {
      i18n.changeLanguage(saved);
    }
  }, [i18n]);

  const setLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  useEffect(() => {
    if (!menuOpen) return;

    const onDocClick = (e) => {
      if (!menuRef.current) return;
      if (
        !menuRef.current.contains(e.target) &&
        !buttonRef.current?.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    const onEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [menuOpen]);

  const handleOpenMenu = () => setMenuOpen((v) => !v);

  return (
    <>
      <div className={s.containerDesk} data-aos="fade-right">
        <button
          type="button"
          className={clsx(s.btnDesk, i18n.language === "ua" && s.active)}
          onClick={() => setLang("ua")}
          aria-label="Вибір мови українська"
        >
          UA
        </button>

        <button
          type="button"
          className={clsx(s.btnDesk, i18n.language === "ru" && s.active)}
          onClick={() => setLang("ru")}
          aria-label="Вибір мови російська"
        >
          RU
        </button>

        <button
          type="button"
          className={clsx(s.btnDesk, i18n.language === "en" && s.active)}
          onClick={() => setLang("en")}
          aria-label="Вибір мови англійська"
        >
          EN
        </button>
      </div>

      <div className={s.modalMenu} data-aos="fade-right">
        <button
          type="button"
          ref={buttonRef}
          onClick={handleOpenMenu}
          className={s.openBtn}
          aria-label="Вибір мови"
          aria-controls="langMenu"
          aria-expanded={menuOpen}
        >
          <IoLanguage className={s.icon} />
        </button>

        <div
          id="langMenu"
          ref={menuRef}
          role="menu"
          className={clsx(s.containerMob, menuOpen && s.open)}
        >
          <button
            type="button"
            role="menuitemradio"
            aria-checked={i18n.language === "ua"}
            aria-label="Українська"
            className={clsx(s.btn, i18n.language === "ua" && s.active)}
            onClick={() => {
              setLang("ua");
              setMenuOpen(false);
              buttonRef.current?.focus();
            }}
          >
            UA
          </button>

          <button
            type="button"
            role="menuitemradio"
            aria-checked={i18n.language === "ru"}
            aria-label="Російська"
            className={clsx(s.btn, i18n.language === "ru" && s.active)}
            onClick={() => {
              setLang("ru");
              setMenuOpen(false);
              buttonRef.current?.focus();
            }}
          >
            RU
          </button>

          <button
            type="button"
            role="menuitemradio"
            aria-checked={i18n.language === "en"}
            aria-label="Англійська"
            className={clsx(s.btn, i18n.language === "en" && s.active)}
            onClick={() => {
              setLang("en");
              setMenuOpen(false);
              buttonRef.current?.focus();
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
