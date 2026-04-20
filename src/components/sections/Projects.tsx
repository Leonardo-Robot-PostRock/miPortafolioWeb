import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Section } from '@/components/core/Section';
import { SmartImage } from '@/components/core/SmartImage';
import { ProjectCard } from '@/components/ui/ProjectCard';
import type { Project } from '@/data/portfolio';
import { staggerContainer, fadeInUp } from '@/utils/motion-config';
import { useTranslations, tr } from '@/i18n';
import { SECTION_SUBHEADING, PROJECTS_DESKTOP_GRID } from '@/utils/tw-classes';

interface ProjectsProps {
  projects: Project[];
  featured?: boolean;
}

interface MobileCarouselProps {
  projects: Project[];
  locale: 'es' | 'en';
  viewProjectLabel: string;
}

function MobileProjectsCarousel({ projects, locale, viewProjectLabel }: MobileCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = () => {
    const track = trackRef.current;
    if (!track) return;

    const firstSlide = track.querySelector<HTMLElement>('[data-slide]');
    if (!firstSlide) return;

    const slideWidth = firstSlide.offsetWidth;
    const gap = 12; // gap-3
    const index = Math.round(track.scrollLeft / (slideWidth + gap));
    setActiveIndex(Math.max(0, Math.min(projects.length - 1, index)));
  };

  const goToSlide = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const firstSlide = track.querySelector<HTMLElement>('[data-slide]');
    if (!firstSlide) return;

    const slideWidth = firstSlide.offsetWidth;
    const gap = 12;
    track.scrollTo({ left: index * (slideWidth + gap), behavior: 'smooth' });
    setActiveIndex(index);
  };

  return (
    <div className="md:hidden">
      <div
        ref={trackRef}
        onScroll={updateActiveIndex}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 pr-10 scrollbar-global"
      >
        {projects.map((project) => (
          <a
            key={project.id}
            data-slide
            href={`/project/${project.slug}`}
            className="snap-start shrink-0 w-[84%] sm:w-[62%] rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden ring-1 ring-[var(--color-border)] shadow-[0_10px_28px_var(--color-glow)]"
          >
            {project.image && (
              <div className="aspect-video overflow-hidden">
                <SmartImage image={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" sizes="(max-width: 640px) 84vw, 62vw" />
              </div>
            )}
            <div className="p-4">
              <p className="type-heading text-lg text-[var(--color-text)] leading-tight mb-2 line-clamp-2">
                {project.title}
              </p>
              <p className="type-body text-sm text-[var(--color-text-secondary)] mb-3 line-clamp-2">
                {tr(project.shortDescription, locale)}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="type-caption text-[10px] font-semibold px-2 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-text)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="type-caption text-xs font-semibold text-[var(--color-text)] flex items-center gap-1">
                {viewProjectLabel}
                <span aria-hidden="true">→</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {projects.length > 1 && (
        <div className="mt-2 flex justify-center">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              aria-label={`${locale === 'es' ? 'Ir al proyecto' : 'Go to project'} ${index + 1}`}
              onClick={() => goToSlide(index)}
              className="h-6 min-w-[24px] px-1 flex items-center justify-center"
            >
              <span
                className={`block h-1.5 w-6 rounded-full origin-center transition-transform duration-200 ${
                  index === activeIndex
                    ? 'scale-x-100 bg-[var(--color-primary)]'
                    : 'scale-x-[0.25] bg-[var(--color-text-secondary)]/45'
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Projects({ projects, featured = false }: ProjectsProps) {
  const { t, locale } = useTranslations();
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
          <h3 className={`${SECTION_SUBHEADING} mb-8`}>
            {t('projects.professional')}
          </h3>

          <MobileProjectsCarousel
            projects={professionalProjects}
            locale={locale}
            viewProjectLabel={t('projects.viewProject')}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className={PROJECTS_DESKTOP_GRID}
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
          <h3 className={`${SECTION_SUBHEADING} mb-8`}>
            {t('projects.educational')}
          </h3>

          <MobileProjectsCarousel
            projects={educationalProjects}
            locale={locale}
            viewProjectLabel={t('projects.viewProject')}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className={PROJECTS_DESKTOP_GRID}
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
            href="/projects"
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
