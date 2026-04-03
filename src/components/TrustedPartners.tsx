import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n';

const trustedCompanies = [
  {
    id: 'ghg',
    name: 'Gulf Horizon Group',
    label: 'Facility Management',
    variant: 'circle'
  },
  {
    id: 'rbs',
    name: 'Riyadh Business Solutions',
    label: 'Digital & Consulting',
    variant: 'square'
  },
  {
    id: 'spl',
    name: 'Saudi Prime Logistics',
    label: 'Supply Chain & Logistics',
    variant: 'triangle'
  },
  {
    id: 'anf',
    name: 'Al Noor Facilities',
    label: 'Integrated Facility Services',
    variant: 'hex'
  },
  {
    id: 'vem',
    name: 'Vision Edge Media',
    label: 'Media & Branding',
    variant: 'line'
  },
  {
    id: 'afp',
    name: 'Apex Financial Partners',
    label: 'Financial Advisory',
    variant: 'grid'
  }
];

function LogoMark({ variant }: { variant: string }) {
  const common = 'relative flex items-center justify-center w-14 h-14 rounded-xl border border-gray-200 text-text-main';

  if (variant === 'circle') {
    return (
      <div className={`${common} bg-white`}>
        <div className="absolute inset-0 rounded-full border border-primary/20" />
        <div className="relative z-10 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">GH</div>
      </div>
    );
  }

  if (variant === 'square') {
    return (
      <div className={`${common} bg-white p-1`}>
        <div className="relative z-10 w-8 h-8 rounded-sm border border-primary/25 bg-primary/5 flex items-center justify-center text-xs font-bold text-primary">RB</div>
      </div>
    );
  }

  if (variant === 'triangle') {
    return (
      <div className={`${common} bg-white p-1`}>
        <div className="relative z-10 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-primary/20" />
      </div>
    );
  }

  if (variant === 'hex') {
    return (
      <div className={`${common} bg-white p-1`}>
        <div className="relative z-10 w-8 h-8 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-xs font-bold text-primary">AN</div>
      </div>
    );
  }

  if (variant === 'line') {
    return (
      <div className={`${common} bg-white p-1`}>
        <div className="relative z-10 w-8 h-8 border-t-2 border-b-2 border-primary/20 flex items-center justify-center text-xs font-bold text-primary">VE</div>
      </div>
    );
  }

  return (
    <div className={`${common} bg-white`}>
      <div className="relative z-10 w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center text-xs font-bold text-primary">AP</div>
    </div>
  );
}

export default function TrustedPartners() {
  const { t } = useLanguage();

  return (
    <section id="trusted" className="py-20 bg-bg-light overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm uppercase tracking-wider text-primary font-semibold inline-block relative"
          >
            {t.trustedPartners.title}
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '3.5rem', opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="block h-0.5 bg-primary rounded-full mt-2 mx-auto"
            />
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl font-bold mt-3"
          >
            {t.trustedPartners.subtitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-text-muted mt-4 leading-relaxed"
          >
            {t.trustedPartners.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch">
          {trustedCompanies.map((company, index) => (
            <motion.article
              key={company.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.35 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative min-h-[165px] rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_34px_rgba(0,0,0,0.12)] border-primary/10 hover:border-primary/30 p-5 flex flex-col items-center text-center transition-all duration-300"
            >
              <div className="relative mb-4">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center justify-center"
                >
                  <LogoMark variant={company.variant} />
                </motion.div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </div>

              <h3 className="text-base font-semibold text-text-main transition-colors duration-250 group-hover:text-primary mb-1">{company.name}</h3>
              <p className="text-sm text-text-muted">{company.label}</p>

              <motion.span
                layout
                className="absolute bottom-4 left-1/2 -translate-x-1/2 h-0.5 w-12 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
