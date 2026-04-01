import React from 'react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Speed in Black */}
        <text x="0" y="40" fontFamily="Montserrat" fontWeight="800" fontSize="32" fill="#1A1A1A">Speed</text>
        {/* Up in Green */}
        <text x="105" y="40" fontFamily="Montserrat" fontWeight="800" fontSize="32" fill="#8CC63F">Up</text>
        
        {/* Bar chart and Arrow icon above the text */}
        <rect x="85" y="25" width="4" height="6" fill="#1A1A1A" />
        <rect x="92" y="20" width="4" height="11" fill="#1A1A1A" />
        <rect x="99" y="15" width="4" height="16" fill="#1A1A1A" />
        <path d="M106 10L111 0L116 10H106Z" fill="#1A1A1A" />
        <rect x="109" y="10" width="4" height="15" fill="#1A1A1A" />

        {/* Services below */}
        <text x="85" y="55" fontFamily="Montserrat" fontWeight="400" fontSize="10" fill="#1A1A1A" letterSpacing="0.4em">SERVICES</text>
      </svg>
    </div>
  );
}
