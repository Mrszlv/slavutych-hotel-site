import { useTranslation } from "react-i18next";
import { useState } from "react";
import { IoLanguage } from "react-icons/io5";

import s from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { i18n } = useTranslation();

  return (
    <>
      <div className={s.containerDesk}>
        <button className={s.btnDesk} onClick={() => i18n.changeLanguage("ua")}>
          UA
        </button>
        <button className={s.btnDesk} onClick={() => i18n.changeLanguage("ru")}>
          RU
        </button>
        <button className={s.btnDesk} onClick={() => i18n.changeLanguage("en")}>
          EN
        </button>
      </div>
      <div className={s.modalMenu}>
        <button onClick={handleOpenMenu} className={s.openBtn}>
          <IoLanguage className={s.icon} />
        </button>
        {menuOpen && (
          <div className={s.containerMob}>
            <button className={s.btn} onClick={() => i18n.changeLanguage("ua")}>
              UA
            </button>
            <button className={s.btn} onClick={() => i18n.changeLanguage("ru")}>
              RU
            </button>
            <button className={s.btn} onClick={() => i18n.changeLanguage("en")}>
              EN
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageSwitcher;
