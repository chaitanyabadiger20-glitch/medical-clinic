import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DepartmentCard from '../components/DepartmentCard';
import { departments } from '../data/departments';
import { Search } from 'lucide-react';
import { useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { doctors } from '../data/doctors';
import DoctorCard from '../components/DoctorCard';

export default function Departments() {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const { name } = useParams();

  // 🔥 FILTER
  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔥 SCROLL TO SECTION
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
      }
    }
  }, [location]);

  const selectedDepartment = departments.find(
  d => d.name.toLowerCase() === name?.toLowerCase()
);

const departmentDoctors = doctors.filter(
  doc => doc.department.toLowerCase() === name?.toLowerCase()
);
 return (
  <div className="pt-20">

    {/* Hero Section */}
    <section className="relative h-96 flex items-center overflow-hidden bg-light">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.residencyadvisor.com/images/articles_v1_rewrite/v1_MEDICAL_SCHOOL_LIFE_AND_EXAMS_CHOOSING_A_SPECIALTY_unveiling_underrated_specialties_hidden-step1-medical-student-exploring-underrated-spe-2140.png"
          alt="Departments"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Our Departments
        </h1>
        <p className="text-xl text-slate-100">
          Comprehensive care across all medical specialties
        </p>
      </div>
    </section>

    {/* Search */}
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
        <input
          type="text"
          placeholder="Search departments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-6 py-4 border-2 rounded-2xl"
        />
      </div>
    </section>

    {/* Grid */}
    <section className="max-w-7xl mx-auto px-4 pb-20">
      {filteredDepartments.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDepartments.map((dept, idx) => (
            <div key={dept.id}>
              <DepartmentCard department={dept} index={idx} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No departments found</p>
      )}
    </section>

  </div>
);
}