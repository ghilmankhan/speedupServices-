import React from 'react';
import { motion } from 'motion/react';
import { Award, Zap, Scale, Eye, Tag, Clock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function WhyChooseUs() {
  const { isArabic, t } = useLanguage();
  const reasons = [
    { title: t.whyChooseUs.reasons[0], icon: <Award size={24} /> },
    { title: t.whyChooseUs.reasons[1], icon: <Zap size={24} /> },
    { title: t.whyChooseUs.reasons[2], icon: <Scale size={24} /> },
    { title: t.whyChooseUs.reasons[3], icon: <Eye size={24} /> },
    { title: t.whyChooseUs.reasons[4], icon: <Tag size={24} /> },
    { title: t.whyChooseUs.reasons[5], icon: <Clock size={24} /> },
    { title: t.whyChooseUs.reasons[6], icon: <ShieldCheck size={24} /> }
  ];

  return (
    <section className="py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl font-bold mb-8 ${isArabic ? 'text-right' : 'text-left'}`}>{t.whyChooseUs.title}</h2>
            <p className={`text-text-muted text-lg mb-12 leading-relaxed ${isArabic ? 'text-right' : 'text-left'}`}>
              {t.whyChooseUs.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-bg-light rounded-2xl border border-gray-100">
                  <div className="text-primary">{reason.icon}</div>
                  <span className="font-semibold text-sm">{reason.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" alt="Electrical Maintenance" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800" alt="Commercial Cleaning" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" alt="Warehouse Operations" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" alt="Building Maintenance" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
