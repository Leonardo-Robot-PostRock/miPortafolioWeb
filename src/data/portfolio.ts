// Barrel file — re-exports all portfolio data from separate modules
export type { SocialLink, PersonalInfo, Project, Experience, Education, SkillCategory, PortfolioData, Translatable } from './types';
import { personalData } from './personal';
import { projectsData } from './projects';
import { experienceData } from './experience';
import { educationData } from './education';
import { expertiseData, skillsData } from './skills';
import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personal: personalData,
  projects: projectsData,
  experience: experienceData,
  education: educationData,
  expertise: expertiseData,
  skills: skillsData,
};
