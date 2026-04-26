import React from 'react';
import { motion } from 'framer-motion';
import PricingCard from '../components/PricingCard';
import { packages } from '../data/packages';
import { CheckCircle, Gift, Zap } from 'lucide-react';

export default function HealthPackages() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center overflow-hidden bg-light">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cityhealth.com/wp-content/uploads/2024/10/image-8.webp"
            alt="Packages"
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
              Health Packages
            </h1>
            <p className="text-xl text-slate-100 max-w-2xl mx-auto">
              Comprehensive wellness packages tailored to your health needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: CheckCircle,
              title: 'Comprehensive Tests',
              desc: 'Full body diagnostics with advanced lab tests',
            },
            {
              icon: Gift,
              title: 'Expert Consultation',
              desc: 'Free consultations with top specialists',
            },
            {
              icon: Zap,
              title: 'Fast Results',
              desc: 'Quick turnaround on all test reports',
            },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-luxury transition-all duration-300 text-center border border-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="w-12 h-12 text-royal-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-950 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-bold mb-4 uppercase tracking-widest">Our Plans</p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-950 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Select the package that best fits your health goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {packages.map((pkg, idx) => (
            <PricingCard key={pkg.id} package={pkg} index={idx} />
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-950 mb-4">Package Comparison</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Compare all our packages to find the right fit for you
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl shadow-luxury"
          >
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-navy-950 to-royal-600 text-white">
                  <th className="px-6 py-4 text-left font-bold">Feature</th>
                  {packages.map(pkg => (
                    <th key={pkg.id} className="px-6 py-4 text-center font-bold">
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Blood Tests', basic: true, premium: true, executive: true, platinum: true },
                  { name: 'X-Ray & ECG', basic: false, premium: true, executive: true, platinum: true },
                  { name: 'Ultrasound', basic: false, premium: false, executive: true, platinum: true },
                  { name: 'CT Scan', basic: false, premium: false, executive: false, platinum: true },
                  { name: 'Doctor Consultation', basic: true, premium: true, executive: true, platinum: true },
                  { name: 'Health Report', basic: true, premium: true, executive: true, platinum: true },
                  { name: 'Follow-up Support', basic: false, premium: true, executive: true, platinum: true },
                ].map((feature, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-6 py-4 font-medium text-navy-950">{feature.name}</td>
                    {packages.map(pkg => {
                      const values = [feature.basic, feature.premium, feature.executive, feature.platinum];
                      return (
                        <td key={pkg.id} className="px-6 py-4 text-center">
                          {values[pkg.id - 1] ? (
                            <CheckCircle className="w-6 h-6 text-emerald-500 mx-auto" />
                          ) : (
                            <div className="w-6 h-6 border-2 border-slate-300 rounded-full mx-auto"></div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
<section className="max-w-6xl mx-auto px-6 py-20">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className="text-4xl font-bold text-navy-950 mb-4">
      Package FAQs
    </h2>
  </motion.div>

  <div className="space-y-4">
    {[
      { q: 'Are home sample collections free?', a: 'Yes, free home sample collection is available within city limits for all packages.' },
      { q: 'How long are reports valid?', a: 'Test reports are valid for 6-12 months depending on the test type.' },
      { q: 'Can I upgrade my package?', a: 'Yes, you can upgrade to a higher package anytime and pay only the difference.' },
      { q: 'Is insurance accepted?', a: 'All major health insurance providers are accepted. Please inform us at the time of booking.' },
    ].map((faq, idx) => (
      <motion.div
        key={idx}
        className="bg-white rounded-xl p-6 shadow-card border border-black"
      >
        <h3 className="font-bold text-navy-950 mb-2">{faq.q}</h3>
        <p className="text-slate-600">{faq.a}</p>
      </motion.div>
    ))}
  </div>
</section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-royal-600 to-emerald-500 py-16 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Invest in Your Health?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Choose a package and start your wellness journey with Arogya Royale
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gold"
          >
            Book Your Package Now
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}