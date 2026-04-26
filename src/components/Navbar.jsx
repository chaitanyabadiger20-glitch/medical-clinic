import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Departments', path: '/departments' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Packages', path: '/packages' },
    { name: 'Patient Info', path: '/patient-info' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 z-50 bg-sky-300/60 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* 🔥 PREMIUM LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative w-11 h-11 flex items-center justify-center">

              {/* Gold Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-xl shadow-md"></div>

              {/* Medical Cross */}
              <div className="w-5 h-5 bg-white rounded-sm z-10 relative flex items-center justify-center">
                <div className="w-3 h-1 bg-amber-600 absolute"></div>
                <div className="w-1 h-3 bg-amber-600 absolute"></div>
              </div>

              {/* Crown */}
              <div className="absolute -top-2 text-yellow-300 text-xs">👑</div>
            </div>

            <div>
              <h1 className="text-xl font-bold text-navy-950 hidden sm:block tracking-wide">
                Arogya <span className="text-yellow-600">Royale</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 text-navy-950 font-medium hover:text-yellow-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-navy-950 hover:text-yellow-600 transition-colors"
            >
              <Phone size={26} />
              <span className="text-sm font-medium">+91 98765 43210</span>
            </a>

            <Link to="/contact" className="btn-primary text-sm">
              Book Now
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden pb-6 border-t border-slate-200"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-navy-950 hover:bg-slate-100 rounded-lg"
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-4 px-4">
              <Link
                to="/contact"
                className="btn-primary text-sm block text-center"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}