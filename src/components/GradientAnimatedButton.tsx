import React from 'react';
import { motion } from 'motion/react';

interface GradientAnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function GradientAnimatedButton({ 
  children, 
  onClick, 
  className = '', 
  type = 'button',
  disabled = false
}: GradientAnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative inline-block group ${className}`}
    >
      {/* Animated Border Layer */}
      <div className="absolute -inset-[1px] rounded-full bg-white/20" />
      <div className="absolute -inset-[1px] rounded-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.8)_50%,transparent_100%)] bg-[length:200%_200%] animate-[border-flow_3s_linear_infinite]" />
      
      {/* Inner Gradient Button */}
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className="relative flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium text-white bg-primary-gradient transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full h-full"
      >
        {children}
      </button>
    </motion.div>
  );
}
