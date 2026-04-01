import React from 'react';
import { motion } from 'motion/react';
import { Target, Rocket } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="bg-primary-charcoal py-24 text-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full text-primary-green font-semibold text-sm">
              <Target size={18} />
              OUR VISION
            </div>
            <h2 className="text-4xl font-bold leading-tight">
              To become the region's most agile and trusted partner for integrated business solutions, empowering organizations to move faster, operate smarter, and grow stronger.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Built for Speed. Designed for Success.
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
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full text-primary-green font-semibold text-sm">
              <Rocket size={18} />
              OUR MISSION
            </div>
            <p className="text-white/70 text-lg leading-relaxed p-6 bg-white/5 rounded-2xl border border-white/10">
              At Speedup Services, we accelerate business success by delivering seamless, end-to-end solutions across marketing, creative, and digital services, supported by reliable logistics, efficient facility management, and skilled manpower. We are committed to speed, quality, and innovation, helping our clients stay ahead in a rapidly evolving world.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
