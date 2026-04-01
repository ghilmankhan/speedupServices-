import React from 'react';
import { motion } from 'motion/react';
import { FileText, Shield, CheckCircle, ClipboardCheck } from 'lucide-react';

export default function Compliance() {
  const complianceItems = [
    { title: "Labor Law Compliance", desc: "Operating in full accordance with the regulations of the Kingdom of Saudi Arabia.", icon: <CheckCircle size={32} /> },
    { title: "GOSI Registration", desc: "Full registration and compliance with the General Organization for Social Insurance.", icon: <Shield size={32} /> },
    { title: "Health & Safety Standards", desc: "Prioritizing workplace safety and employee welfare through rigorous standards.", icon: <ClipboardCheck size={32} /> },
    { title: "Proper Documentation & Contracts", desc: "Ensuring all legal requirements and contractual obligations are met with transparency.", icon: <FileText size={32} /> }
  ];

  return (
    <section className="py-24 bg-primary-charcoal text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Compliance & Safety</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Speedup Services operates with the highest standards of legal and safety compliance in Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {complianceItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="w-16 h-16 bg-primary-green/20 rounded-2xl flex items-center justify-center text-primary-green mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
