import React from 'react';
import { motion } from 'motion/react';
import { FileText, Shield, CheckCircle, ClipboardCheck } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Compliance() {
  const { isArabic, t } = useLanguage();
  const complianceItems = [
    { title: t.compliance.items[0].title, desc: t.compliance.items[0].desc, icon: <CheckCircle size={32} /> },
    { title: t.compliance.items[1].title, desc: t.compliance.items[1].desc, icon: <Shield size={32} /> },
    { title: t.compliance.items[2].title, desc: t.compliance.items[2].desc, icon: <ClipboardCheck size={32} /> },
    { title: t.compliance.items[3].title, desc: t.compliance.items[3].desc, icon: <FileText size={32} /> }
  ];

  return (
    <section className="bg-site-compliance py-24 text-white">
      <div className="section-container">
        <div className={`text-center mb-16 ${isArabic ? 'md:text-right' : ''}`}>
          <h2 className="text-4xl font-bold mb-4">{t.compliance.title}</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {t.compliance.description}
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
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
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
