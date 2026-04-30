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

type ExperienceGroup = { groupId: string; items: ExperienceType[] };
type RenderItem = ExperienceType | ExperienceGroup;

function isGroup(item: RenderItem): item is ExperienceGroup {
  return 'items' in item;
}

function groupExperiences(experiences: ExperienceType[]): RenderItem[] {
  const result: RenderItem[] = [];
  const groupMap = new Map<string, ExperienceGroup>();
  for (const exp of experiences) {
    if (!exp.groupId) {
      result.push(exp);
    } else if (groupMap.has(exp.groupId)) {
      groupMap.get(exp.groupId)!.items.push(exp);
    } else {
      const group: ExperienceGroup = { groupId: exp.groupId, items: [exp] };
      groupMap.set(exp.groupId, group);
      result.push(group);
    }
  }
  return result;
}

function ExperienceGroupBlock({ group }: { group: ExperienceGroup }) {
  const { locale } = useTranslations();
  const { items } = group;
  return (
    <div className="relative pl-8 md:pl-12 border-l-2 border-[var(--color-primary)]">
      <div className="absolute left-0 top-2 w-4 h-4 -ml-[9px] rounded-full bg-[var(--color-primary)] ring-4 ring-[var(--color-background)]" />
      <div className="mb-5">
        <span className="type-heading font-semibold text-lg text-[var(--color-primary)]">
          {items[0].company}
        </span>
        <p className="type-caption text-sm text-[var(--color-muted)] mt-0.5">
          {tr(items[0].startDate, locale)} — {tr(items[items.length - 1].endDate, locale)}
        </p>
      </div>
      <div className="space-y-8 pl-6 border-l border-[var(--color-border)]">
        {items.map((exp) => (
          <ExperienceItem key={exp.id} experience={exp} isGrouped />
        ))}
      </div>
    </div>
  );
}

export function Experience({ experiences, education, expertise }: ExperienceProps) {
  const { t, locale } = useTranslations();
  const renderItems = groupExperiences(experiences);
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
        {renderItems.map((item) =>
          isGroup(item) ? (
            <motion.div key={item.groupId} variants={fadeInUp}>
              <ExperienceGroupBlock group={item} />
            </motion.div>
          ) : (
            <motion.div key={item.id} variants={fadeInUp}>
              <ExperienceItem experience={item} />
            </motion.div>
          )
        )}
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
