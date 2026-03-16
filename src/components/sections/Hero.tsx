import { motion } from 'framer-motion';
import { Button } from '@/components/core/Button';
import { SocialLinks } from '@/components/ui/SocialLinks';
import type { PersonalInfo } from '@/data/portfolio';
import { useTranslations, tr } from '@/i18n';

interface HeroProps {
  data: PersonalInfo;
}

export function Hero({ data }: HeroProps) {
  const { t, locale } = useTranslations();
  return (
    <section id="about" className="scroll-mt-24 md:scroll-mt-28 min-h-screen flex items-center justify-center px-6 md:px-8 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {data.avatar && (
            <motion.img
              src={data.avatar.src}
              alt={data.name}
              className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-[var(--color-primary)] shadow-[0_10px_28px_var(--color-glow)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            />
          )}

          {/* Name — Display Serif */}
          <h1 className="type-display font-semibold text-[length:var(--font-display-size-xl)] tracking-[var(--tracking-tight)] text-[color:var(--color-text)] mb-6">
            {data.name}
          </h1>

          {/* Role — Sans-serif Heading */}
          <p className="type-heading font-medium text-2xl md:text-3xl text-[var(--color-primary)] mb-6">
            {tr(data.role, locale)}
          </p>

          {/* Tagline — Body */}
          <p className="type-body text-lg md:text-xl text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto leading-[1.6]">
            {tr(data.tagline, locale)}
          </p>

          {data.location && (
            <p className="type-caption text-sm text-[var(--color-text-secondary)] mb-8">
              📍 {data.location}
            </p>
          )}

          <SocialLinks links={data.socialLinks} />

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex flex-wrap gap-4 justify-center mt-10"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.viewProjects')}
            </Button>
          </motion.div>

          {/* CV Downloads */}
          {(data.cvEs || data.cvEn) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex gap-3 justify-center mt-6"
            >
              {data.cvEs && (
                <a
                  href={data.cvEs}
                  download
                  className="inline-flex items-center gap-2 type-caption font-medium text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t('hero.cvSpanish')}
                </a>
              )}
              {data.cvEn && (
                <a
                  href={data.cvEn}
                  download
                  className="inline-flex items-center gap-2 type-caption font-medium text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t('hero.cvEnglish')}
                </a>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
