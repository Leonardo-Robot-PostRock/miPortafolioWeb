/**
 * Shared Tailwind CSS class constants.
 * Import from here to keep styles consistent across all components.
 */

// ─── Layout ───────────────────────────────────────────────────────────────
/** Constrains content width and centres it: max-w-[--content-max] mx-auto */
export const CONTENT_MAX = 'max-w-[var(--content-max)] mx-auto';

/** Horizontal section padding, responsive: px-6 md:px-8 */
export const SECTION_PADDING = 'px-6 md:px-8';

/** Scroll offset to clear the sticky header: scroll-mt-24 md:scroll-mt-28 */
export const SCROLL_OFFSET = 'scroll-mt-24 md:scroll-mt-28';

/** Desktop projects 3-column grid, hidden on mobile */
export const PROJECTS_DESKTOP_GRID =
  'hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';

// ─── Surface / Card ───────────────────────────────────────────────────────
/** Base card surface: surface background + border token */
export const SURFACE_CARD =
  'bg-[var(--color-surface)] border border-[var(--color-border)]';

// ─── Typography ───────────────────────────────────────────────────────────
/** Secondary section heading (h3 level): 2xl bold, text colour */
export const SECTION_SUBHEADING =
  'type-heading font-semibold text-2xl text-[var(--color-text)]';

/** Navigation link style: small caption, muted → text on hover */
export const NAV_LINK =
  'type-caption font-medium text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors';

/** CV / download link: inline-flex row, muted → primary on hover */
export const CV_LINK =
  'inline-flex items-center gap-2 type-caption font-medium text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors';

// ─── Badges ───────────────────────────────────────────────────────────────
/** Tech-stack pill base (combine with a bg + text colour) */
export const TECH_BADGE =
  'type-caption font-medium text-xs px-3 py-1 rounded-full';
