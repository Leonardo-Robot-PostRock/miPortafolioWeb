import busquedaPaisImg from '../assets/images/proyects/busquedaPaises.png';
import gifExpertAppImg from '../assets/images/proyects/gifExpertApp.png';
import gifWebImg from '../assets/images/proyects/gifWeb.png';
import bataBitImg from '../assets/images/proyects/bataBit.png';
import searchGitHubUsersImg from '../assets/images/proyects/searchGitHubUsers.png';
import todoMachineImg from '../assets/images/proyects/todoMachine.png';
import yardSaleImg from '../assets/images/proyects/yardSale.png';
import analyteImg from '../assets/images/proyects/analyte.jpeg';
import tremeGripImg from '../assets/images/proyects/tremeGrip.jpeg';
import tremeStudioImg from '../assets/images/proyects/tremeStudio.jpeg';
import macBookPro16Img from '../assets/images/deviceShots/macBookPro16.png';
import ipadMiniImg from '../assets/images/deviceShots/ipadMini.png';
import iphoneXImg from '../assets/images/deviceShots/iphoneX.png';
import type { Project } from './types';

export const projectsData: Project[] = [
  // ===========================
  // Professional Projects
  // ===========================
  {
    id: '1',
    slug: 'latinad-mundial-2022',
    title: 'LatinAd — Mundial 2022',
    showDemo: false,
    shortDescription: {
      es: 'Plataforma publicitaria digital para el Mundial de Fútbol 2022, diseñada para pantallas en espacios públicos con información de partidos en tiempo real.',
      en: 'Digital advertising platform for the 2022 FIFA World Cup, designed for public-space screens with real-time match information.',
    },
    image: macBookPro16Img,
    techStack: ['Angular', 'JavaScript', 'HTML', 'CSS', 'Responsive Design'],
    liveUrl: 'https://www.instagram.com/stories/highlights/17967698422982317/',
    featured: true,
    category: 'professional',
    year: '2022',
    role: 'Frontend Developer',
    client: 'LatinAd',
    challenge: {
      es: 'Desarrollar una plataforma publicitaria digital para espacios públicos durante el Mundial de Fútbol 2022. El sistema debía adaptarse a múltiples resoluciones de pantalla y proporcionar información actualizada sobre partidos en tiempo real.',
      en: 'Develop a digital advertising platform for public spaces during the 2022 FIFA World Cup. The system had to adapt to multiple screen resolutions and provide real-time match updates.',
    },
    solution: {
      es: 'Implementé una interfaz completamente responsiva que se adapta automáticamente a MacBook, iPad y iPhone. Utilicé técnicas de diseño adaptativo para garantizar la legibilidad en pantallas de gran formato, mostrando resultados de partidos, marcadores y fases de grupos con actualización en tiempo real.',
      en: 'I implemented a fully responsive interface that automatically adapts to MacBook, iPad and iPhone. I used adaptive design techniques to ensure readability on large-format screens, displaying match results, scores and group stages with real-time updates.',
    },
    gallery: [
      { image: macBookPro16Img, caption: { es: 'Vista en MacBook Pro — Pantalla principal', en: 'MacBook Pro view — Main screen' } },
      { image: ipadMiniImg, caption: { es: 'Vista en iPad Mini — Diseño adaptativo', en: 'iPad Mini view — Adaptive design' } },
      { image: iphoneXImg, caption: { es: 'Vista en iPhone X — Versión móvil', en: 'iPhone X view — Mobile version' } },
    ],
    results: [
      { metric: '3+', description: { es: 'Tipos de dispositivo soportados simultáneamente', en: 'Device types supported simultaneously' } },
      { metric: 'Real-time', description: { es: 'Actualización de resultados de partidos en vivo', en: 'Live match results updates' } },
    ],
    learnings: [
      { es: 'Diseño responsive avanzado para pantallas públicas de gran formato', en: 'Advanced responsive design for large-format public screens' },
      { es: 'Optimización de UI para visualización a distancia en espacios públicos', en: 'UI optimization for remote viewing in public spaces' },
      { es: 'Gestión de datos en tiempo real para eventos deportivos', en: 'Real-time data management for sports events' },
    ]
  },
  {
    id: '2',
    slug: 'treme',
    title: 'Tremé — Grip & Tremé Studio',
    shortDescription: {
      es: 'Ecosistema low-code legacy: Tremé Studio configura formularios y flujos; el conector permite seleccionar el motor de base de datos, y en el caso que analicé estaba configurado sobre PostgreSQL para generar estructura y bajar registros/listas; SQL Server operaba como pasarela de traducción hacia Oracle del cliente; Grip completa esos formularios con datos reales en campo.',
      en: 'Legacy low-code ecosystem: Tremé Studio configures forms and workflows; the connector allows selecting the database engine, and in the case I analyzed it was configured on PostgreSQL to generate structure and pull records/list rows; SQL Server acted as the translation bridge to the client\'s Oracle system; Grip completes those forms with real field data.',
    },
    image: tremeGripImg,
    techStack: ['Svelte', 'SvelteKit', 'PouchDB', 'CouchDB', 'Node.js', 'Python', 'RabbitMQ', 'PostgreSQL', 'SQL Server', 'Docker'],
    featured: true,
    category: 'professional',
    year: '2024–2025',
    role: 'Full Stack Developer',
    client: 'Tremé',
    challenge: {
      es: 'Operar y mantener un ecosistema low-code legacy complejo con documentación mínima, compuesto por dos aplicaciones interconectadas: Tremé Studio (back office con formularios dinámicos, flujos con notificaciones por correo y conectores con motor de base de datos configurable) y Grip (cliente web que completaba esos formularios con datos reales). En el caso que me tocó analizar, el conector estaba configurado sobre PostgreSQL para bajar registros/listas y estructurar datos, con SQL Server como pasarela hacia Oracle del cliente. El mayor reto era garantizar la integridad de ese flujo sin intervenir directamente la base Oracle.',
      en: 'Operate and maintain a complex legacy low-code ecosystem with minimal documentation, composed of two interconnected apps: Tremé Studio (back office with dynamic forms, email-notification workflows, and connectors with configurable database engine) and Grip (web client that completed those forms with real data). In the case I analyzed, the connector was configured on PostgreSQL to pull records/list rows and structure data, with SQL Server as the bridge to the client\'s Oracle system. The main challenge was ensuring the integrity of that flow without directly intervening in Oracle.',
    },
    solution: {
      es: 'Me encargué del monitoreo de servidores y del análisis de logs de APIs/conectores, validando el comportamiento del conector según el motor configurado. En el caso analizado (PostgreSQL), verifiqué que bajara correctamente registros y listas, y que mantuviera la estructura esperada. También aseguré el pasaje de datos PostgreSQL -> SQL Server -> Oracle del cliente (sin intervención directa sobre Oracle). Participé en migraciones de bases de datos y servidores, resolución de incidencias y soporte funcional/técnico. Analicé incidencias reportadas en producción y generé nuevas versiones de formularios que resolvieron el 100% de los casos críticos en menos de 24 horas. Ajusté procesos automáticos de alertas vía RabbitMQ, restaurando la confiabilidad al 100%. Desarrollé en equipo con un compañero de trabajo las nuevas versiones de Grip, mejorando la experiencia del usuario y la estabilidad de la aplicación, y documenté la infraestructura completa de 2 servidores en Confluence.',
      en: 'Handled server monitoring and API/connector log analysis, validating connector behavior based on the configured database engine. In the analyzed case (PostgreSQL), I verified it correctly pulled records/list rows and preserved expected structure. I also ensured the PostgreSQL -> SQL Server -> client Oracle handoff (without direct intervention on Oracle). Participated in database and server migrations, incident resolution and functional/technical support. Analyzed production-reported incidents and generated new form versions that resolved 100% of critical cases in under 24 hours. Adjusted automated alert processes via RabbitMQ, restoring 100% reliability. Developed new Grip versions with a teammate, improving user experience and application stability, and documented the complete 2-server infrastructure in Confluence.',
    },
    results: [
      { metric: '100%', description: { es: 'Casos críticos de producción resueltos en menos de 24 horas', en: 'Critical production cases resolved in under 24 hours' } },
      { metric: '100%', description: { es: 'Confiabilidad restaurada en notificaciones vía RabbitMQ', en: 'Reliability restored in RabbitMQ notifications' } },
      { metric: '50%', description: { es: 'Reducción del tiempo de onboarding con documentación de infraestructura', en: 'Onboarding time reduction with infrastructure documentation' } },
      { metric: '0', description: { es: 'Errores de configuración en despliegues tras la documentación de infraestructura', en: 'Configuration errors in deployments after infrastructure documentation' } },
    ],
    learnings: [
      { es: 'Monitoreo de servidores y análisis de logs en conectores que bajan registros/listas y sincronizan estructura en PostgreSQL', en: 'Server monitoring and log analysis in connectors that pull records/list rows and synchronize PostgreSQL structure' },
      { es: 'Arquitectura de conectores como capa de traducción de datos entre sistemas legados', en: 'Connector architecture as a data translation layer between legacy systems' },
      { es: 'Sincronización offline-first con PouchDB/CouchDB en Grip', en: 'Offline-first synchronization with PouchDB/CouchDB in Grip' },
      { es: 'Gestión de colas de mensajería y alertas con RabbitMQ', en: 'Message queue and alert management with RabbitMQ' },
      { es: 'Análisis QA de formularios en producción y resolución de incidencias críticas', en: 'Production form QA analysis and critical incident resolution' },
      { es: 'Documentación de infraestructura heterogénea y reducción de tiempos de onboarding', en: 'Heterogeneous infrastructure documentation and onboarding time reduction' },
    ],
    gallery: [
      { image: tremeGripImg, caption: { es: 'Interfaz Grip — Aplicación web para completar formularios', en: 'Grip Interface — Web app for form completion' } },
      { image: tremeStudioImg, caption: { es: 'Tremé Studio — Back office para configuración de formularios y flujos', en: 'Tremé Studio — Back office for form and workflow configuration' } },
    ]
  },
  {
    id: '3',
    slug: 'treme-laboratorio',
    title: 'Tremé — Analyte',
    shortDescription: {
      es: 'Reemplazo de una aplicación de escritorio legacy por una interfaz web moderna para gestión de muestras de laboratorio, con tablas avanzadas y flujos de trabajo optimizados.',
      en: 'Replacement of a legacy desktop application with a modern web interface for laboratory sample management, featuring advanced tables and optimized workflows.',
    },
    image: analyteImg,
    techStack: ['Svelte', 'SvelteKit', 'AG Grid', 'Svelecte', 'Zod', 'Felte'],
    featured: true,
    category: 'professional',
    year: '2025',
    role: 'Full Stack Developer',
    client: 'Tremé',
    challenge: {
      es: 'Una aplicación de escritorio legacy gestionaba las muestras de laboratorio con una interfaz obsoleta y difícil de mantener. Era necesario construir una aplicación web independiente que replicara todas las funcionalidades existentes, manteniendo coherencia con el ecosistema tecnológico del proyecto, sin interrumpir los flujos de trabajo del equipo.',
      en: 'A legacy desktop application managed laboratory samples with an outdated and hard-to-maintain interface. A standalone web application was needed to replicate all existing functionalities, maintaining consistency with the project\'s tech ecosystem, without disrupting the team\'s workflows.',
    },
    solution: {
      es: 'Construí una aplicación web independiente con Svelte/SvelteKit junto a un equipo de 5 desarrolladores. Implementamos AG Grid para la gestión tabular avanzada de muestras y aplicamos el patrón Mediator para desacoplar la comunicación entre componentes. Aportamos a la replicación y mejora de todas las funcionalidades de la aplicación de escritorio, resultando en una interface moderna accesible desde cualquier navegador sin necesidad de instalación.',
      en: 'Developed a standalone web application with Svelte/SvelteKit alongside a team of 5 developers. We implemented AG Grid for advanced tabular sample management and applied the Mediator pattern to decouple component communication. Contributed to replicating and improving all desktop app functionalities, resulting in a modern interface accessible from any browser without installation.',
    },
    learnings: [
      { es: 'Migración de aplicaciones de escritorio legacy a interfaces web modernas', en: 'Migration of legacy desktop applications to modern web interfaces' },
      { es: 'Aplicación del patrón Mediator para desacoplar comunicación entre componentes', en: 'Applying the Mediator pattern to decouple component communication' },
      { es: 'Gestión avanzada de datos tabulares con AG Grid', en: 'Advanced tabular data management with AG Grid' },
      { es: 'Diseño de UI optimizado para flujos de trabajo de laboratorio', en: 'UI design optimized for laboratory workflows' },
    ]
  },
  {
    id: '4',
    slug: 'coneko',
    title: 'CoNeko — Marketplace B2B2C',
    shortDescription: {
      es: 'Marketplace B2B2C para pequeños negocios, diseñado con Domain-Driven Design y arquitectura limpia desde cero.',
      en: 'B2B2C marketplace for small businesses, designed with Domain-Driven Design and clean architecture from scratch.',
    },
    techStack: ['Node.js', 'Express', 'TypeScript', 'MongoDB'],
    featured: false,
    category: 'professional',
    year: '2026',
    role: 'Founder & Backend Developer',
    challenge: {
      es: 'Diseñar y construir desde cero un marketplace B2B2C escalable para pequeños negocios, con una arquitectura que permita crecer de forma sostenible.',
      en: 'Design and build from scratch a scalable B2B2C marketplace for small businesses, with an architecture that allows sustainable growth.',
    },
    solution: {
      es: 'Apliqué Domain-Driven Design con separación completa de capas de aplicación, dominio e infraestructura. El backend está construido con Node.js, Express y TypeScript, usando MongoDB como base de datos.',
      en: 'Applied Domain-Driven Design with complete separation of application, domain and infrastructure layers. The backend is built with Node.js, Express and TypeScript, using MongoDB as the database.',
    },
    results: [
      { metric: 'DDD', description: { es: 'Arquitectura Domain-Driven Design desde el día uno', en: 'Domain-Driven Design architecture from day one' } },
      { metric: '3 capas', description: { es: 'Separación completa: aplicación, dominio e infraestructura', en: 'Complete separation: application, domain and infrastructure' } },
    ],
    learnings: [
      { es: 'Domain-Driven Design aplicado en un proyecto real', en: 'Domain-Driven Design applied in a real project' },
      { es: 'Separación de capas para arquitectura mantenible', en: 'Layer separation for maintainable architecture' },
      { es: 'Diseño de APIs escalables para marketplace', en: 'Scalable API design for marketplace' },
    ]
  },
  {
    id: '5',
    slug: 'westnet',
    title: 'Westnet — Optimización Frontend',
    shortDescription: {
      es: 'Pasantía de desarrollo full stack enfocada en optimización de performance y refactorización de código legacy con Next.js y Redux.',
      en: 'Full stack development internship focused on performance optimization and legacy code refactoring with Next.js and Redux.',
    },
    techStack: ['Next.js', 'Redux', 'Docker'],
    featured: false,
    category: 'professional',
    year: '2024',
    role: 'Full Stack Developer (Pasantía)',
    client: 'Westnet',
    challenge: {
      es: 'Optimizar una aplicación web con problemas de rendimiento y código complejo con componentes de más de 2000 líneas, sin documentación de base de datos.',
      en: 'Optimize a web application with performance issues and complex code with 2000+ line components, without database documentation.',
    },
    solution: {
      es: 'Removí capas redundantes mejorando tiempos de respuesta, refactoricé componentes masivos con estado centralizado vía Redux, y generé documentación completa del modelo de datos.',
      en: 'Removed redundant layers improving response times, refactored massive components with centralized state via Redux, and generated complete data model documentation.',
    },
    results: [
      { metric: '44%', description: { es: 'Reducción del tiempo de respuesta (de 800ms a 450ms)', en: 'Response time reduction (from 800ms to 450ms)' } },
      { metric: '25+', description: { es: 'Tablas documentadas en ERD completo de la base de datos', en: 'Tables documented in complete database ERD' } },
      { metric: '2000+', description: { es: 'Líneas de código refactorizadas por componente', en: 'Lines of code refactored per component' } },
    ],
    learnings: [
      { es: 'Optimización de rendimiento en aplicaciones Next.js', en: 'Performance optimization in Next.js applications' },
      { es: 'Refactorización de componentes legacy masivos', en: 'Refactoring massive legacy components' },
      { es: 'Documentación de bases de datos productivas', en: 'Production database documentation' },
    ]
  },
  {
    id: '6',
    slug: 'taxi-barber-app',
    title: 'Taxi Barber App',
    shortDescription: {
      es: 'Modernización del frontend de una aplicación móvil con navegación, formularios dinámicos y cálculos en tiempo real.',
      en: 'Frontend modernization of a mobile application with navigation, dynamic forms and real-time calculations.',
    },
    techStack: ['React Native'],
    featured: false,
    category: 'professional',
    year: '2024',
    role: 'Frontend Developer (Freelance)',
    challenge: {
      es: 'Actualizar completamente el frontend de una aplicación móvil existente, incluyendo navegación, formularios con cálculos dinámicos e integraciones con APIs.',
      en: 'Fully update the frontend of an existing mobile application, including navigation, forms with dynamic calculations and API integrations.',
    },
    solution: {
      es: 'Implementé la modernización completa del frontend con React Native, mejorando la navegación, creando formularios dinámicos con cálculos en tiempo real e integrando múltiples APIs de terceros.',
      en: 'Implemented the complete frontend modernization with React Native, improving navigation, creating dynamic forms with real-time calculations and integrating multiple third-party APIs.',
    },
    learnings: [
      { es: 'Desarrollo móvil con React Native', en: 'Mobile development with React Native' },
      { es: 'Formularios dinámicos con cálculos en tiempo real', en: 'Dynamic forms with real-time calculations' },
      { es: 'Integración con APIs de terceros en aplicaciones móviles', en: 'Third-party API integration in mobile applications' },
    ]
  },

  // ===========================
  // Educational Projects
  // ===========================
  {
    id: '6',
    slug: 'busqueda-paises',
    title: 'Búsqueda de Países',
    shortDescription: {
      es: 'Aplicación Angular para buscar y explorar información detallada de países del mundo con filtros avanzados y diseño responsivo.',
      en: 'Angular application to search and explore detailed information about countries with advanced filters and responsive design.',
    },
    image: busquedaPaisImg,
    techStack: ['Angular', 'TypeScript', 'CSS', 'REST API'],
    liveUrl: 'https://busqueda-paises-leonardo.netlify.app/',
    featured: true,
    category: 'educational',
    year: '2022',
    role: 'Frontend Developer',
    challenge: {
      es: 'Crear una aplicación que permita buscar y filtrar países del mundo de manera eficiente, consumiendo una API REST y presentando la información de forma clara.',
      en: 'Create an application to efficiently search and filter countries worldwide, consuming a REST API and presenting clear information.',
    },
    solution: {
      es: 'Desarrollé una SPA con Angular que consume la REST Countries API, implementando búsqueda en tiempo real, filtros por región y vistas detalladas de cada país.',
      en: 'Developed a SPA with Angular that consumes the REST Countries API, implementing real-time search, region filters and detailed views for each country.',
    },
    learnings: [
      { es: 'Consumo eficiente de APIs REST con HttpClient de Angular', en: 'Efficient REST API consumption with Angular HttpClient' },
      { es: 'Implementación de búsqueda y filtrado reactivo', en: 'Reactive search and filtering implementation' },
      { es: 'Diseño de interfaces para datos complejos', en: 'Interface design for complex data' },
    ]
  },
  {
    id: '7',
    slug: 'gif-expert-app',
    title: 'GIF Expert App',
    shortDescription: {
      es: 'Aplicación React para buscar y descubrir GIFs utilizando la API de Giphy, con búsqueda en tiempo real y diseño moderno.',
      en: 'React application to search and discover GIFs using the Giphy API, with real-time search and modern design.',
    },
    image: gifExpertAppImg,
    techStack: ['React', 'JavaScript', 'CSS', 'Giphy API'],
    liveUrl: 'https://gif-expert-react-leonardo.netlify.app/',
    featured: false,
    category: 'educational',
    year: '2021',
    role: 'Frontend Developer',
    challenge: {
      es: 'Desarrollar una aplicación para buscar GIFs de manera intuitiva, con una interfaz limpia y resultados instantáneos.',
      en: 'Develop an intuitive GIF search application with a clean interface and instant results.',
    },
    solution: {
      es: 'Creé una aplicación React con custom hooks para gestionar peticiones a la API de Giphy, renderizado eficiente de resultados y manejo de estados de carga.',
      en: 'Created a React application with custom hooks to manage Giphy API requests, efficient result rendering and loading state management.',
    },
    learnings: [
      { es: 'Custom hooks para lógica reutilizable', en: 'Custom hooks for reusable logic' },
      { es: 'Integración con APIs de terceros (Giphy)', en: 'Third-party API integration (Giphy)' },
      { es: 'Gestión de estado con React hooks', en: 'State management with React hooks' },
    ]
  },
  {
    id: '8',
    slug: 'search-github-users',
    title: 'Search GitHub Users',
    shortDescription: {
      es: 'App React con Material UI para buscar perfiles de usuarios de GitHub y visualizar su información y repositorios.',
      en: 'React app with Material UI to search GitHub user profiles and visualize their information and repositories.',
    },
    image: searchGitHubUsersImg,
    techStack: ['React', 'Material UI', 'GitHub API', 'JavaScript'],
    liveUrl: 'https://materialuileonardo.netlify.app/',
    featured: false,
    category: 'educational',
    year: '2022',
    role: 'Frontend Developer',
  },
  {
    id: '9',
    slug: 'gif-web',
    title: 'GIF Web',
    shortDescription: {
      es: 'Plataforma web construida con Angular para explorar y buscar GIFs con una experiencia de usuario fluida.',
      en: 'Web platform built with Angular to explore and search GIFs with a smooth user experience.',
    },
    image: gifWebImg,
    techStack: ['Angular', 'TypeScript', 'CSS'],
    liveUrl: 'https://gifsweb.netlify.app/',
    category: 'educational',
    year: '2022',
    role: 'Frontend Developer',
  },
  {
    id: '10',
    slug: 'yard-sale',
    title: 'Yard Sale',
    featured: true,
    shortDescription: {
      es: 'E-commerce frontend con React, incluyendo catálogo de productos, carrito de compras y navegación de categorías.',
      en: 'Frontend e-commerce with React, including product catalog, shopping cart and category navigation.',
    },
    image: yardSaleImg,
    techStack: ['React', 'JavaScript', 'CSS'],
    liveUrl: 'https://leonardo-robot-postrock.github.io/react-shop/',
    category: 'educational',
    year: '2022',
    role: 'Frontend Developer',
  },
  {
    id: '11',
    slug: 'todo-machine',
    title: 'TODO Machine',
    shortDescription: {
      es: 'Gestor de tareas interactivo construido con React, con persistencia en localStorage y diseño intuitivo.',
      en: 'Interactive task manager built with React, with localStorage persistence and intuitive design.',
    },
    image: todoMachineImg,
    techStack: ['React', 'JavaScript', 'CSS', 'LocalStorage'],
    liveUrl: 'https://leonardo-robot-postrock.github.io/TODO-MACHINE/',
    category: 'educational',
    year: '2021',
    role: 'Frontend Developer',
  },
  {
    id: '12',
    slug: 'batabit',
    title: 'BataBit',
    featured: true,
    shortDescription: {
      es: 'Landing page de plataforma de intercambio de criptomonedas con diseño responsive y enfoque mobile-first.',
      en: 'Cryptocurrency exchange platform landing page with responsive design and mobile-first approach.',
    },
    image: bataBitImg,
    techStack: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://leonardo-robot-postrock.github.io/BataBit/',
    category: 'educational',
    year: '2021',
    role: 'Frontend Developer',
  },
];