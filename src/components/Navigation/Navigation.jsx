import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

import s from "./Navigation.module.css";

import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.linkDesk, isActive && s.active);
};

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { t } = useTranslation();
  return (
    <>
      <nav className={s.navDesctop}>
        <NavLink className={buildLinkClass} to="/">
          {t("nav.home")}
        </NavLink>
        <NavLink className={buildLinkClass} to="/rooms">
          {t("nav.rooms")}
        </NavLink>
        <NavLink className={buildLinkClass} to="/gallery">
          {t("nav.gallery")}
        </NavLink>
        <NavLink className={buildLinkClass} to="/reviews">
          {t("nav.reviews")}
        </NavLink>
        <NavLink className={buildLinkClass} to="/contact">
          {t("nav.contact")}
        </NavLink>
      </nav>

      <button onClick={handleOpenMenu} className={s.openBtn}>
        <IoIosMenu />
      </button>
      <nav className={`${s.navMobile} ${menuOpen ? s.navMobileOpen : ""}`}>
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
    </>
  );
};

export default Navigation;
