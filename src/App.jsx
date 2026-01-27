import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Booking from './pages/Booking';
import GenericPage from './pages/GenericPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ReviewsPage from './pages/ReviewsPage';
import OurProcessPage from './pages/OurProcessPage';
import WaxRemovalPage from './pages/WaxRemovalPage';
import SameDayPage from './pages/SameDayPage';
import EarIrrigationPage from './pages/EarIrrigationPage';
import HearingHealthCheckPage from './pages/HearingHealthCheckPage';
import ChildrensEarCarePage from './pages/ChildrensEarCarePage';
import HomeVisitsPage from './pages/HomeVisitsPage';
import ContactPage from './pages/ContactPage';

function App() {
  console.log("App rendering");
  return (
    <Router>
      <ScrollToTop />
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 font-sans text-gray-900">
      <Header />
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Booking />} />
            
            {/* Main Pages */}
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Dedicated Service Pages */}
            <Route path="/wax-removal" element={<WaxRemovalPage />} />
            <Route path="/our-process" element={<OurProcessPage />} />
            <Route path="/same-day-appointments" element={<SameDayPage />} />
            <Route path="/ear-irrigation" element={<EarIrrigationPage />} />
            <Route path="/hearing-health-check" element={<HearingHealthCheckPage />} />
            <Route path="/childrens-ear-care" element={<ChildrensEarCarePage />} />
            <Route path="/home-visits" element={<HomeVisitsPage />} />
            
            {/* Legal / Other Generic Pages */}
            <Route path="/privacy-policy" element={<GenericPage title="Privacy Policy" />} />
            <Route path="/terms-of-service" element={<GenericPage title="Terms of Service" />} />
            <Route path="/cookie-policy" element={<GenericPage title="Cookie Policy" />} />
            <Route path="/finance-terms" element={<GenericPage title="Finance Terms" />} />
          </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
