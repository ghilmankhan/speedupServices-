import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n';

export default function TrustedPartners() {
  const { isArabic, t } = useLanguage();
  const companies = t.trustedPartners.companies;

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

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {companies.map((company, index) => (
            <motion.article
              key={company.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.35 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative min-h-[235px] rounded-3xl border border-primary/10 bg-white/95 px-6 pt-8 pb-6 text-center backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_22px_50px_rgba(140,198,63,0.16)]"
            >
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(140,198,63,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center">
                <div className="relative mb-5 flex h-[72px] w-full items-center justify-center">
                  <div
                    className={`flex items-center justify-center transition-all duration-500 ${company.logoWrapperClass} ${
                      company.useDarkLogoPanel
                        ? 'relative overflow-hidden rounded-2xl px-5 py-3 border border-[#2D6E3F] bg-[#1F5E34] shadow-[0_14px_34px_rgba(31,94,52,0.26)] transition-all duration-500 group-hover:bg-[#2E7D32] group-hover:border-[#8BCF2F] group-hover:shadow-[0_18px_42px_rgba(140,198,63,0.28)]'
                        : ''
                    }`}
                  >
                    {company.useDarkLogoPanel && (
                      <div className="pointer-events-none absolute inset-0 rounded-2xl">
                        <div className="absolute inset-x-0 top-0 h-[45%] rounded-t-2xl bg-white/10" />
                        <div className="absolute -top-6 left-1/2 h-10 w-16 -translate-x-1/2 rounded-full bg-[#A8E632]/18 blur-xl" />
                      </div>
                    )}
                    <img
                      src={company.logo}
                      alt={company.name[isArabic ? 'ar' : 'en']}
                      className={`relative z-10 ${company.logoClass} transition-all duration-500 group-hover:scale-105`}
                    />
                  </div>
                </div>

                <h3 className="mb-1 text-[13px] font-semibold text-text-main transition-colors duration-250 group-hover:text-primary sm:text-sm">
                  {company.name[isArabic ? 'ar' : 'en']}
                </h3>
                <p className="text-[13px] text-text-muted sm:text-sm">
                  {company.label[isArabic ? 'ar' : 'en']}
                </p>
              </div>

              <motion.span
                layout
                className="absolute bottom-5 left-1/2 h-0.5 w-12 -translate-x-1/2 rounded-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
