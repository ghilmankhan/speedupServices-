import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Menu, X } from 'lucide-react';
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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-primary-green transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-primary-green transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-primary-green transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-primary-green transition-colors">
              <Twitter size={18} />
            </a>
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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-primary-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-primary-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-primary-green transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-primary-green transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
