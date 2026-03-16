import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTranslations } from '@/i18n';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import type { TranslationKey } from '@/i18n';

const navLinks: Array<{ id: string; labelKey: TranslationKey }> = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'skills', labelKey: 'nav.skills' },
];

export function Header() {
  const { t } = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[var(--color-background)]/80 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-[var(--content-max)] mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="type-display font-semibold text-2xl text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
        >
          Leonardo
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`/#${link.id}`}
              className="type-caption font-medium text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            >
              {t(link.labelKey)}
            </a>
          ))}
          <a
            href="/proyectos"
            className="type-caption font-medium text-sm px-4 py-2 rounded-[var(--radius-md)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:opacity-90 transition-opacity"
          >
            {t('nav.allProjects')}
          </a>
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={t('nav.menu')}
        >
          <motion.span
            className="block w-6 h-0.5 bg-[var(--color-text)]"
            animate={isMobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-[var(--color-text)]"
            animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-[var(--color-text)]"
            animate={isMobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--color-background)]/95 backdrop-blur-xl border-t border-[var(--color-border)] overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={() => setIsMobileOpen(false)}
                  className="block type-body text-lg text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {t(link.labelKey)}
                </a>
              ))}
              <a
                href="/proyectos"
                onClick={() => setIsMobileOpen(false)}
                className="block type-body text-lg text-[var(--color-primary)] font-semibold"
              >
                {t('nav.allProjects')}
              </a>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
