import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone, MapPin, Shield, Award, Heart } from 'lucide-react';
import DepartmentCard from '../components/DepartmentCard';
import DoctorCard from '../components/DoctorCard';
import StatsSection from '../components/StatsSection';
import TestimonialSlider from '../components/TestimonialSlider';
import { departments } from '../data/departments';
import { doctors } from '../data/doctors';
import { testimonials } from '../data/testimonials';
import { images } from '../data/images';
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "../components/SplashScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 3000);

  return () => clearTimeout(timer);
}, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
  <>
    {/* SPLASH SCREEN */}
    <AnimatePresence>
      {loading && <SplashScreen />}
    </AnimatePresence>

    {/* HOME PAGE */}
    {!loading && (
      <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-light">
        <div className="absolute inset-0 z-0">
          <img
            src={images.heroMain}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Premium Healthcare,
              <span className="text-gold block mt-2">Royale Experience</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-100 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience world-class medical care with India's leading specialists in a luxury healthcare environment
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="btn-gold  hover:bg-white hover:text-navy-950 inline-flex items-center justify-center gap-2 text-center"
              >
                Book Appointment
                <Calendar size={20} />
              </Link>
             <a
                 href="tel:+919876543210"
                 className="btn-outline text-black bg-gold  hover:bg-white hover:text-navy-950 inline-flex items-center justify-center gap-2"
                    >
                 Call Us Now
               <Phone size={20} />
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="mt-12 flex flex-col sm:flex-row gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-gold" />
                <div>
                  <p className="text-gold font-semibold">Certified Excellence</p>
                  <p className="text-slate-100">ISO Certified</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-8 h-8 text-gold" />
                <div>
                  <p className="text-gold font-semibold">50,000+ Patients</p>
                  <p className="text-slate-100">Trusted Care</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-gold" />
                <div>
                  <p className="text-gold font-semibold">24/7 Support</p>
                  <p className="text-slate-100">Always Available</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Quick Booking Section */}
      <section className="relative -mt-20 max-w-5xl mx-auto px-4 z-20 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-luxury p-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-royal-100 rounded-full flex items-center justify-center">
              <Phone className="text-royal-600" size={28} />
            </div>
            <div>
              <p className="text-sm text-slate-600">Call Us Anytime</p>
              <a
                   href="https://wa.me/919876543210"
                     target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-navy-950 hover:text-emerald-600 transition"
               >
                    +91 98765 43210
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center">
              <Calendar className="text-emerald-500" size={28} />
            </div>
            <div>
              <p className="text-sm text-slate-600">Book Online</p>
              <Link to="/contact" className="text-lg font-bold text-navy-950 hover:text-royal-600 transition-colors">
                Instant Appointment
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center">
              <MapPin className="text-gold" size={28} />
            </div>
           <div>
  <p className="text-sm text-slate-600">Visit Us</p>

  <a
    href="https://www.google.com/maps/search/?api=1&query=123+Royal+Medical+Plaza"
    target="_blank"
    rel="noopener noreferrer"
    className="text-lg font-bold text-navy-950 hover:text-emerald-600 transition"
  >
    123 Royal Medical Plaza
  </a>
</div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gold font-bold mb-4 uppercase tracking-widest">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-950 mb-4">
              Excellence In Every Care
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From diagnosis to treatment, we deliver premium healthcare with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  icon: '🏆',
                  title: 'Expert Specialists',
                  desc: 'Board-certified doctors with international experience and advanced qualifications',
                },
                {
                  icon: '🔬',
                  title: 'Advanced Technology',
                  desc: 'State-of-the-art diagnostic and treatment equipment with latest innovations',
                },
                {
                  icon: '💚',
                  title: 'Compassionate Care',
                  desc: 'Patient-centered approach with personalized treatment plans and follow-up care',
                },
                {
                  icon: '⚡',
                  title: 'Quick Recovery',
                  desc: 'Minimally invasive procedures for faster recovery and better outcomes',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-4xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-navy-950 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-luxury h-96">
                <img
                  src={images.facility1}
                  alt="Facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent"></div>
              </div>
              <motion.div
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-luxury max-w-xs"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-sm text-slate-600 mb-2">Trusted by</p>
                <p className="text-2xl font-bold text-navy-950">50,000+ Patients</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Departments */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gold font-bold mb-4 uppercase tracking-widest">Our Departments</p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-950 mb-4">
              Comprehensive Specialty Care
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explore our wide range of medical specialties with expert doctors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.slice(0, 6).map((dept, idx) => (
              <DepartmentCard key={dept.id} department={dept} index={idx} />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/departments"
              className="inline-flex items-center gap-2 btn-primary"
            >
              View All Departments
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="section-padding bg-gradient-to-b from-light to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gold font-bold mb-4 uppercase tracking-widest">Expert Doctors</p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-950 mb-4">
              Meet Our Specialists
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experienced medical professionals dedicated to your health and wellness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.slice(0, 3).map((doc, idx) => (
              <DoctorCard key={doc.id} doctor={doc} index={idx} />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/doctors"
              className="inline-flex items-center gap-2 btn-primary"
            >
              View All Doctors
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gold font-bold mb-4 uppercase tracking-widest">Patient Stories</p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-950 mb-4">
              What Our Patients Say
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-navy-950 via-royal-600 to-emerald-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Premium Healthcare?
            </h2>
            <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
              Schedule your appointment today and experience the Arogya Royale difference
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 btn-gold"
            >
              Book Your Appointment
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    )}
  </>
)
};