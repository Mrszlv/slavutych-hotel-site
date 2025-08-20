import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Rooms = lazy(() => import("./pages/Rooms/Rooms"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Reviews = lazy(() => import("./pages/Reviews/Reviews"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const PrivacyPolicy = lazy(() =>
  import("./components/PrivacyPolicy/PrivacyPolicy")
);

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Suspense>
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
          <ScrollToTop />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
