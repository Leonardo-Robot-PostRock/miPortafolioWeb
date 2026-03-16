import { motion } from 'framer-motion';
import { Section } from '@/components/core/Section';
import { SkillBadge } from '@/components/ui/SkillBadge';
import type { SkillCategory } from '@/data/portfolio';
import { fadeInUp } from '@/utils/motion-config';
import { useTranslations, tr } from '@/i18n';

interface SkillsProps {
  skills: SkillCategory[];
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

export function Skills({ skills }: SkillsProps) {
  const { t, locale } = useTranslations();
  return (
    <Section
      id="skills"
      title={t('skills.title')}
      subtitle={t('skills.subtitle')}
    >
      <div className="space-y-16">
        {skills.map((category) => (
          <motion.div
            key={tr(category.name, locale)}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <p className="type-caption text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-secondary)] mb-6">
              {tr(category.name, locale)}
            </p>
            <motion.div
              variants={gridStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
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
