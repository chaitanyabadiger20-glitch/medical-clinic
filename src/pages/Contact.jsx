// import React from 'react';
import { motion } from 'framer-motion';
import AppointmentForm from '../components/AppointmentForm';
import { Phone, Mail, MapPin, Clock, AlertCircle, Heart } from 'lucide-react';
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';


export default function Contact() {
  const location = useLocation();
const [selectedPackage, setSelectedPackage] = useState(
  location.state?.selectedPackage || null
);
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center overflow-hidden bg-light">
        <div className="absolute inset-0 z-0">
          <img
            src="https://ehealthcaresolutions.com/wp-content/uploads/2026/01/hcp-digital-behavior-2026.png"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-100 max-w-2xl mx-auto">
              Book your appointment or contact us with any questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-red-500 rounded-3xl p-8 text-white shadow-luxury flex items-center gap-6"
        >
          <AlertCircle size={40} className="flex-shrink-0" />
          <div className="flex-grow">
            <h3 className="text-2xl font-bold mb-2">Medical Emergency?</h3>
            <p className="text-red-100 mb-4">Our 24/7 emergency care team is ready to help</p>
          </div>
          <motion.a
            href="tel:+919876543210"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gold flex-shrink-0 border border-black"
          >
            Call Emergency
          </motion.a>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-navy-950 mb-8">Contact Information</h2>

              {/* Phone */}
              <motion.div
                className="flex gap-4 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-full bg-royal-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-royal-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Phone</p>
                  <a href="tel:+919876543210" className="text-lg font-bold text-navy-950 hover:text-royal-600 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                className="flex gap-4 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-emerald-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Email</p>
                  <a href="mailto:info@arogyaroyale.com" className="text-lg font-bold text-navy-950 hover:text-royal-600 transition-colors">
                    info@arogyaroyale.com
                  </a>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                className="flex gap-4 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-gold" size={24} />
                </div>
                <div>
  <p className="text-sm text-slate-600 mb-1">Address</p>
  <a
    href="https://www.google.com/maps/search/?api=1&query=123+Royal+Medical+Plaza+Bangalore+560001"
    target="_blank"
    rel="noopener noreferrer"
    className="text-lg font-bold text-navy-950 hover:text-gold transition-colors"
  >
    123 Royal Medical Plaza<br />
    Bangalore, India - 560001
  </a>
</div>
              </motion.div>

              {/* Hours */}
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-slate-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Working Hours</p>
                  <p className="font-bold text-navy-950">Mon-Sat: 9 AM - 9 PM</p>
                  <p className="font-bold text-navy-950">Sun: 10 AM - 5 PM</p>
                  <p className="text-sm text-emerald-600 font-semibold">24/7 Emergency</p>
                </div>
              </motion.div>
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-royal-600 to-emerald-500 rounded-2xl p-6 text-white"
            >
              <h3 className="font-bold mb-4">Follow Us</h3>

<div className="flex gap-4">
  {[
  { icon: Facebook, url: 'https://facebook.com' },
  { icon: Instagram, url: 'https://instagram.com' },
  { icon: Linkedin, url: 'https://linkedin.com' },
  { icon: Twitter, url: 'https://twitter.com' },
].map((social, idx) => {
  const Icon = social.icon;
  return (
    <a
      key={idx}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-royal-600 flex items-center justify-center transition-all"
    >
      <Icon size={18} />
    </a>
  );
})}
</div>
            </motion.div>
          </motion.div>

          {/* Appointment Form */}
          {selectedPackage && (
  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300">
    
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Heart className="text-emerald-600" size={20} />
        <p className="font-semibold text-emerald-700">
          Selected Package: {selectedPackage.name}
        </p>
      </div>

      {/* CLEAR BUTTON */}
      <button
        onClick={() => setSelectedPackage(null)}
        className="text-sm text-red-600 font-semibold hover:underline"
      >
        Remove
      </button>
    </div>

    <p className="text-sm text-slate-600 mt-1">
      {selectedPackage.price} • {selectedPackage.duration}
    </p>
  </div>
)}
          <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="lg:col-span-2"
>
  <div className="bg-orange-200 rounded-3xl shadow-luxury p-8 lg:p-12 border border-black">

    <h2 className="text-3xl font-bold text-navy-950 mb-2">
      Book Your Appointment
    </h2>

    <p className="text-slate-600 mb-8">
      Fill out the form below and we'll get back to you within 2 hours
    </p>
{selectedPackage && (
  <div className="mb-4 flex justify-start">

    <div className="inline-flex flex-col w-fit max-w-xs px-3 py-2 rounded-lg bg-green-100 border border-green-300 shadow-sm">

      <div className="flex items-center gap-2">
        <Heart className="text-green-600" size={14} />
        <p className="text-xs font-semibold text-green-800">
          {selectedPackage.name}
        </p>
      </div>

      <p className="text-[11px] text-slate-600 mt-1">
        {selectedPackage.price} • {selectedPackage.duration}
      </p>

    </div>

    <button
      onClick={() => setSelectedPackage(null)}
      className="ml-3 text-xs text-red-600 font-semibold hover:underline"
    >
      Remove
    </button>

  </div>
)}
    {/* ✅ FORM ALWAYS VISIBLE */}
    <AppointmentForm />
  </div>
</motion.div>
          
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full bg-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-950 mb-4">Visit Us</h2>
            <p className="text-lg text-slate-600">Find us at our main clinic location</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-luxury h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.712400523587!2d77.64111!3d12.97194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf00ef62e9af3560!2sKoramangala%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Additional Services Banner */}
      <section className="bg-gradient-to-r from-navy-950 to-royal-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {[
              {
                icon: Heart,
                title: 'Online Consultations',
                desc: 'Connect with doctors from home via video call',
              },
              {
                icon: Clock,
                title: 'Home Sample Collection',
                desc: 'Free sample collection for lab tests at your home',
              },
              {
                icon: AlertCircle,
                title: '24/7 Support',
                desc: 'Round the clock emergency and medical assistance',
              },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon size={40} className="mx-auto mb-4 text-gold" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-slate-300">{service.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}