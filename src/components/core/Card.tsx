import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { SURFACE_CARD } from '@/utils/tw-classes';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        SURFACE_CARD,
        'rounded-[var(--radius-lg)] overflow-hidden',
        hover && 'cursor-pointer',
        className
      )}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
            }
          : undefined
      }
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
