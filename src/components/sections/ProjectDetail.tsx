import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '@/components/core/Button';
import { SmartImage } from '@/components/core/SmartImage';
import type { Project } from '@/data/portfolio';
import type { ImageSource } from '@/data/types';
import { useTranslations, tr } from '@/i18n';

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { t, locale } = useTranslations();
  const [selectedImage, setSelectedImage] = useState<{
    image: ImageSource;
    alt: string;
    caption?: string;
  } | null>(null);
  const heroFrameClassName =
    'relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] ring-1 ring-[var(--color-border)] shadow-[0_0_28px_var(--color-glow)]';
  const galleryFrameClassName =
    'relative rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] ring-1 ring-[var(--color-border)] shadow-[0_0_18px_var(--color-glow)]';
  const heroGlowStyle = {
    background: 'radial-gradient(120% 70% at 50% 0%, var(--color-glow) 0%, transparent 65%)',
  } as const;
  const galleryGlowStyle = {
    background: 'radial-gradient(90% 60% at 50% 0%, var(--color-glow) 0%, transparent 70%)',
  } as const;

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Back */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 mb-8">
        <a
          href="/#projects"
          className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] type-caption font-medium transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t('detail.back')}
        </a>
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-6 md:px-8 mb-16"
      >
        <h1 className="type-display font-semibold text-5xl md:text-6xl mb-6 text-[var(--color-text)]">
          {project.title}
        </h1>

        <p className="type-body text-xl md:text-2xl text-[var(--color-text-secondary)] mb-8 leading-relaxed max-w-3xl">
          {tr(project.shortDescription, locale)}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-8 mb-8">
          {project.client && (
            <div>
              <p className="type-caption font-medium text-xs text-[var(--color-text-secondary)] mb-1 uppercase tracking-wider">
                {t('detail.client')}
              </p>
              <p className="type-body text-base text-[var(--color-text)]">{project.client}</p>
            </div>
          )}
          {project.year && (
            <div>
              <p className="type-caption font-medium text-xs text-[var(--color-text-secondary)] mb-1 uppercase tracking-wider">
                {t('detail.year')}
              </p>
              <p className="type-body text-base text-[var(--color-text)]">{project.year}</p>
            </div>
          )}
          {project.role && (
            <div>
              <p className="type-caption font-medium text-xs text-[var(--color-text-secondary)] mb-1 uppercase tracking-wider">
                {t('detail.role')}
              </p>
              <p className="type-body text-base text-[var(--color-text)]">{tr(project.role, locale)}</p>
            </div>
          )}
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="type-caption font-medium text-sm px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mt-2">
          {project.liveUrl && project.showDemo !== false && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[var(--color-primary)] text-[var(--color-primary-foreground)] type-caption font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-[0_0_20px_var(--color-glow)] active:scale-[0.98]"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {t('detail.demo')}
            </a>
          )}
          {project.repoUrl && project.showRepo !== false && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)] type-caption font-semibold text-sm transition-all duration-200 hover:bg-[var(--color-hover)] hover:border-[var(--color-primary)] active:scale-[0.98]"
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.021C22 6.484 17.522 2 12 2z" />
              </svg>
              {t('detail.code')}
            </a>
          )}
        </div>
      </motion.div>

      {/* Hero image */}
      {project.image && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 md:px-8 mb-20"
        >
            <div className={heroFrameClassName}>
              <div className="pointer-events-none absolute inset-0 opacity-70" style={heroGlowStyle} />
              <SmartImage
                image={project.image}
                alt={project.title}
                className="relative w-full h-auto"
                loading="eager"
                fetchPriority="high"
              />
          </div>
        </motion.div>
      )}

      {/* Case study content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-3xl mx-auto px-6 md:px-8 space-y-16"
      >
        {project.challenge && (
          <div>
            <h2 className="type-heading font-semibold text-3xl mb-6 text-[var(--color-text)]">
              {t('detail.challenge')}
            </h2>
            <p className="type-body text-lg text-[var(--color-text-secondary)] leading-relaxed">
              {tr(project.challenge, locale)}
            </p>
          </div>
        )}

        {project.solution && (
          <div>
            <h2 className="type-heading font-semibold text-3xl mb-6 text-[var(--color-text)]">
              {t('detail.solution')}
            </h2>
            <p className="type-body text-lg text-[var(--color-text-secondary)] leading-relaxed">
              {tr(project.solution, locale)}
            </p>
          </div>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <div>
            <h2 className="type-heading font-semibold text-3xl mb-6 text-[var(--color-text)]">
              {t('detail.screenshots')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, idx) => (
                <div key={idx} className={galleryFrameClassName}>
                  <button
                    type="button"
                    className="block w-full text-left cursor-pointer"
                    aria-label={img.caption ? tr(img.caption, locale) : `Screenshot ${idx + 1}`}
                    onClick={() =>
                      setSelectedImage({
                        image: img.image,
                        alt: img.caption ? tr(img.caption, locale) : `Screenshot ${idx + 1}`,
                        caption: img.caption ? tr(img.caption, locale) : undefined,
                      })
                    }
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-65" style={galleryGlowStyle} />
                    <SmartImage
                      image={img.image}
                      alt={img.caption ? tr(img.caption, locale) : `Screenshot ${idx + 1}`}
                      className="relative w-full transition-transform duration-300 ease-out hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </button>
                  {img.caption && (
                    <p className="type-caption text-sm text-[var(--color-text-secondary)] mt-2 text-center">
                      {tr(img.caption, locale)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {project.results && project.results.length > 0 && (
          <div>
            <h2 className="type-heading font-semibold text-3xl mb-6 text-[var(--color-text)]">
              {t('detail.results')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.results.map((result, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]"
                >
                  <div className="type-display font-semibold text-4xl text-[var(--color-primary)] mb-2">
                    {result.metric}
                  </div>
                  <p className="type-body text-base text-[var(--color-text-secondary)]">
                    {tr(result.description, locale)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.learnings && project.learnings.length > 0 && (
          <div>
            <h2 className="type-heading font-semibold text-3xl mb-6 text-[var(--color-text)]">
              {t('detail.learnings')}
            </h2>
            <ul className="space-y-4">
              {project.learnings.map((learning, idx) => (
                <li
                  key={idx}
                  className="flex gap-4 type-body text-lg text-[var(--color-text-secondary)]"
                >
                  <span className="text-[var(--color-primary)] font-bold">•</span>
                  <span>{tr(learning, locale)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>

      {/* Navigation */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 mt-24 pt-12 border-t border-[var(--color-separator)]">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 type-heading font-semibold text-lg text-[var(--color-primary)] hover:underline"
        >
          {t('detail.moreProjects')}
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded screenshot"
        >
          <div
            className="relative max-w-6xl w-full rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_0_28px_var(--color-glow)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--color-hover)] transition-colors cursor-pointer"
              aria-label="Close image"
            >
              x
            </button>
            <SmartImage image={selectedImage.image} alt={selectedImage.alt} className="w-full max-h-[82vh] object-contain" loading="eager" />
            {selectedImage.caption && (
              <p className="type-caption text-sm text-[var(--color-text-secondary)] text-center px-6 py-4 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
                {selectedImage.caption}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
