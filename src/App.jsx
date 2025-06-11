import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import Rooms from "./pages/Rooms/Rooms";
import Gallery from "./pages/Gallery/Gallery";
import Reviews from "./pages/Reviews/Reviews";
import Contact from "./pages/Contact/Contact";

import s from "./App.module.css";
import Hero from "./components/hero/hero";

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <div>
        <header className={s.header}>
          <div className={s.imgCont}>
            <h2 className={s.title}>
              {t("title")}
              <span className={s.subtitle}>{t("subtitle")}</span>
            </h2>
          </div>
          <LanguageSwitcher />
          <Navigation />
        </header>
        <main>
          <Hero />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
