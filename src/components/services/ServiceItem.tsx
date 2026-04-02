import React from 'react';
import { ArrowRight, CircleDot } from 'lucide-react';
import { motion } from 'motion/react';
import { ServiceItemData } from './types';

interface ServiceItemProps {
  item: ServiceItemData;
  isArabic: boolean;
  index: number;
  isActive?: boolean;
  onSelect: (item: ServiceItemData) => void;
  onHover?: (item: ServiceItemData) => void;
}

export function ServiceItem({
  item,
  isArabic,
  index,
  isActive = false,
  onSelect,
  onHover,
}: ServiceItemProps) {
  const title = isArabic ? item.title.ar : item.title.en;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.07 * index, duration: 0.36 }}
      onMouseEnter={() => onHover?.(item)}
      onFocus={() => onHover?.(item)}
      onClick={() => onSelect(item)}
      className={`group flex w-full cursor-pointer items-center gap-3 rounded-2xl border px-3 py-2.5 text-[15px] leading-5 text-text-muted transition duration-300 ${
        isActive
          ? 'border-primary/20 bg-primary-soft/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_10px_24px_rgba(140,198,63,0.10)]'
          : 'border-transparent'
      } hover:border-primary/15 hover:bg-primary-soft/55 hover:shadow-[0_12px_26px_rgba(140,198,63,0.08)] focus:border-primary/15 focus:bg-primary-soft/55 ${isArabic ? 'text-right' : 'text-left'}`}
    >
      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-primary transition duration-300 ${
        isActive
          ? 'bg-primary/14 text-primary-dark shadow-[0_0_0_8px_rgba(140,198,63,0.14)]'
          : 'bg-primary/8'
      } group-hover:bg-primary/12 group-hover:text-primary-dark group-hover:shadow-[0_0_0_8px_rgba(140,198,63,0.12)] group-focus:bg-primary/12 group-focus:text-primary-dark`}>
        <CircleDot className="h-4 w-4" />
      </span>
      <span className={`flex-1 translate-x-0 font-medium transition-all duration-300 group-hover:translate-x-[6px] group-hover:text-text-main group-focus:translate-x-[6px] group-focus:text-text-main ${
        isActive ? 'text-text-main' : 'text-text-main'
      }`}>
        {title}
      </span>
      <span className={`transition-all duration-300 ${
        isActive ? 'opacity-100' : 'opacity-0'
      } ${isArabic ? 'translate-x-0 group-hover:-translate-x-[6px] group-focus:-translate-x-[6px]' : '-translate-x-1 group-hover:translate-x-0 group-focus:translate-x-0'} group-hover:opacity-100 group-focus:opacity-100`}>
        <ArrowRight className={`h-4 w-4 text-primary ${isArabic ? 'rotate-180' : ''}`} />
      </span>
    </motion.button>
  );
}
