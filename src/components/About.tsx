import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n';

export default function About() {
  const { isArabic, t } = useLanguage();

  return (
    <section id="about" className="bg-site-about">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl font-bold mb-8 ${isArabic ? 'text-right' : 'text-left'}`}>{t.about.title}</h2>
          <div className="space-y-6 text-text-muted text-lg leading-relaxed">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className={isArabic ? 'text-right' : 'text-left'}>
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200" 
              alt={t.about.imageAlt}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-2xl -z-10 blur-2xl opacity-30" />
        </motion.div>
        </div>
      </div>
    </section>
  );
}
