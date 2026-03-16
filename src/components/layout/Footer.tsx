import { SocialLinks } from '@/components/ui/SocialLinks';
import type { SocialLink } from '@/data/portfolio';
import { useTranslations } from '@/i18n';

interface FooterProps {
  socialLinks: SocialLink[];
}

export function Footer({ socialLinks }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslations();

  return (
    <footer className="py-12 px-6 md:px-8 border-t border-[var(--color-separator)]">
      <div className="max-w-[var(--content-max)] mx-auto flex flex-col items-center gap-6">
        <SocialLinks links={socialLinks} size="sm" />
        <p className="type-caption text-sm text-[var(--color-text-secondary)]">
          © {currentYear} Leonardo Puebla. {t('footer.madeWith')}
        </p>
      </div>
    </footer>
  );
}
