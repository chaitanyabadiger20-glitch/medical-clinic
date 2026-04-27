import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FAQAccordion from '../components/FAQAccordion';
import { faqs } from '../data/faqs';
import { Shield, Heart, Users, CheckCircle, Clock, MapPin } from 'lucide-react';

export default function PatientInfo() {

   const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center overflow-hidden bg-light">
        <div className="absolute inset-0 z-0">
          <img
            src="https://thumbs.dreamstime.com/z/inside-empty-clinic-hall-green-plants-white-beige-finish-luxury-interior-modern-hospital-shiny-marble-floor-concept-329686122.jpg"
            alt="Patient Info"
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
              Patient Information
            </h1>
            <p className="text-xl text-slate-100 max-w-2xl mx-auto">
              Everything you need to know about visiting Arogya Royale
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 "
        >
          {[
            {
              icon: Clock,
              title: 'Working Hours',
              content: 'Mon-Sat: 9 AM - 9 PM\nSunday: 10 AM - 5 PM\nEmergency: 24/7',
            },
            {
              icon: MapPin,
              title: 'Location',
              content: '123 Royal Medical Plaza\nBangalore, India\n3 Parking Levels',
            },
            {
              icon: Heart,
              title: 'Services',
              content: 'Online Consultations\nHome Sample Collection\nEmergency Care',
            },
            {
              icon: Shield,
              title: 'Insurance',
              content: 'All Major Plans Accepted\nCashless Facility\nEasy Claims',
            },
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-luxury transition-all duration-300 border border-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="w-10 h-10 text-royal-600 mb-4" />
                <h3 className="text-lg font-bold text-navy-950 mb-3">{card.title}</h3>
                <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">
                  {card.content}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Insurance Section */}
      <section className="section-padding bg-gradient-to-b from-orange-100 via-orange-50 to-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Shield className="w-12 h-12 text-royal-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-navy-950 mb-4">
              Insurance & Payment
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We accept all major health insurance providers with hassle-free cashless facilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
            {/* Accepted Insurance */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-card border border-black"
            >
              <h3 className="text-2xl font-bold text-navy-950 mb-6">Accepted Insurance</h3>
              <div className="grid grid-cols-2 gap-4 ">
                {[
                  'ICICI Prudential',
                  'HDFC Ergo',
                  'Aetna',
                  'Apollo Munich',
                  'National Insurance',
                  'NIVA Bupa',
                  'Care Health',
                  'Max Bupa',
                  'Reliance Health',
                  'Cigna',
                  'Digit Insurance',
                  'Bharti AXA',
                ].map((insurer, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2 "
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle size={20} className="text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{insurer}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Payment Methods */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-card border border-black"
            >
              <h3 className="text-2xl font-bold text-navy-950 mb-6">Payment Methods</h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Digital Payment',
                    items: ['Credit/Debit Card', 'Net Banking', 'UPI', 'Digital Wallets'],
                  },
                  {
                    title: 'Other Options',
                    items: ['Cashless Insurance', 'EMI Available', 'Online Payment', 'Cash Payment'],
                  },
                ].map((group, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-navy-950 mb-3">{group.title}</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {group.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pre-Visit Checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy-950 mb-4">
            Before Your Visit
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Prepare for your appointment with these helpful guidelines
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Bring These Documents',
              items: [
                'Valid ID Proof',
                'Insurance Card',
                'Previous Medical Records',
                'Medication List',
              ],
            },
            {
              title: 'Prepare for Tests',
              items: [
                'Fast 8-12 hours before blood tests',
                'Carry water bottle',
                'Wear comfortable clothes',
                'Avoid caffeine',
              ],
            },
            {
              title: 'General Tips',
              items: [
                'Arrive 15 min early',
                'Keep contact info updated',
                'Note down symptoms',
                'Bring notepad',
              ],
            },
          ].map((section, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-luxury transition-all border border-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-navy-950 mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
<section className="bg-orange-50 py-20">
  <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold text-navy-950 mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-slate-600">
        Find answers to common questions about our services
      </p>
    </motion.div>

    {/* FAQ Box */}
    <div className="bg-orange-100 rounded-2xl shadow-card p-6 md:p-8 ">

      {faqs.map((faq, idx) => (
        <FAQAccordion
          key={faq.id}
          faq={faq}
          index={idx}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}

    </div>

  </div>
</section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-navy-950 to-royal-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
              Our patient support team is available 24/7 to help you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gold inline-flex items-center justify-center gap-2"
              >
                Call Us Now
              </motion.a>
              <motion.a
                href="mailto:info@arogyaroyale.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-yellow-500 text-white font-medium shadow-[0_4px_20px_rgba(234,179,8,0.5)] hover:shadow-[0_6px_25px_rgba(234,179,8,0.7)] transition"
              >
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}