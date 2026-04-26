import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="border border-black rounded-xl mb-4 overflow-hidden hover:shadow-md transition-all"

      // 👉 Hover (Desktop)
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* HEADER */}
      <button
        onClick={() => setIsOpen(!isOpen)} // 👉 Click (Mobile)
        className="w-full py-6 flex items-center justify-between group hover:bg-slate-50 transition-colors px-4 -mx-4"
      >
        <h3 className="text-lg font-semibold text-navy-950 text-left group-hover:text-royal-600 transition-colors">
          {faq.question}
        </h3>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown
            className={`${
              isOpen ? 'text-royal-600' : 'text-slate-400'
            } transition-colors`}
          />
        </motion.div>
      </button>

      {/* ANSWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-6 text-slate-600 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}