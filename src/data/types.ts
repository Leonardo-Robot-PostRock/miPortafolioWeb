import type { Translatable } from '@/i18n/config';

export type { Translatable };

/** A serializable image descriptor — compatible with Astro's ImageMetadata and getImage() results */
export interface ImageSource {
  src: string;
  width: number;
  height: number;
}

export interface SocialLink {
  platform: 'linkedin' | 'github' | 'x' | 'email' | 'website';
  url: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  role: Translatable;
  tagline: Translatable;
  avatar?: ImageSource;
  avatarLight?: ImageSource;
  location?: string;
  email?: string;
  cvEs?: string;
  cvEn?: string;
  socialLinks: SocialLink[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: Translatable;
  image?: ImageSource;
  techStack: string[];
  liveUrl?: string;
  showDemo?: boolean;
  repoUrl?: string;
  /** Si `false`, oculta el botón de repositorio aunque `repoUrl` esté definido */
  showRepo?: boolean;
  /** URLs de repositorios adicionales (ej: backend + frontend por separado) */
  extraRepos?: Array<{ label: Translatable; url: string }>;
  /** IDs de proyectos relacionados bajo la misma empresa/ecosistema */
  linkedProjectIds?: string[];
  /** Si `false`, el proyecto no se vincula desde ExperienceItem (útil si es redundante o privado) */
  visibleInExperience?: boolean;
  featured?: boolean;
  category: 'professional' | 'educational';
  client?: string;
  year?: string;
  role?: Translatable;
  challenge?: Translatable;
  solution?: Translatable;
  gallery?: Array<{ image: ImageSource; caption?: Translatable }>;
  results?: Array<{ metric: string; description: Translatable }>;
  learnings?: Translatable[];
}

export interface Experience {
  id: string;
  company: string;
  role: Translatable;
  startDate: Translatable;
  endDate: Translatable;
  description: Translatable;
  achievements?: Translatable[];
  location?: string;
  techStack?: string[];
  /** Agrupa visualmente entradas de la misma empresa/ecosistema */
  groupId?: string;
}

export interface Education {
  id: string;
  institution: string;
  title: Translatable;
  startDate: string;
  endDate: string;
  description: Translatable;
  location?: string;
}

export interface SkillCategory {
  name: Translatable;
  items: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  expertise: Translatable[];
  skills: SkillCategory[];
}
