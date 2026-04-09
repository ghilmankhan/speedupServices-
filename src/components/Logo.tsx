import React from 'react';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex-shrink-0 ${className}`}>
      <img
        src="/images/logo.png"
        alt="Speedup Services"
        loading="eager"
        decoding="async"
        className="block h-auto w-[125px] object-contain sm:w-[140px] md:w-[165px] lg:w-[180px]"
      />
    </div>
  );
}
