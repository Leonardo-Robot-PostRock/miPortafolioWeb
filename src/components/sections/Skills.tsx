import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Section } from '@/components/core/Section';
import { SkillBadge } from '@/components/ui/SkillBadge';
import type { SkillCategory } from '@/data/portfolio';
import { fadeInUp } from '@/utils/motion-config';
import { useTranslations, tr, type Locale } from '@/i18n';

// ─── Tailwind class constants ──────────────────────────────────────────────
const CARD_SURFACE =
  'snap-start shrink-0 w-[min(92vw,420px)] rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] ring-1 ring-[var(--color-border)] shadow-[0_0_18px_var(--color-glow)] overflow-hidden relative p-4';
const CATEGORY_LABEL =
  'type-caption font-semibold uppercase tracking-[0.15em] text-[var(--color-text-secondary)]';
const PROGRESS_TRACK =
  'mt-2 h-1 rounded-full bg-[var(--color-separator)] overflow-hidden';
const PROGRESS_FILL =
  'h-full bg-[var(--color-primary)] transition-[width] duration-150';
const SKILL_GRID = 'hidden md:flex flex-wrap gap-4';
// ──────────────────────────────────────────────────────────────────────────

interface SkillsProps {
  skills: SkillCategory[];
}

interface MobileSkillsCarouselProps {
  skills: SkillCategory[];
  locale: Locale;
}

const gridStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const tileVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
};

function MobileSkillsCarousel({ skills, locale }: MobileSkillsCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  const onTrackScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) {
      setProgress(0);
      return;
    }

    const nextProgress = (track.scrollLeft / maxScroll) * 100;
    setProgress(Math.max(0, Math.min(100, nextProgress)));
  };

  return (
    <div className="md:hidden">
      <div
        ref={trackRef}
        onScroll={onTrackScroll}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 pr-10 scrollbar-global"
      >
        {skills.map((category) => (
          <div key={tr(category.name, locale)} className={CARD_SURFACE}>
            <div className="pointer-events-none absolute inset-0 opacity-50" style={{ background: 'radial-gradient(90% 60% at 50% 0%, var(--color-glow) 0%, transparent 70%)' }} />
            <p className={`${CATEGORY_LABEL} text-[10px] mb-3 relative`}>
              {tr(category.name, locale)}
            </p>
            <div className="grid grid-cols-3 gap-2 relative">
              {category.items.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {skills.length > 1 && (
        <div className={PROGRESS_TRACK}>
          <div
            className={PROGRESS_FILL}
            style={{ width: `${Math.max(14, progress)}%` }}
          />
        </div>
      )}
    </div>
  );
}

export function Skills({ skills }: SkillsProps) {
  const { t, locale } = useTranslations();
  return (
    <Section
      id="skills"
      title={t('skills.title')}
      subtitle={t('skills.subtitle')}
    >
      <MobileSkillsCarousel skills={skills} locale={locale} />

      <div className="hidden md:block space-y-16 lg:space-y-10">
        {skills.map((category) => (
          <motion.div
            key={tr(category.name, locale)}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <p className={`${CATEGORY_LABEL} text-xs mb-6 lg:mb-4`}>
              {tr(category.name, locale)}
            </p>

            <motion.div
              variants={gridStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={SKILL_GRID}
            >
              {category.items.map((skill) => (
                <motion.div key={skill} variants={tileVariant}>
                  <SkillBadge skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
