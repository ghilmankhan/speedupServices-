import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">About Speedup Services</h2>
          <div className="space-y-6 text-text-muted text-lg leading-relaxed">
            <p>
              Speedup Services is a Saudi-based integrated solutions provider committed to delivering excellence across multiple business sectors. We specialize in marketing, creative, and digital services, combined with reliable logistics, efficient facility management, and professional manpower supply—offering our clients a complete, end-to-end service experience.
            </p>
            <p>
              Driven by speed, quality, and innovation, we partner with businesses to enhance their brand presence, streamline operations, and achieve sustainable growth. Our multidisciplinary approach allows us to understand diverse industry needs and provide tailored solutions that add real value.
            </p>
            <p>
              At Speedup Services, we believe in building long-term relationships through trust, performance, and a deep commitment to supporting the Kingdom’s evolving business landscape.
            </p>
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
              alt="Speedup Services Team" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-green rounded-2xl -z-10 blur-2xl opacity-30" />
        </motion.div>
      </div>
    </section>
  );
}
