import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const [counts, setCounts] = useState({
    patients: 0,
    doctors: 0,
    experience: 0,
    departments: 0,
  });

  useEffect(() => {
    const targets = {
      patients: 50000,
      doctors: 250,
      experience: 200,
      departments: 6,
    };

    const durations = {
      patients: 2000,
      doctors: 1500,
      experience: 1800,
      departments: 1200,
    };

    const increments = {
      patients: 50000 / 100,
      doctors: 250 / 100,
      experience: 200 / 100,
      departments: 6 / 100,
    };

    let frameId;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      Object.entries(targets).forEach(([key, target]) => {
        const progress = Math.min((timestamp - startTime) / durations[key], 1);
        setCounts(prev => ({
          ...prev,
          [key]: Math.floor(target * progress),
        }));
      });

      if (timestamp - startTime < 2000) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const stats = [
    {
      icon: '👥',
      label: 'Happy Patients',
      value: counts.patients,
      suffix: '+',
    },
    {
      icon: '👨‍⚕️',
      label: 'Expert Doctors',
      value: counts.doctors,
      suffix: '+',
    },
    {
      icon: '📚',
      label: 'Years Combined Experience',
      value: counts.experience,
      suffix: '+',
    },
    {
      icon: '🏥',
      label: 'Departments',
      value: counts.departments,
      suffix: '',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-navy-950 to-royal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-slate-300 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}