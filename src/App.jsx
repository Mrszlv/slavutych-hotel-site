import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Rooms from "./pages/Rooms/Rooms";
import Gallery from "./pages/Gallery/Gallery";
import Reviews from "./pages/Reviews/Reviews";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ScrollToTop />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
