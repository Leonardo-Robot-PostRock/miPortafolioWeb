import avatarDark from '../assets/images/profile/foto.png';
import cvES from '../assets/cv/Leonardo_Puebla_CV_ES.pdf';
import cvEN from '../assets/cv/Leonardo_Puebla_CV_EN.pdf';
import type { PersonalInfo } from './types';

export const personalData: PersonalInfo = {
  name: 'Leonardo Puebla',
  role: {
    es: 'Desarrollador Full Stack',
    en: 'Full Stack Developer',
  },
  tagline: {
    es: 'Más de 3 años construyendo aplicaciones web y móviles complejas — frontend, backend, full stack. Transformo requisitos cambiantes en soluciones robustas, limpias y escalables.',
    en: '3+ years building complex web and mobile applications — frontend, backend, full stack. I turn shifting requirements into robust, clean, and scalable solutions.',
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
