import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DepartmentCard({ department, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -15 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-card hover:shadow-luxury transition-all duration-500 h-full  border-2 border-black">
        {/* Background Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={department.image}
            alt={department.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-950"></div>
          
          {/* Icon */}
          <div className="absolute bottom-6 left-6 text-5xl"></div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-navy-950 mb-3 group-hover:text-royal-600 transition-colors">
            {department.name}
          </h3>
          <p className="text-slate-600 mb-6 line-clamp-2">{department.description}</p>

          {/* Specialties */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-navy-950 mb-3">Specialties:</p>
            <div className="flex flex-wrap gap-2">
              {department.specialties.slice(0, 2).map((specialty, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full"
                >
                  {specialty}
                </span>
              ))}
              {department.specialties.length > 2 && (
                <span className="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
                  +{department.specialties.length - 2} more
                </span>
              )}
            </div>
          </div>

          {/* Button */}
          <Link
            to={`/departments?dept=${department.id}`}
            className="inline-flex items-center gap-2 text-royal-600 font-semibold group/btn hover:text-gold transition-colors"
          >
            Learn More
            <ArrowRight
              size={18}
              className="group-hover/btn:translate-x-2 transition-transform"
            />
          </Link>
        </div>

        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-royal-600 via-gold to-emerald-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
      </div>
    </motion.div>
  );
}