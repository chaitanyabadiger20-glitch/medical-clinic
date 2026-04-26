import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PricingCard({ package: pkg, index }) {
  const navigate = useNavigate();

  const handleSelect = () => {
    navigate('/contact', {
      state: { selectedPackage: pkg }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={pkg.popular ? { scale: 1.05 } : { y: -10 }}
      className={`relative group h-full ${pkg.popular ? 'lg:scale-105' : ''}`}
    >
      {/* Popular badge */}
      {pkg.popular && (
        <motion.div
          initial={{ rotate: -45, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="absolute -top-6 -right-6 z-20"
        >
          <div className="bg-gold text-navy-950 font-bold px-6 py-1 rounded-full shadow-lg transform rotate-45 text-sm">
            POPULAR
          </div>
        </motion.div>
      )}

      <div
        className={`h-full rounded-3xl overflow-hidden transition-all duration-500 ${
          pkg.popular
            ? 'bg-gradient-to-br from-navy-950 to-royal-600 shadow-luxury text-white'
            : 'bg-white shadow-card border border-black hover:shadow-luxury'
        }`}
      >
        {/* Top accent */}
        <div className="h-1 bg-gradient-to-r from-emerald-400 via-gold to-royal-600"></div>

        <div className="p-8 lg:p-10 flex flex-col h-full">
          {/* Icon */}
          <div className={`text-5xl mb-6 ${pkg.popular ? 'opacity-100' : 'opacity-80'}`}>
            {pkg.icon}
          </div>

          {/* Package Name */}
          <h3
            className={`text-2xl lg:text-3xl font-bold mb-3 ${
              pkg.popular ? 'text-white' : 'text-navy-950'
            }`}
          >
            {pkg.name}
          </h3>

          {/* Duration */}
          <p
            className={`text-sm mb-6 ${
              pkg.popular ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            {pkg.duration}
          </p>

          {/* Price */}
          <div className="mb-8">
            <p
              className={`text-4xl lg:text-5xl font-bold mb-2 ${
                pkg.popular ? 'text-gold' : 'text-royal-600'
              }`}
            >
              {pkg.price}
            </p>

            {!pkg.popular && (
              <p className="text-sm text-slate-500">Approximately per month</p>
            )}
          </div>

          {/* Features */}
          <div className="flex-grow mb-8">
            <ul className="space-y-4">
              {pkg.includes.map((feature, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-3 ${
                    pkg.popular ? 'text-slate-200' : 'text-slate-700'
                  }`}
                >
                  <Check
                    size={20}
                    className={`mt-1 flex-shrink-0 ${
                      pkg.popular ? 'text-gold' : 'text-emerald-500'
                    }`}
                  />
                  <span className="text-sm lg:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSelect}
            className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 group/btn ${
              pkg.popular
                ? 'bg-gold text-navy-950 hover:bg-yellow-300'
                : 'bg-royal-600 text-white hover:bg-royal-500'
            }`}
          >
            Choose Plan
            <ArrowRight
              size={20}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </motion.button>

          {/* Bottom note */}
          {pkg.popular && (
            <div className="mt-6 pt-6 border-t border-slate-700/50 text-center">
              <p className="text-gold text-sm font-semibold">
                ✓ Most Comprehensive
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}