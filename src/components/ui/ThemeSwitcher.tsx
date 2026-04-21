import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  colorPalettes,
  applyColorPalette,
  getInitialTheme,
  type PaletteName,
  type ColorMode,
} from '@/styles/themes/theme-manager';
import { useTranslations } from '@/i18n';
import type { TranslationKey } from '@/i18n';

export function ThemeSwitcher() {
  const { t, locale } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPalette, setCurrentPalette] = useState<PaletteName>('ocean');
  const [currentMode, setCurrentMode] = useState<ColorMode>('light');
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const paletteLabelKeys: Record<PaletteName, TranslationKey> = {
    ocean: 'themeSwitcher.palette.ocean',
    forest: 'themeSwitcher.palette.forest',
    monochrome: 'themeSwitcher.palette.monochrome',
    sunset: 'themeSwitcher.palette.sunset',
    coral: 'themeSwitcher.palette.coral',
    mint: 'themeSwitcher.palette.mint',
    slate: 'themeSwitcher.palette.slate',
    ruby: 'themeSwitcher.palette.ruby',
    sky: 'themeSwitcher.palette.sky',
    lime: 'themeSwitcher.palette.lime',
    ember: 'themeSwitcher.palette.ember',
    nordic: 'themeSwitcher.palette.nordic',
    orchid: 'themeSwitcher.palette.orchid',
    sand: 'themeSwitcher.palette.sand',
    glacier: 'themeSwitcher.palette.glacier',
    graphite: 'themeSwitcher.palette.graphite',
    cacao: 'themeSwitcher.palette.cacao',
  };

  useEffect(() => {
    const { palette, mode } = getInitialTheme();
    setCurrentPalette(palette);
    setCurrentMode(mode);
    applyColorPalette(palette, mode);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (containerRef.current && !containerRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isOpen]);

  const featuredPalettes: PaletteName[] = [
    'ocean',
    'forest',
    'sunset',
    'monochrome',
    'mint',
    'slate',
  ];

  const allPaletteKeys = Object.keys(colorPalettes) as PaletteName[];
  const trimmedQuery = query.trim();
  const basePaletteKeys = showAll || trimmedQuery.length > 0
    ? allPaletteKeys
    : featuredPalettes;

  const normalize = (s: string) =>
    s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  const visiblePaletteKeys = basePaletteKeys.filter((key) => {
    const label = t(paletteLabelKeys[key]);
    return normalize(label).includes(normalize(trimmedQuery));
  });

  const handlePaletteChange = (palette: PaletteName) => {
    setCurrentPalette(palette);
    applyColorPalette(palette, currentMode);
    setIsOpen(false);
    setQuery('');
  };

  const toggleMode = () => {
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    setCurrentMode(newMode);
    applyColorPalette(currentPalette, newMode);
  };

  return (
    <div ref={containerRef} className="fixed bottom-8 right-8 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shadow-lg flex items-center justify-center text-[var(--color-text)]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t('themeSwitcher.title')}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 bg-[var(--color-surface)] rounded-2xl shadow-2xl border border-[var(--color-border)] p-6 min-w-[320px] max-w-[360px]"
          >
            <h3 className="type-heading font-semibold text-lg mb-4 text-[var(--color-text)]">
              {t('themeSwitcher.title')}
            </h3>

            {/* Light/Dark toggle */}
            <div className="flex items-center justify-between mb-6 p-3 bg-[var(--color-background)] rounded-lg">
              <span className="type-body text-sm text-[var(--color-text)]">{t('themeSwitcher.darkMode')}</span>
              <button
                onClick={toggleMode}
                className={`w-12 h-6 rounded-full transition-colors relative ${
                  currentMode === 'dark' ? 'bg-[var(--color-primary)]' : 'bg-gray-300'
                }`}
                aria-label={t('themeSwitcher.toggleDarkMode')}
              >
                <motion.div
                  className="w-5 h-5 bg-[var(--color-primary-foreground)] rounded-full absolute top-0.5 border border-[var(--color-border)]"
                  animate={{ left: currentMode === 'dark' ? 26 : 2 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
            </div>

            {/* Palette selector */}
            <div className="space-y-3">
              <p className="type-caption font-semibold text-xs text-[var(--color-text-secondary)] mb-3 uppercase tracking-wider">
                {t('themeSwitcher.colorPalette')}
              </p>

              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={locale === 'es' ? 'Buscar tema...' : 'Search theme...'}
                className="w-full px-3 py-2 rounded-lg bg-[var(--color-background)] border border-[var(--color-border)] type-caption text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] outline-none focus:border-[var(--color-primary)]"
                aria-label={locale === 'es' ? 'Buscar tema' : 'Search theme'}
              />

              <div className="max-h-60 overflow-y-auto pr-1 scrollbar-global">
                <div className="grid grid-cols-2 gap-2">
                  {visiblePaletteKeys.map((key) => {
                    const palette = colorPalettes[key];
                    return (
                      <button
                        key={key}
                        onClick={() => handlePaletteChange(key)}
                        className={`text-left px-3 py-2 rounded-lg transition-all ${
                          currentPalette === key
                            ? 'bg-[var(--color-primary)]/10 border-2 border-[var(--color-primary)]'
                            : 'bg-[var(--color-background)] hover:bg-[var(--color-hover)] border-2 border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: palette[currentMode].primary }} />
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: palette[currentMode].secondary }} />
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: palette[currentMode].accent }} />
                        </div>
                        <span className="type-caption font-semibold text-xs text-[var(--color-text)]">
                          {t(paletteLabelKeys[key])}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {!showAll && allPaletteKeys.length > featuredPalettes.length && (
                <button
                  onClick={() => setShowAll(true)}
                  className="w-full type-caption text-xs font-semibold text-[var(--color-primary)] hover:underline"
                >
                  {locale === 'es' ? 'Ver todos los temas' : 'Show all themes'}
                </button>
              )}

              {showAll && (
                <button
                  onClick={() => {
                    setShowAll(false);
                    setQuery('');
                  }}
                  className="w-full type-caption text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                >
                  {locale === 'es' ? 'Mostrar menos' : 'Show less'}
                </button>
              )}

              {visiblePaletteKeys.length === 0 && (
                <p className="type-caption text-xs text-[var(--color-text-secondary)] text-center py-2">
                  {locale === 'es' ? 'No se encontraron temas' : 'No themes found'}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
