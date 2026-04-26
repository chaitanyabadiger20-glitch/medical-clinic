import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Phone, MapPin, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Departments', path: '/departments' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Packages', path: '/packages' },
  ];

  const departments = [
    'Cardiology',
    'Orthopedics',
    'Dermatology',
    'Neurology',
    'Pediatrics',
    'Dentistry'
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <footer className="bg-navy-950 text-white pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">

              {/* PREMIUM LOGO */}
              <div className="relative w-11 h-11 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-xl shadow-md"></div>

                {/* Cross */}
                <div className="w-5 h-5 bg-white rounded-sm z-10 relative flex items-center justify-center">
                  <div className="w-3 h-1 bg-amber-600 absolute"></div>
                  <div className="w-1 h-3 bg-amber-600 absolute"></div>
                </div>

                {/* Crown */}
                <div className="absolute -top-2 text-yellow-300 text-xs">👑</div>
              </div>

              <h3 className="text-2xl font-bold tracking-wide">
                Arogya <span className="text-yellow-500">Royale</span>
              </h3>
            </div>

            <p className="text-slate-400 mb-6">
              Premium healthcare excellence with compassionate care and cutting-edge medical technology.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { Icon: Facebook, url: "https://facebook.com" },
                { Icon: Instagram, url: "https://instagram.com" },
                { Icon: Linkedin, url: "https://linkedin.com" },
                { Icon: Twitter, url: "https://twitter.com" },
              ].map(({ Icon, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-yellow-500 hover:text-navy-950 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-yellow-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Departments */}
<motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
  <h4 className="text-lg font-bold mb-6">Departments</h4>

  <ul className="space-y-3">
    {departments.map((dept) => (
      <li key={dept}>
        <Link
          to={`/departments#${dept.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-slate-400 hover:text-yellow-500 transition-colors"
        >
          {dept}
        </Link>
      </li>
    ))}
  </ul>
</motion.div>

          {/* Contact Info */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">

              <div className="flex gap-3">
                <Phone className="text-yellow-500 mt-1" size={20} />
                <div>
  <p className="text-slate-400">Phone</p>

  <div className="flex flex-col">
    <a
      href="tel:+919876543210"
      className="text-white font-medium hover:text-yellow-500 transition-colors"
    >
      Call: +91 98765 43210
    </a>

    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-green-400 hover:text-green-300 transition-colors"
    >
      Chat on WhatsApp
    </a>
  </div>
</div>
              </div>

              <div className="flex gap-3">
                <Mail className="text-yellow-500 mt-1" size={20} />
                <div>
                  <p className="text-slate-400">Email</p>
                  <a href="mailto:info@arogyaroyale.com" className="text-white font-medium hover:text-yellow-500 transition-colors">
                    info@arogyaroyale.com
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-yellow-500 mt-1" size={20} />
                <div>
                  <p className="text-slate-400">Address</p>

                  {/* Correct JSX comment */}
                  {/* <p className="text-white font-medium">123 Royal Medical Plaza, Bangalore</p> */}

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=123+Royal+Medical+Plaza+Bangalore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-yellow-500 transition-colors"
                  >
                    123 Royal Medical Plaza, Bangalore
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="text-yellow-500 mt-1" size={20} />
                <div>
                  <p className="text-slate-400">Hours</p>
                  <p className="text-white font-medium">Mon-Sat: 9 AM - 9 PM</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-8"></div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm"
        >
          <p>&copy; 2024 Arogya Royale. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              Sitemap
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}