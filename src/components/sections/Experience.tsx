import { motion } from 'framer-motion';
import { Section } from '@/components/core/Section';
import { ExperienceItem } from '@/components/ui/ExperienceItem';
import type { Experience as ExperienceType, Education, Translatable } from '@/data/portfolio';
import { staggerContainer, fadeInUp } from '@/utils/motion-config';
import { useTranslations, tr } from '@/i18n';
import { SURFACE_CARD, SECTION_SUBHEADING } from '@/utils/tw-classes';

interface ExperienceProps {
  experiences: ExperienceType[];
  education?: Education[];
  expertise?: Translatable[];
}

export function Experience({ experiences, education, expertise }: ExperienceProps) {
  const { t, locale } = useTranslations();
  return (
    <Section id="experience" title={t('experience.title')} subtitle={t('experience.subtitle')}>
      {expertise && expertise.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mb-16 p-8 rounded-2xl ${SURFACE_CARD}`}
        >
          <h3 className={`${SECTION_SUBHEADING} mb-6`}>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expertise.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <svg
                  className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="type-body text-lg text-[var(--color-text)]">
                  {tr(item, locale)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-12"
      >
        {experiences.map((exp) => (
          <motion.div key={exp.id} variants={fadeInUp}>
            <ExperienceItem experience={exp} />
          </motion.div>
        ))}
      </motion.div>

      {education && education.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-16 p-8 rounded-2xl ${SURFACE_CARD}`}
        >
          <h3 className={`${SECTION_SUBHEADING} mb-6`}>
            {t('education.title')}
          </h3>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="flex flex-col md:flex-row md:items-center gap-4">
                <div>
                  <h4 className="type-subheading font-semibold text-lg text-[var(--color-text)]">
                    {tr(edu.title, locale)} - {edu.institution}
                  </h4>
                  <p className="type-body text-sm text-[var(--color-muted)]">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}  
    </Section>
  );
}
