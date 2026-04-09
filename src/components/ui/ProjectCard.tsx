import { Card } from '@/components/core/Card';
import { motion } from 'framer-motion';
import { SmartImage } from '@/components/core/SmartImage';
import type { Project } from '@/data/portfolio';
import { useTranslations, tr } from '@/i18n';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t, locale } = useTranslations();
  return (
    <a href={`/proyecto/${project.slug}`} className="block h-full">
      <Card className="h-full flex flex-col">
        {project.image && (
          <div className="aspect-video overflow-hidden bg-[var(--color-surface)]">
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <SmartImage
                image={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                loading="lazy"
              />
            </motion.div>
          </div>
        )}

        <div className="p-6 flex flex-col flex-1">
          <h3 className="type-heading text-xl mb-2 text-[var(--color-text)]">
            {project.title}
          </h3>

          <p className="type-body text-[var(--color-text-secondary)] mb-4 leading-relaxed line-clamp-3 flex-1">
            {tr(project.shortDescription, locale)}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="type-caption font-medium text-xs px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="type-caption font-medium text-xs px-3 py-1 text-[var(--color-text-secondary)]">
                +{project.techStack.length - 4} {t('projects.more')}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 pt-4 border-t border-[var(--color-separator)] text-[var(--color-primary)] type-caption font-semibold text-sm">
            {t('projects.viewProject')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Card>
    </a>
  );
}
