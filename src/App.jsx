import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import { useAOS } from "./aos-init";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import RouteTracker from "./components/RouteTracker/RouteTracker";

// lazy pages
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Rooms = lazy(() => import("./pages/Rooms/Rooms"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Reviews = lazy(() => import("./pages/Reviews/Reviews"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const PrivacyPolicy = lazy(() =>
  import("./components/PrivacyPolicy/PrivacyPolicy")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function Fallback() {
  const { t } = useTranslation();
  return (
    <div
      style={{
        minHeight: "40vh",
        display: "grid",
        placeItems: "center",
        opacity: 0.7,
      }}
    >
      {t("loading")}
    </div>
  );
}

function RouteAOSRefresher() {
  const { pathname } = useLocation();
  useEffect(() => {
    AOS.refreshHard();
    const t = setTimeout(() => AOS.refresh(), 50);
    return () => clearTimeout(t);
  }, [pathname]);
  return null;
}

export default function App() {
  useAOS();

  return (
    <Router>
      <Header />
      <main>
        <ScrollToTop />
        <RouteTracker />
        <RouteAOSRefresher />

        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}
