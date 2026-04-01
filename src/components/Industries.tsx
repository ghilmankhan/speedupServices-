import React from 'react';
import { motion } from 'motion/react';
import { Building2, Factory, Construction, Warehouse, Hospital, GraduationCap, Home, ShoppingBag } from 'lucide-react';

export default function Industries() {
  const industries = [
    { name: "Corporate Offices", icon: <Building2 size={32} /> },
    { name: "Industrial & Manufacturing Units", icon: <Factory size={32} /> },
    { name: "Construction Projects", icon: <Construction size={32} /> },
    { name: "Warehouses & Logistics", icon: <Warehouse size={32} /> },
    { name: "Hospitals & Clinics", icon: <Hospital size={32} /> },
    { name: "Educational Institutions", icon: <GraduationCap size={32} /> },
    { name: "Residential & Commercial Complexes", icon: <Home size={32} /> },
    { name: "Retail & Hospitality", icon: <ShoppingBag size={32} /> }
  ];

  return (
    <section id="industries" className="py-24 bg-bg-light">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Our expertise spans across diverse sectors, providing specialized solutions for every industry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center gap-6 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-primary-green group-hover:bg-primary-green group-hover:text-white transition-colors">
                {industry.icon}
              </div>
              <h3 className="font-bold text-text-main leading-tight">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
