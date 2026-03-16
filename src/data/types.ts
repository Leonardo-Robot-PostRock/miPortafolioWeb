import type { Translatable } from '@/i18n/config';

export type { Translatable };

export interface SocialLink {
  platform: 'linkedin' | 'github' | 'x' | 'email' | 'website';
  url: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  role: Translatable;
  tagline: Translatable;
  avatar?: ImageMetadata;
  avatarLight?: ImageMetadata;
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
  image?: ImageMetadata;
  techStack: string[];
  liveUrl?: string;
  showDemo?: boolean;
  repoUrl?: string;
  featured?: boolean;
  category: 'professional' | 'educational';
  client?: string;
  year?: string;
  role?: string;
  challenge?: Translatable;
  solution?: Translatable;
  gallery?: Array<{ image: ImageMetadata; caption?: Translatable }>;
  results?: Array<{ metric: string; description: Translatable }>;
  learnings?: Translatable[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: Translatable;
  endDate: Translatable;
  description: Translatable;
  achievements?: Translatable[];
  location?: string;
  techStack?: string[];
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
