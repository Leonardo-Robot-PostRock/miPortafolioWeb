import { motion } from 'framer-motion';
import { getSkillIcon } from '@/data/skillIcons';

interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  const { icon, brandColor } = getSkillIcon(skill);

  return (
    <motion.div
      className="group relative w-full aspect-square md:w-[112px] md:h-[112px] md:aspect-auto shrink-0 flex flex-col items-center justify-center gap-3 p-3 md:p-4 rounded-2xl
        bg-[var(--color-surface)]/50 backdrop-blur-md
        border border-[var(--color-border)]
        cursor-default select-none"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      style={{
        '--_brand': brandColor,
      } as React.CSSProperties}
    >
      {/* Glow ring on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `0 0 0 1px ${brandColor}30, 0 8px 32px -8px ${brandColor}20`,
        }}
      />

      {/* Icon */}
      <div
        className="w-9 h-9 transition-all duration-300 group-hover:scale-110"
        style={{ color: brandColor !== 'currentColor' ? brandColor : undefined }}
      >
        {icon}
      </div>

      {/* Label */}
      <span className="type-caption font-medium text-xs text-[var(--color-text-secondary)] group-hover:text-[var(--color-text)] transition-colors duration-300 text-center leading-tight">
        {skill}
      </span>
    </motion.div>
  );
}
