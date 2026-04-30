import type { Experience } from '@/data/portfolio';
import { useTranslations, tr } from '@/i18n';
import { TECH_BADGE } from '@/utils/tw-classes';

interface ExperienceItemProps {
  experience: Experience;
  /** Cuando true, el item omite su propio borde/dot — el grupo padre los provee */
  isGrouped?: boolean;
}

export function ExperienceItem({ experience, isGrouped = false }: ExperienceItemProps) {
  const { t, locale } = useTranslations();

  const content = (
    <div>
      <div className="mb-4">
        <h3 className="type-heading font-semibold text-2xl text-[var(--color-text)] mb-1">
          {tr(experience.role, locale)}
        </h3>
        <div className="flex flex-wrap items-center gap-3 type-caption text-base text-[var(--color-text-secondary)]">
          {!isGrouped && (
            <span className="font-semibold text-[var(--color-primary)]">
              {experience.company}
            </span>
          )}
          {!isGrouped && experience.location && <span>•</span>}
          {experience.location && <span>{experience.location}</span>}
          {(isGrouped || experience.location) && <span>•</span>}
          <span>
            {tr(experience.startDate, locale)} — {tr(experience.endDate, locale)}
          </span>
        </div>
      </div>

      <p className="type-body text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
        {tr(experience.description, locale)}
      </p>

      {experience.achievements && experience.achievements.length > 0 && (
        <div className="space-y-3">
          <h4 className="type-heading font-semibold text-base text-[var(--color-text)] mb-3">
            {t('experience.impact')}
          </h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <li
                key={idx}
                className="flex gap-3 type-body text-base text-[var(--color-text-secondary)]"
              >
                <span className="text-[var(--color-primary)] font-bold mt-1">▸</span>
                <span>{tr(achievement, locale)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {experience.techStack && experience.techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6">
          {experience.techStack.map((tech) => (
            <span
              key={tech}
              className={`${TECH_BADGE} bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)]`}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  if (isGrouped) return content;

  return (
    <div className="relative pl-8 md:pl-12 border-l-2 border-[var(--color-border)]">
      <div className="absolute left-0 top-2 w-4 h-4 -ml-[9px] rounded-full bg-[var(--color-primary)] ring-4 ring-[var(--color-background)]" />
      {content}
    </div>
  );
}
