import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        'bg-[var(--color-surface)] rounded-[var(--radius-lg)]',
        'border border-[var(--color-border)]',
        'overflow-hidden',
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
