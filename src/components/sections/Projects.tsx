import { motion } from 'framer-motion';
import { Section } from '@/components/core/Section';
import { ProjectCard } from '@/components/ui/ProjectCard';
import type { Project } from '@/data/portfolio';
import { staggerContainer, fadeInUp } from '@/utils/motion-config';
import { useTranslations } from '@/i18n';

interface ProjectsProps {
  projects: Project[];
  featured?: boolean;
}

export function Projects({ projects, featured = false }: ProjectsProps) {
  const { t } = useTranslations();
  const displayProjects = featured
    ? projects.filter((p) => p.featured).slice(0, 8)
    : projects;

  const professionalProjects = displayProjects.filter((p) => p.category === 'professional');
  const educationalProjects = displayProjects.filter((p) => p.category === 'educational');

  return (
    <Section
      id="projects"
      title={featured ? t('projects.featured') : t('projects.all')}
      subtitle={
        featured
          ? t('projects.featuredSubtitle')
          : t('projects.allSubtitle')
      }
    >
      {/* Professional Projects */}
      {professionalProjects.length > 0 && (
        <div className="mb-16">
          <h3 className="type-heading font-semibold text-2xl mb-8 text-[var(--color-text)]">
            {t('projects.professional')}
          </h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {professionalProjects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Educational Projects */}
      {educationalProjects.length > 0 && (
        <div>
          <h3 className="type-heading font-semibold text-2xl mb-8 text-[var(--color-text)]">
            {t('projects.educational')}
          </h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {educationalProjects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {featured && projects.length > 6 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/proyectos"
            className="inline-flex items-center gap-2 type-heading text-lg text-[var(--color-primary)] hover:underline"
          >
            {t('projects.viewAll')}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      )}
    </Section>
  );
}
