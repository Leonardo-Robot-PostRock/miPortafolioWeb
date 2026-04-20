import type { SkillCategory } from './types';
import type { Translatable } from '@/i18n/config';

export const expertiseData: Translatable[] = [
  { es: 'Modernización de aplicaciones legacy con documentación mínima o inexistente', en: 'Modernizing legacy applications with minimal or nonexistent documentation' },
  { es: 'Transformar requisitos cambiantes en soluciones robustas y mantenibles', en: 'Turning changing requirements into robust and maintainable solutions' },
  { es: 'Optimización de performance: reduje tiempos de respuesta de 800ms a 450ms', en: 'Performance optimization: reduced response times from 800ms to 450ms' },
  { es: 'Documentación de infraestructura crítica que reduce tiempos de onboarding un 50%', en: 'Critical infrastructure documentation that reduces onboarding time by 50%' },
  { es: 'Resolución de incidencias en producción con tiempos de respuesta menores a 24 horas', en: 'Production incident resolution with response times under 24 hours' },
  { es: 'Arquitectura limpia con separación de capas (DDD, estado centralizado)', en: 'Clean architecture with layer separation (DDD, centralized state)' },
];

export const skillsData: SkillCategory[] = [
  {
    name: { es: 'Frontend', en: 'Frontend' },
    items: ['React', 'Next.js', 'Svelte', 'SvelteKit', 'Angular', 'React Native', 'Redux', 'Zustand'],
  },
  {
    name: { es: 'Backend', en: 'Backend' },
    items: ['Node.js', 'Express', 'Python', 'Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'Flyway', 'JUnit 5', 'H2', 'REST APIs'],
  },
  {
    name: { es: 'Bases de Datos', en: 'Databases' },
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'CouchDB', 'PouchDB'],
  },
  {
    name: { es: 'Herramientas', en: 'Tools' },
    items: ['Docker', 'Git', 'RabbitMQ', 'AG Grid', 'Confluence', 'ClickUp MCP'],
  },
];
