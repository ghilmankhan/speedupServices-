import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Menu, X, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Get Quotation', href: '#quote' },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6">
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md border border-gray-100 rounded-[2rem] shadow-sm overflow-hidden">
        <div className="flex items-center justify-between py-3 px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium hover:text-primary-green transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Socials */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/speedupservices" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-primary-green transition-colors" aria-label="Visit our Facebook page">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/speedupservices" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-primary-green transition-colors" aria-label="Visit our Instagram page">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/speedupservices" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-primary-green transition-colors" aria-label="Visit our LinkedIn page">
                <Linkedin size={18} />
              </a>
              <a href="https://www.twitter.com/speedupservices" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-primary-green transition-colors" aria-label="Visit our Twitter page">
                <Twitter size={18} />
              </a>
            </div>

            <motion.a
              href="tel:+918108102609"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                relative overflow-hidden
                flex items-center gap-3
                px-7 py-4
                rounded-full
                bg-[#8CC63F]
                text-white
                font-semibold
                text-lg
                shadow-[0_10px_30px_rgba(140,198,63,0.25)]
              "
              aria-label="Call +91 8108102609"
            >
              <motion.div
                animate={{
                  rotate: [0, -8, 8, 0],
                  scale: [1, 1.06, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10"
              >
                <Phone size={20} />
              </motion.div>

              <span className="relative z-10">+91 8108102609</span>

              <motion.div
                className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['0%', '250%'] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-text-main"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/95 px-8 py-6 space-y-4 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium hover:text-primary-green transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
              <a href="https://www.facebook.com/speedupservices" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-primary-green transition-colors" aria-label="Visit our Facebook page">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/speedupservices" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-primary-green transition-colors" aria-label="Visit our Instagram page">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/speedupservices" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-primary-green transition-colors" aria-label="Visit our LinkedIn page">
                <Linkedin size={20} />
              </a>
              <a href="https://www.twitter.com/speedupservices" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-primary-green transition-colors" aria-label="Visit our Twitter page">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
