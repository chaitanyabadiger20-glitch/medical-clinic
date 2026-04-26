import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DoctorCard from '../components/DoctorCard';
import { doctors } from '../data/doctors';
import { Search, Filter } from 'lucide-react';

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');

  const departments = ['all', 'Cardiology', 'Orthopedics', 'Dermatology', 'Neurology', 'Pediatrics', 'Dentistry'];

  const filteredDoctors = doctors.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || doc.department === selectedDepartment;
    const matchesAvailability = selectedAvailability === 'all' || doc.availability === selectedAvailability;
    return matchesSearch && matchesDepartment && matchesAvailability;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center  overflow-hidden bg-light">
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.bsmu.by/upload/iblock/e20/hxf4mg7k0zqw3f8zztoxtyarehv9qz2k/Group_640_1_.jpg"
            alt="Doctors"
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
              Our Expert Doctors
            </h1>
            <p className="text-xl text-slate-100 max-w-2xl mx-auto">
              Meet our highly qualified specialists with years of experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
            <input
              type="text"
              placeholder="Search doctors by name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white border-2 border-slate-200 rounded-2xl focus:border-royal-600 focus:outline-none transition-colors text-lg"
            />
          </div>

          {/* Department Filter */}
          <div>
            <label className="block text-sm font-semibold text-navy-950 mb-3">Department</label>
            <div className="flex flex-wrap gap-3">
              {departments.map(dept => (
                <motion.button
                  key={dept}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedDepartment === dept
                      ? 'bg-royal-600 text-white shadow-md border border-royal-600'
                      : 'bg-slate-100 text-navy-950 border border-black hover:bg-slate-200'
                  }`}
                >
                  {dept.charAt(0).toUpperCase() + dept.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Availability Filter */}
          <div>
            <label className="block text-sm font-semibold text-navy-950 mb-3">Availability</label>
            <div className="flex gap-3">
              {[
                { value: 'all', label: 'All Doctors' },
                { value: 'online', label: 'Available Now' },
                { value: 'offline', label: 'Coming Soon' },
              ].map(option => (
                <motion.button
                  key={option.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedAvailability(option.value)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedAvailability === option.value
                      ? 'bg-emerald-500 text-white shadow-md'
                      : 'bg-slate-100 text-navy-950 border border-black hover:bg-slate-200'
                  }`}
                >
                  {option.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Doctors Grid */}
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {filteredDoctors.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredDoctors.map((doc, idx) => (
              <motion.div
                key={doc.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <DoctorCard doctor={doc} index={idx} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-xl text-slate-600">No doctors found matching your filters.</p>
          </motion.div>
        )}
      </section>
    </div>
  );
}