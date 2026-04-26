import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function AppointmentForm({ doctors = [], departments = [] }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        department: '',
        doctor: '',
        date: '',
        time: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {submitted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-8 text-center"
        >
          <CheckCircle size={48} className="text-emerald-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-navy-950 mb-2">Appointment Confirmed!</h3>
          <p className="text-slate-600">We'll contact you shortly to confirm your appointment.</p>
        </motion.div>
      )}

      {!submitted && (
        <>
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-navy-950 mb-2">Full Name *</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-royal-600" size={20} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-royal-600 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy-950 mb-2">Phone Number *</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-royal-600" size={20} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-royal-600 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Email and Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-navy-950 mb-2">Email Address *</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-royal-600" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-royal-600 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy-950 mb-2">Location *</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-royal-600" size={20} />
                <select className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-royal-600 focus:outline-none transition-colors appearance-none cursor-pointer">
                  <option>Bangalore, India</option>
                  <option>Mumbai, India</option>
                  <option>Delhi, India</option>
                  <option>Pune, India</option>
                </select>
              </div>
            </div>
          </div>

          {/* Department and Doctor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-navy-950 mb-2">Department *</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-royal-600 focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select Department</option>
                <option value="cardiology">Cardiology</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="dermatology">Dermatology</option>
                <option value="neurology">Neurology</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="dentistry">Dentistry</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy-950 mb-2">Doctor (Optional)</label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-royal-600 focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="">Any Available Doctor</option>
                <option value="dr-rajesh">Dr. Rajesh Kumar</option>
                <option value="dr-priya">Dr. Priya Sharma</option>
                <option value="dr-anjali">Dr. Anjali Patel</option>
                <option value="dr-arjun">Dr. Arjun Singh</option>
              </select>
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-navy-950 mb-2">Preferred Date *</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-royal-600" size={20} />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-royal-600 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy-950 mb-2">Preferred Time *</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-royal-600" size={20} />
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-royal-600 focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select Time</option>
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-navy-950 mb-2">Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your health concern..."
              rows="4"
              className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-royal-600 focus:outline-none transition-colors resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full btn-primary py-4 text-lg font-semibold"
          >
            Book Appointment
          </motion.button>

          <p className="text-sm text-slate-500 text-center">
            We'll contact you to confirm your appointment within 2 hours
          </p>
        </>
      )}
    </motion.form>
  );
}