import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

import clsx from "clsx";

import s from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => clsx(s.linkDesk, isActive && s.active);

const Navigation = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => setMenuOpen((v) => !v);
  const handleCloseMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onEsc = (e) => e.key === "Escape" && handleCloseMenu();
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [menuOpen]);

  return (
    <>
      <nav className={s.navDesktop} data-aos="fade-left">
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

      <button
        data-aos="fade-left"
        type="button"
        onClick={handleOpenMenu}
        className={s.openBtn}
        aria-label="open menu"
        aria-controls="navMenu"
        aria-expanded={menuOpen}
      >
        <IoIosMenu />
      </button>

      <div
        className={clsx(s.backdrop, menuOpen && s.backdropOpen)}
        onClick={handleCloseMenu}
        aria-hidden={!menuOpen}
      />

      <nav
        id="navMenu"
        className={clsx(s.navMobile, menuOpen && s.navMobileOpen)}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={handleCloseMenu}
          className={s.closeBtn}
          aria-label="close menu"
        >
          <IoMdClose className={s.ioClose} />
        </button>

        <NavLink className={s.linkMob} onClick={handleCloseMenu} to="/">
          {t("nav.home")}
        </NavLink>

        <NavLink className={s.linkMob} onClick={handleCloseMenu} to="/rooms">
          {t("nav.rooms")}
        </NavLink>

        <NavLink className={s.linkMob} onClick={handleCloseMenu} to="/gallery">
          {t("nav.gallery")}
        </NavLink>

        <NavLink className={s.linkMob} onClick={handleCloseMenu} to="/reviews">
          {t("nav.reviews")}
        </NavLink>

        <NavLink className={s.linkMob} onClick={handleCloseMenu} to="/contact">
          {t("nav.contact")}
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
