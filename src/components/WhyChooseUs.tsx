import React from 'react';
import { motion } from 'motion/react';
import { Award, Zap, Scale, Eye, Tag, Clock, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    { title: "Professional & Experienced Team", icon: <Award size={24} /> },
    { title: "Quick Mobilization & Deployment", icon: <Zap size={24} /> },
    { title: "Compliance with Saudi Labor Law", icon: <Scale size={24} /> },
    { title: "Quality Control & Supervision", icon: <Eye size={24} /> },
    { title: "Competitive & Transparent Pricing", icon: <Tag size={24} /> },
    { title: "24/7 Operational Support", icon: <Clock size={24} /> },
    { title: "Replacement Guarantee", icon: <ShieldCheck size={24} /> }
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
            <h2 className="text-4xl font-bold mb-8">Why Choose Speedup Services?</h2>
            <p className="text-text-muted text-lg mb-12 leading-relaxed">
              We are committed to delivering excellence through our core values of reliability, quality, and compliance. Our client-centric approach ensures your operations run smoothly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-bg-light rounded-2xl border border-gray-100">
                  <div className="text-primary-green">{reason.icon}</div>
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
