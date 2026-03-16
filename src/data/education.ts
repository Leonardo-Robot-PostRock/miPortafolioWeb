import { date } from 'astro:schema';
import type { Education } from './types';

export const educationData: Education[] = [
  {
    id: '1',
    institution: 'Instituto Manuel Belgrano (IES 9-008)',
    title: { es: 'Desarrollo de Software', en: 'Software Development' },
    startDate: '2023',
    endDate: '2024',
    description: {
      es: 'Formación técnica en desarrollo de software, abarcando arquitectura de aplicaciones, bases de datos y metodologías ágiles.',
      en: 'Technical training in software development, covering application architecture, databases and agile methodologies.',
    },
    location: 'Mendoza, Argentina',
  },
  {
    id: '2',
    institution: 'Platzi, Udemy & DevTalles',
    title: { es: 'Formación Continua en Múltiples Tecnologías', en: 'Continuous Training in Multiple Technologies' },
    startDate: '2021',
    endDate: new Date().getFullYear().toString(),
    description: {
      es: 'Capacitación intensiva en desarrollo web, abarcando frontend, backend, bases de datos, herramientas de desarrollo y buenas prácticas.',
      en: 'Intensive web development training covering frontend, backend, databases, development tools and best practices.',
    },
    location: 'Online',
  },
  {
    id: '3',
    institution: 'UTN — Universidad Tecnológica Nacional',
    title: { es: 'Tecnicatura Superior en Programación', en: 'Associate Degree in Programming' },
    startDate: '2019',
    endDate: '2020',
    description: {
      es: 'Formación en la Universidad Tecnológica Nacional, reforzando bases en lógica de programación, matemáticas aplicadas y fundamentos de ingeniería.',
      en: 'Education at the National Technological University, strengthening foundations in programming logic, applied mathematics and engineering fundamentals.',
    },
    location: 'Mendoza, Argentina',
  },
  {
    id: '4',
    institution: '111 Mil Programadores',
    title: { es: 'Programación Java', en: 'Java Programming' },
    startDate: '2016',
    endDate: '2017',
    description: {
      es: 'Programa nacional de formación en programación con Java, cubriendo POO, estructuras de datos y fundamentos de desarrollo.',
      en: 'National programming training program with Java, covering OOP, data structures and development fundamentals.',
    },
    location: 'Argentina',
  },
];
