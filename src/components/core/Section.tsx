import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-24 md:scroll-mt-28 py-20 md:py-32 px-6 md:px-8', className)}
    >
      <div className="max-w-[var(--content-max)] mx-auto">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-16 md:mb-10"
          >
            {title && (
              <h2 className="type-heading font-semibold text-4xl md:text-5xl mb-4 text-[var(--color-text)]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="type-body text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
