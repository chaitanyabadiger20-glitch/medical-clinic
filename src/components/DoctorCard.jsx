import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DoctorCard({ doctor, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -12 }}
      className="group"
    >
      <Link to={`/doctor/${doctor.id}`} className="block h-full">
        <div className="rounded-2xl overflow-hidden bg-white shadow-card transition-all duration-500 h-full flex flex-col border-2 border-black hover:border-royal-600 hover:shadow-luxury hover:-translate-y-2">
          <div className="relative h-72 overflow-hidden bg-gradient-to-br from-royal-600 to-emerald-500">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Availability Badge */}
            <div className="absolute top-4 right-4">
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full font-medium text-sm backdrop-blur-sm ${
                doctor.availability === 'online'
                  ? 'bg-emerald-400/90 text-white'
                  : 'bg-slate-400/90 text-white'
              }`}>
                <span className={`w-2 h-2 rounded-full ${
                  doctor.availability === 'online' ? 'bg-white animate-pulse' : 'bg-slate-300'
                }`}></span>
                {doctor.availability === 'online' ? 'Available' : 'Offline'}
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-3 py-2 rounded-lg">
              <p className="text-xs text-slate-600">Experience</p>
              <p className="font-bold text-navy-950">{doctor.experience}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-navy-950 mb-1 group-hover:text-royal-600 transition-colors">
              {doctor.name}
            </h3>
            <p className="text-sm text-royal-600 font-semibold mb-4">{doctor.specialty}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < 5 ? 'fill-gold text-gold' : 'text-slate-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-slate-600">
                {doctor.rating} ({doctor.reviews} reviews)
              </span>
            </div>

            {/* Info Items */}
            <div className="space-y-3 mb-6 flex-grow">
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-emerald-500" />
                <span className="text-sm text-slate-600">Available Today</span>
              </div>
              <div className="flex items-center gap-3">
                <Award size={18} className="text-gold" />
                <span className="text-sm text-slate-600 line-clamp-1">
                  {doctor.qualifications[0]}
                </span>
              </div>
            </div>

            {/* Consultation Fee */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-600">Consultation Fee</p>
                <p className="text-lg font-bold text-navy-950">{doctor.fees}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-royal-600 text-white rounded-lg font-medium text-sm hover:bg-royal-500 transition-colors"
              >
                Book Now
              </motion.button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}