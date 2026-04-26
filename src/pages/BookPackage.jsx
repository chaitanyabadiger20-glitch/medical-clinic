import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function BookPackage() {
  const location = useLocation();

  // Get plan name from URL
  const params = new URLSearchParams(location.search);
  const selectedPlan = params.get("plan");

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* Hero */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-navy-950 mb-4">
          Book Your Package
        </h1>
        <p className="text-slate-600">
          Fill the details below to confirm your appointment
        </p>
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto bg-white shadow-card rounded-2xl p-8 border border-slate-200">

        <form className="space-y-6">

          {/* Selected Plan */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Selected Package
            </label>
            <input
              type="text"
              value={selectedPlan || ""}
              readOnly
              className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-slate-100"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-royal-600"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-royal-600"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-royal-600"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Additional Notes
            </label>
            <textarea
              rows="4"
              placeholder="Any specific requirements..."
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-royal-600"
            ></textarea>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-4 bg-royal-600 text-white font-bold rounded-lg hover:bg-royal-500 transition"
          >
            Confirm Booking
          </motion.button>

        </form>
      </section>
    </div>
  );
}