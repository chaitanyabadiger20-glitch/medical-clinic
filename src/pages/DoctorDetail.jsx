import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Award, Clock, MapPin, Phone, Mail, Calendar, ArrowRight } from 'lucide-react';
import ReviewCard from '../components/ReviewCard';
import { doctors } from '../data/doctors';

export default function DoctorDetail() {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === parseInt(id)) || doctors[0];

  const reviews = [
    {
      id: 1,
      name: 'Ramesh Kumar',
      avatar: 'https://st.depositphotos.com/1778008/4605/i/450/depositphotos_46056859-stock-photo-handsome-male-doctor.jpg',
      rating: 5,
      date: '2 weeks ago',
      text: 'Excellent consultation. Dr. was very attentive and explained everything in detail. Highly recommended!',
      tags: ['Professional', 'Caring', 'Expert'],
    },
    {
      id: 2,
      name: 'Priya Singh',
      avatar: 'https://naturalhopefertility.com/wp-content/uploads/2024/03/Lady_Doctor-removebg-preview.png',
      rating: 5,
      date: '1 month ago',
      text: 'Best doctor I could have asked for. Very patient and understanding. Treatment worked perfectly.',
      tags: ['Attentive', 'Knowledgeable', 'Kind'],
    },
    {
      id: 3,
      name: 'Vijay Patel',
      avatar: 'https://dentalspot.in/wp-content/uploads/2023/07/DSC03803-scaled.jpg',
      rating: 4,
      date: '2 months ago',
      text: 'Great experience overall. The clinic is well-maintained and the staff is helpful.',
      tags: ['Clean', 'Helpful', 'Qualified'],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Doctor Info */}
      <section className="bg-gradient-to-br from-navy-950 via-royal-600 to-emerald-500 relative overflow-hidden pt-12 pb-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Doctor Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="col-span-1"
            >
              <div className="relative">
                <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-luxury">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {doctor.availability === 'online' && (
                  <div className="absolute bottom-6 right-6 bg-emerald-400 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                    <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                    Available Now
                  </div>
                )}
              </div>
            </motion.div>

            {/* Doctor Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-1 md:col-span-2 text-white"
            >
              <p className="text-gold font-bold mb-2 uppercase tracking-wider">Specialist</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{doctor.name}</h1>
              <h2 className="text-2xl text-slate-200 mb-6">{doctor.specialty}</h2>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < 5 ? 'fill-gold text-gold' : 'text-slate-300'}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold">{doctor.rating} ({doctor.reviews} reviews)</span>
              </div>

              {/* Quick Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Award className="text-gold" size={24} />
                  <div>
                    <p className="text-sm text-slate-300">Experience</p>
                    <p className="font-semibold text-lg">{doctor.experience}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-gold" size={24} />
                  <div>
                    <p className="text-sm text-slate-300">Consultation Fee</p>
                    <p className="font-semibold text-lg">{doctor.fees}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-gold inline-flex items-center gap-2"
                >
                  <Calendar size={20} />
                  Book Appointment
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline text-white border-white hover:bg-white hover:text-navy-950 inline-flex items-center gap-2"
                >
                  <Phone size={20} />
                  Call Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy-950 mb-6">About</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                {doctor.bio}
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                With a passion for providing excellent patient care and staying at the forefront of medical advancement, Dr. has helped thousands of patients achieve their health goals.
              </p>
            </motion.div>

            {/* Qualifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy-950 mb-6">Qualifications & Certifications</h2>
              <div className="space-y-4">
                {doctor.qualifications.map((qual, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Award className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                    <p className="text-slate-700 font-medium">{qual}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Consultation Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy-950 mb-6">Consultation Hours</h2>
              <div className="bg-white border-2 border-royal-600 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="text-royal-600" size={28} />
                  <div>
                    <p className="text-sm text-slate-600">Available Hours</p>
                    <p className="text-lg font-bold text-navy-950">{doctor.consultationHours}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4">
                  Online and offline consultations available. Book your slot now!
                </p>
              </div>
            </motion.div>

            {/* Reviews Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy-950 mb-6">Patient Reviews</h2>
              <div className="space-y-6">
                {reviews.map((review, idx) => (
                  <ReviewCard key={review.id} review={review} index={idx} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-6">
              {/* Booking Card */}
              <div className="bg-white rounded-2xl shadow-luxury p-8">
                <h3 className="text-2xl font-bold text-navy-950 mb-6">Book Appointment</h3>
                <p className="text-slate-600 mb-6">Secure your consultation with this specialist</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                    <Calendar className="text-royal-600" size={20} />
                    <div>
                      <p className="text-xs text-slate-600">Next Available</p>
                      <p className="font-semibold text-navy-950">Tomorrow, 10:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-emerald-500" size={20} />
                    <div>
                      <p className="text-xs text-slate-600">Consultation Duration</p>
                      <p className="font-semibold text-navy-950">30 minutes</p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full flex items-center justify-center gap-2 mb-3"
                >
                  <Calendar size={20} />
                  Book Now
                </motion.button>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-navy-950 to-royal-600 rounded-2xl p-8 text-white shadow-luxury">
                <h3 className="text-xl font-bold mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-gold transition-colors">
                    <Phone size={20} />
                    <span>+91 98765 43210</span>
                  </a>
                  <a href="mailto:doctor@arogyaroyale.com" className="flex items-center gap-3 hover:text-gold transition-colors">
                    <Mail size={20} />
                    <span>doctor@arogyaroyale.com</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} />
                    <span>123 Royal Medical Plaza</span>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200">
                <h3 className="text-lg font-bold text-navy-950 mb-4">Doctor Statistics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Patients Treated</span>
                    <span className="font-bold text-navy-950">5000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Success Rate</span>
                    <span className="font-bold text-emerald-600">98%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Average Rating</span>
                    <span className="font-bold text-gold">{doctor.rating}/5</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}