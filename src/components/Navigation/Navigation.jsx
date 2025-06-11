import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

import s from "./Navigation.module.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { t } = useTranslation();
  return (
    <>
      <nav className={s.navDesctop}>
        <NavLink className={s.linkDesk} to="/">
          {t("nav.home")}
        </NavLink>
        <NavLink className={s.linkDesk} to="/rooms">
          {t("nav.rooms")}
        </NavLink>
        <NavLink className={s.linkDesk} to="/gallery">
          {t("nav.gallery")}
        </NavLink>
        <NavLink className={s.linkDesk} to="/reviews">
          {t("nav.reviews")}
        </NavLink>
        <NavLink className={s.linkDesk} to="/contact">
          {t("nav.contact")}
        </NavLink>
      </nav>
      <button onClick={handleOpenMenu} className={s.openBtn}>
        <IoIosMenu />
      </button>
      {menuOpen && (
        <nav className={s.navMobile}>
          <button onClick={handleOpenMenu} className={s.closeBtn}>
            <IoMdClose />
          </button>
          <NavLink className={s.linkMob} onClick={handleOpenMenu} to="/">
            {t("nav.home")}
          </NavLink>
          <NavLink className={s.linkMob} onClick={handleOpenMenu} to="/rooms">
            {t("nav.rooms")}
          </NavLink>
          <NavLink className={s.linkMob} onClick={handleOpenMenu} to="/gallery">
            {t("nav.gallery")}
          </NavLink>
          <NavLink className={s.linkMob} onClick={handleOpenMenu} to="/reviews">
            {t("nav.reviews")}
          </NavLink>
          <NavLink className={s.linkMob} onClick={handleOpenMenu} to="/contact">
            {t("nav.contact")}
          </NavLink>
        </nav>
      )}
    </>
  );
};

export default Navigation;
