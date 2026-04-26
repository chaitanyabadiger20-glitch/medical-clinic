import React from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp } from 'lucide-react';

export default function ReviewCard({ review, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-card hover:shadow-luxury transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4 flex-grow">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold text-navy-950">{review.name}</h4>
            <p className="text-sm text-slate-500">{review.date}</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <ThumbsUp size={20} className="text-slate-400 hover:text-gold" />
        </motion.button>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < review.rating ? 'fill-gold text-gold' : 'text-slate-300'}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-slate-600 leading-relaxed mb-4">{review.text}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {review.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}