import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Departments from './pages/Departments';
import Doctors from './pages/Doctors';
import DoctorDetail from './pages/DoctorDetail';
import HealthPackages from './pages/HealthPackages';
import PatientInfo from './pages/PatientInfo';
import Contact from './pages/Contact';
import ScrollToTop from "./components/ScrollToTop";


function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
  <ScrollToTop />   {/* 👈 ADD THIS LINE */}

 <div className="bg-gradient-to-b from-orange-100 via-orange-50 to-sky-100 min-h-screen pt-2 overflow-x-hidden">
    <Navbar isScrolled={isScrolled} />

    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctor/:id" element={<DoctorDetail />} />
        <Route path="/packages" element={<HealthPackages />} />
        <Route path="/patient-info" element={<PatientInfo />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </AnimatePresence>

    <Footer />
  </div>
</Router>
  );
}

export default App;
