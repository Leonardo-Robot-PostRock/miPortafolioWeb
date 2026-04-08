import avatarDark from '../assets/images/profile/foto.png';
import cvES from '../assets/cv/Leonardo_Puebla_CV_ES.pdf';
import cvEN from '../assets/cv/Leonardo_Puebla_CV_EN.pdf';
import type { PersonalInfo } from './types';

export const personalData: PersonalInfo = {
  name: 'Leonardo Puebla',
  role: {
    es: 'Desarrollador Frontend · Full Stack',
    en: 'Frontend Developer · Full Stack',
  },
  tagline: {
    es: 'Desarrollador Frontend con perfil Full Stack y +3 años de experiencia creando y modernizando aplicaciones web y móviles complejas. Me especializo en transformar requisitos cambiantes en soluciones robustas y mantenibles.',
    en: 'Frontend Developer with a Full Stack profile and 3+ years of experience building and modernizing complex web and mobile applications. I specialize in turning changing requirements into robust and maintainable solutions.',
  },
  avatar: avatarDark,
  location: 'Mendoza, Argentina',
  email: 'contact@leonardopuebla.com',
  cvEs: cvES,
  cvEn: cvEN,
  socialLinks: [
    { platform: 'github', url: 'https://github.com/Leonardo-Robot-PostRock', label: 'GitHub' },
    { platform: 'linkedin', url: 'https://www.linkedin.com/in/leonardocode/', label: 'LinkedIn' },
    { platform: 'x', url: 'https://x.com/LeoluxMrQwerty', label: 'X' },
    { platform: 'email', url: 'mailto:contact@leonardopuebla.com', label: 'Email' },
  ]
};
