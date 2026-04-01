import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Footer() {
  const { isArabic, t } = useLanguage();

  return (
    <footer className="bg-footer-bg text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className={`space-y-6 ${isArabic ? 'text-right' : 'text-left'}`}>
            <h2 className="text-2xl font-bold text-primary">{t.footer.brandTitle}</h2>
            <p className="text-gray-400 text-sm">{t.footer.brandSubtitle}</p>
            <p className="text-gray-500 text-xs">{t.footer.country}</p>
          </div>

          {/* Links */}
          <div className={`space-y-6 ${isArabic ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg font-bold">{t.footer.quickLinksTitle}</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              {t.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={`space-y-6 ${isArabic ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg font-bold">{t.footer.contactTitle}</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a 
                  href="mailto:info@speedupservices.com" 
                  className="hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  {t.footer.contact.general}
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hr@speedupservices.com" 
                  className="hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  {t.footer.contact.careers}
                </a>
              </li>
              <li>
                <a 
                  href="tel:+918108102609"
                  className="hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  {t.footer.contact.call}
                </a>
              </li>
              <li>{t.footer.contact.address}</li>
            </ul>
          </div>

          {/* Socials */}
          <div className={`space-y-6 ${isArabic ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg font-bold">{t.footer.followTitle}</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/speedupservices" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors" aria-label="Visit our Facebook page">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/speedupservices" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors" aria-label="Visit our Instagram page">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/speedupservices" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors" aria-label="Visit our LinkedIn page">
                <Linkedin size={20} />
              </a>
              <a href="https://www.twitter.com/speedupservices" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors" aria-label="Visit our Twitter page">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
