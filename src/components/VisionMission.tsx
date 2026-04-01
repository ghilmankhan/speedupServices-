import React from 'react';
import { motion } from 'motion/react';
import { Target, Rocket } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function VisionMission() {
  const { isArabic, t } = useLanguage();

  return (
    <section className="bg-primary-charcoal py-24 text-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full text-primary font-semibold text-sm">
              <Target size={18} />
              {t.visionMission.visionLabel}
            </div>
            <h2 className={`text-4xl font-bold leading-tight ${isArabic ? 'text-right' : 'text-left'}`}>
              {t.visionMission.visionText}
            </h2>
            <p className={`text-white/70 text-lg leading-relaxed ${isArabic ? 'text-right' : 'text-left'}`}>
              {t.visionMission.tagline}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full text-primary font-semibold text-sm">
              <Rocket size={18} />
              {t.visionMission.missionLabel}
            </div>
            <p className={`text-white/70 text-lg leading-relaxed p-6 bg-white/5 rounded-2xl border border-white/10 ${isArabic ? 'text-right' : 'text-left'}`}>
              {t.visionMission.missionText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
