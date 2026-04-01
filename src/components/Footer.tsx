import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary-green">Speedup Services</h2>
            <p className="text-gray-400 text-sm">Integrated Facility Management & Manpower Solutions</p>
            <p className="text-gray-500 text-xs">Kingdom of Saudi Arabia</p>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a 
                  href="mailto:info@speedupservices.com" 
                  className="hover:text-primary-green transition-colors duration-300 cursor-pointer"
                >
                  General: info@speedupservices.com
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hr@speedupservices.com" 
                  className="hover:text-primary-green transition-colors duration-300 cursor-pointer"
                >
                  Careers: hr@speedupservices.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+918108102609"
                  className="hover:text-primary-green transition-colors duration-300 cursor-pointer"
                >
                  Call us: +91 81081 02609
                </a>
              </li>
              <li>Address: Kingdom of Saudi Arabia</li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          © 2026 Speedup Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
