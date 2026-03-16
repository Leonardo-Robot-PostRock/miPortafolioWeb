Genera o mejora portfolios profesionales usando Astro + React con diseño minimalista inspirado en Apple Human Interface Guidelines. Aplica cuando el usuario menciona 'portfolio', 'portafolio', 'sitio personal', 'web profesional', o quiere actualizar/mejorar su portfolio existente. Incluye arquitectura de componentes reutilizables, sistema de paletas de colores intercambiables, tipografía serif/sans-serif correctamente balanceada según Apple HIG, secciones de presentación/proyectos/experiencia/skills técnicos, integración de redes sociales, y estructura escalable. Trigger también cuando se mencione 'Astro', 'React portfolio', 'diseño Apple', o mejora de código frontend existente para portfolios.LicenseMITAstro + React Portfolio Skill
Este skill genera portfolios profesionales completos o mejora portfolios existentes utilizando Astro + React, siguiendo los principios de diseño de Apple Human Interface Guidelines (HIG) con estética minimalista y limpia.
Contexto de Uso
El usuario puede:

Mejorar portfolio existente: Proporciona código existente que necesita refactorización, mejora de diseño, o modernización
Generar desde cero: Requiere un portfolio nuevo con especificaciones personalizadas
Ambos enfoques: Combina elementos existentes con nuevos componentes

Workflow de Análisis Inicial
Antes de generar código, SIEMPRE evaluar:

¿Portfolio existente o desde cero?

Si existe: solicitar acceso al código (/mnt/user-data/uploads o repositorio)
Analizar arquitectura actual, identificar mejoras críticas


Información personal requerida:

Nombre completo, rol profesional, tagline
Redes sociales (LinkedIn, GitHub, Twitter, etc.)
Proyectos destacados con casos de estudio:

Información básica: nombre, descripción corta, tech stack
Caso de estudio: desafío, solución, resultados, aprendizajes
URLs: demo live, repositorio
Imágenes: hero image + galería opcional


Experiencia laboral (empresa, rol, fechas, logros cuantificables)
Áreas de expertise (qué problemas resuelves especialmente bien)
Skills técnicos agrupados por categoría
Información de contacto (email, ubicación opcional)


Preferencias de diseño:

Paleta de colores principal (o generar opciones)
Acento visual (colores secundarios)
Tema oscuro/claro/ambos
Animaciones sutiles o estáticas



Estructura de Navegación
El portfolio tendrá la siguiente estructura de páginas:

Homepage (/)

Hero con presentación
Proyectos destacados (máximo 6, con "Ver todos")
Experiencia con expertise highlight
Skills técnicos
Contacto


Página de Proyectos (/proyectos)

Grid completo con TODOS los proyectos
Filtros opcionales por tecnología
Sin carousels - accesibilidad primero


Detalle de Proyecto (/proyecto/[slug])

Caso de estudio completo
Hero del proyecto
Desafío, solución, galería
Resultados cuantificables
Aprendizajes clave
Links a demo/código



Arquitectura Astro + React
Estructura de Proyecto
portfolio/
├── src/
│   ├── components/
│   │   ├── core/              # Componentes base reutilizables
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Section.tsx
│   │   │   └── Typography.tsx
│   │   ├── layout/            # Componentes de layout
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── sections/          # Secciones específicas
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── ProjectDetail.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/                # Componentes UI específicos
│   │       ├── ProjectCard.tsx
│   │       ├── ExperienceItem.tsx
│   │       ├── SkillBadge.tsx
│   │       ├── SocialLinks.tsx
│   │       └── ThemeSwitcher.tsx
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── proyectos.astro     # Página de todos los proyectos
│   │   └── proyecto/
│   │       └── [slug].astro    # Página de detalle de proyecto
│   ├── styles/
│   │   ├── global.css
│   │   ├── themes/
│   │   │   ├── light.css
│   │   │   ├── dark.css
│   │   │   └── theme-manager.ts
│   │   └── tokens/
│   │       ├── colors.css
│   │       ├── typography.css
│   │       └── spacing.css
│   ├── data/
│   │   └── portfolio.ts       # Datos centralizados
│   └── utils/
│       ├── cn.ts              # Utility para class names
│       └── motion-config.ts   # Configuraciones de Framer Motion
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
Configuración Base
package.json debe incluir:
json{
  "dependencies": {
    "astro": "^4.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@astrojs/react": "^3.0.0",
    "@astrojs/tailwind": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^10.0.0"
  }
}
astro.config.mjs:
javascriptimport { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false })
  ],
  vite: {
    ssr: {
      noExternal: ['framer-motion']
    }
  }
});
Diseño Siguiendo Apple HIG
Principios de Diseño Apple

Claridad: El contenido es siempre prioritario. La UI no debe competir con el contenido.
Deferencia: La interfaz se aparta para que el contenido brille.
Profundidad: Uso sutil de capas y motion para jerarquía visual.

Tipografía
Seguir la jerarquía tipográfica de Apple:
Sistema de tipos serif/sans-serif:
css/* tokens/typography.css */
:root {
  /* Display (Títulos principales) - Serif */
  --font-display: 'Crimson Pro', 'Georgia', serif;
  --font-display-weight: 600;
  --font-display-size-xl: clamp(3rem, 8vw, 5.5rem);
  --font-display-size-lg: clamp(2.5rem, 6vw, 4rem);
  --font-display-size-md: clamp(2rem, 5vw, 3rem);
  
  /* Body (Cuerpo de texto) - Sans-serif */
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-body-weight: 400;
  --font-body-size: 1.0625rem; /* 17px - Apple's standard */
  --font-body-leading: 1.47; /* 25px line height */
  
  /* Headings (Subtítulos) - Sans-serif */
  --font-heading: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-heading-weight: 600;
  
  /* Caption (Metadata, fechas) - Sans-serif */
  --font-caption: 'Inter', sans-serif;
  --font-caption-weight: 500;
  --font-caption-size: 0.8125rem; /* 13px */
  
  /* Tracking (letter-spacing) según Apple */
  --tracking-tight: -0.022em; /* Displays grandes */
  --tracking-normal: -0.003em; /* Body text */
  --tracking-loose: 0.05em; /* Labels pequeños */
}
Reglas de aplicación:

Títulos principales (Hero, nombre): Serif (Crimson Pro, Playfair Display, Lora)
Subtítulos y headings: Sans-serif bold (Inter, SF Pro)
Cuerpo de texto: Sans-serif regular (Inter con 17px/25px)
Metadata (fechas, tags): Sans-serif medium en tamaño caption

Sistema de Colores
Implementar selector de paletas intercambiables:
typescript// styles/themes/theme-manager.ts
export const colorPalettes = {
  ocean: {
    name: 'Ocean',
    light: {
      primary: '#0A7EA4',
      secondary: '#64CCC5',
      accent: '#176B87',
      background: '#FFFFFF',
      surface: '#F8FAFB',
      text: '#1A1A1A',
      textSecondary: '#6B7280',
    },
    dark: {
      primary: '#64CCC5',
      secondary: '#0A7EA4',
      accent: '#89CFF0',
      background: '#0A0A0A',
      surface: '#1A1A1A',
      text: '#F9FAFB',
      textSecondary: '#9CA3AF',
    }
  },
  forest: {
    name: 'Forest',
    light: {
      primary: '#2D5016',
      secondary: '#7CB342',
      accent: '#9CCC65',
      background: '#FFFFFF',
      surface: '#F1F8E9',
      text: '#1A1A1A',
      textSecondary: '#558B2F',
    },
    dark: {
      primary: '#9CCC65',
      secondary: '#7CB342',
      accent: '#C5E1A5',
      background: '#0D0D0D',
      surface: '#1A1A1A',
      text: '#F9FAFB',
      textSecondary: '#AED581',
    }
  },
  monochrome: {
    name: 'Monochrome',
    light: {
      primary: '#000000',
      secondary: '#404040',
      accent: '#737373',
      background: '#FFFFFF',
      surface: '#F5F5F5',
      text: '#0A0A0A',
      textSecondary: '#525252',
    },
    dark: {
      primary: '#FFFFFF',
      secondary: '#D4D4D4',
      accent: '#A3A3A3',
      background: '#0A0A0A',
      surface: '#171717',
      text: '#FAFAFA',
      textSecondary: '#A3A3A3',
    }
  },
  sunset: {
    name: 'Sunset',
    light: {
      primary: '#D97706',
      secondary: '#F59E0B',
      accent: '#FBBF24',
      background: '#FFFFFF',
      surface: '#FFF7ED',
      text: '#1A1A1A',
      textSecondary: '#92400E',
    },
    dark: {
      primary: '#FCD34D',
      secondary: '#FBBF24',
      accent: '#F59E0B',
      background: '#0A0A0A',
      surface: '#1C1917',
      text: '#FAFAF9',
      textSecondary: '#FDE68A',
    }
  }
};

export function applyColorPalette(palette: keyof typeof colorPalettes, mode: 'light' | 'dark') {
  const colors = colorPalettes[palette][mode];
  const root = document.documentElement;
  
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
  
  localStorage.setItem('color-palette', palette);
  localStorage.setItem('color-mode', mode);
}
CSS Variables (tokens/colors.css):
css:root {
  /* Valores por defecto - Ocean Light */
  --color-primary: #0A7EA4;
  --color-secondary: #64CCC5;
  --color-accent: #176B87;
  --color-background: #FFFFFF;
  --color-surface: #F8FAFB;
  --color-text: #1A1A1A;
  --color-text-secondary: #6B7280;
  
  /* Estados según HIG */
  --color-hover: rgba(10, 126, 164, 0.08);
  --color-pressed: rgba(10, 126, 164, 0.12);
  --color-disabled: rgba(26, 26, 26, 0.3);
  
  /* Separadores y bordes */
  --color-separator: rgba(0, 0, 0, 0.1);
  --color-border: rgba(0, 0, 0, 0.08);
}

[data-theme="dark"] {
  --color-separator: rgba(255, 255, 255, 0.1);
  --color-border: rgba(255, 255, 255, 0.08);
}
Espaciado y Layout
Seguir el sistema de 8pt grid de Apple:
css/* tokens/spacing.css */
:root {
  --spacing-1: 0.25rem;  /* 4px */
  --spacing-2: 0.5rem;   /* 8px */
  --spacing-3: 0.75rem;  /* 12px */
  --spacing-4: 1rem;     /* 16px */
  --spacing-5: 1.25rem;  /* 20px */
  --spacing-6: 1.5rem;   /* 24px */
  --spacing-8: 2rem;     /* 32px */
  --spacing-10: 2.5rem;  /* 40px */
  --spacing-12: 3rem;    /* 48px */
  --spacing-16: 4rem;    /* 64px */
  --spacing-20: 5rem;    /* 80px */
  --spacing-24: 6rem;    /* 96px */
  
  /* Radii según HIG */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
  
  /* Max widths para contenido */
  --content-max: 1120px;
  --content-reading: 680px;
}
Animaciones y Motion
Apple prefiere animaciones sutiles, con propósito:
css/* global.css */
:root {
  /* Durations según HIG */
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 400ms;
  
  /* Easing curves de Apple */
  --ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-decelerate: cubic-bezier(0.0, 0.0, 0.2, 1);
  --ease-accelerate: cubic-bezier(0.4, 0.0, 1, 1);
  --ease-spring: cubic-bezier(0.5, 1.5, 0.5, 1);
}

/* Transiciones por defecto */
* {
  transition-duration: var(--duration-fast);
  transition-timing-function: var(--ease-standard);
}

/* Reducción de movimiento */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
Framer Motion config para React:
typescript// utils/motion-config.ts
import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    transition: { duration: 0.2 }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.3,
      ease: [0.4, 0.0, 0.2, 1] // ease-standard
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};
Componentes Core Reutilizables
Button Component
typescript// components/core/Button.tsx
import { motion } from 'framer-motion';
import { type ComponentProps } from 'react';
import { cn } from '@/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const variants = {
  primary: 'bg-[var(--color-primary)] text-white hover:opacity-90',
  secondary: 'bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--color-hover)]',
  ghost: 'bg-transparent text-[var(--color-text)] hover:bg-[var(--color-hover)]'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className,
  children,
  ...props 
}: ButtonProps) {
  return (
    <motion.button
      className={cn(
        'rounded-[var(--radius-md)] font-medium',
        'transition-all duration-[var(--duration-fast)]',
        'active:scale-[0.98]',
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
Card Component
typescript// components/core/Card.tsx
import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        'bg-[var(--color-surface)] rounded-[var(--radius-lg)]',
        'border border-[var(--color-border)]',
        'overflow-hidden',
        hover && 'cursor-pointer',
        className
      )}
      whileHover={hover ? { 
        y: -4,
        boxShadow: '0 12px 24px rgba(0,0,0,0.08)'
      } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
Section Component
typescript// components/core/Section.tsx
import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        'py-20 md:py-32',
        'px-6 md:px-8',
        className
      )}
    >
      <div className="max-w-[var(--content-max)] mx-auto">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-16 md:mb-20"
          >
            {title && (
              <h2 className="font-[var(--font-heading)] font-semibold text-4xl md:text-5xl mb-4 text-[var(--color-text)]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="font-[var(--font-body)] text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
Secciones Principales
Hero Section
typescript// components/sections/Hero.tsx
import { motion } from 'framer-motion';
import { Button } from '@/components/core/Button';
import { SocialLinks } from '@/components/ui/SocialLinks';
import type { PersonalInfo } from '@/data/portfolio';

interface HeroProps {
  data: PersonalInfo;
}

export function Hero({ data }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Avatar opcional */}
          {data.avatar && (
            <motion.img
              src={data.avatar}
              alt={data.name}
              className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            />
          )}
          
          {/* Nombre - Tipografía Display Serif */}
          <h1 className="font-[var(--font-display)] font-semibold text-[var(--font-display-size-xl)] tracking-[var(--tracking-tight)] text-[var(--color-text)] mb-6">
            {data.name}
          </h1>
          
          {/* Rol - Sans-serif Heading */}
          <p className="font-[var(--font-heading)] font-medium text-2xl md:text-3xl text-[var(--color-primary)] mb-6">
            {data.role}
          </p>
          
          {/* Tagline - Body text */}
          <p className="font-[var(--font-body)] text-lg md:text-xl text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto leading-[1.6]">
            {data.tagline}
          </p>
          
          {/* Redes sociales */}
          <SocialLinks links={data.socialLinks} />
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex gap-4 justify-center mt-12"
          >
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Proyectos
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contacto
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
Projects Section
IMPORTANTE: NUNCA usar carousels para proyectos. Los carousels reducen la accesibilidad y ocultan contenido importante. Siempre mostrar proyectos en grid accesible con navegación clara a páginas de detalle individuales.
typescript// components/sections/Projects.tsx
import { motion } from 'framer-motion';
import { Section } from '@/components/core/Section';
import { ProjectCard } from '@/components/ui/ProjectCard';
import type { Project } from '@/data/portfolio';
import { staggerContainer, fadeInUp } from '@/utils/motion-config';

interface ProjectsProps {
  projects: Project[];
  featured?: boolean; // Si true, muestra solo featured en homepage
}

export function Projects({ projects, featured = false }: ProjectsProps) {
  const displayProjects = featured 
    ? projects.filter(p => p.featured).slice(0, 6)
    : projects;

  return (
    <Section
      id="projects"
      title={featured ? "Proyectos Destacados" : "Todos los Proyectos"}
      subtitle={
        featured 
          ? "Una selección de trabajos que reflejan mi experiencia y pasión por crear soluciones impactantes."
          : "Explora todos mis proyectos y casos de estudio."
      }
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {displayProjects.map((project) => (
          <motion.div key={project.id} variants={fadeInUp}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Link a página completa si estamos en homepage */}
      {featured && projects.length > 6 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/proyectos"
            className="inline-flex items-center gap-2 font-[var(--font-heading)] font-semibold text-lg text-[var(--color-primary)] hover:underline"
          >
            Ver todos los proyectos
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      )}
    </Section>
  );
}
ProjectCard Component
typescript// components/ui/ProjectCard.tsx
import { Card } from '@/components/core/Card';
import { motion } from 'framer-motion';
import type { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a href={`/proyecto/${project.slug}`} className="block h-full">
      <Card>
        {/* Imagen del proyecto */}
        {project.image && (
          <div className="aspect-video overflow-hidden bg-[var(--color-surface)]">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
        
        <div className="p-6">
          {/* Título - Heading sans-serif */}
          <h3 className="font-[var(--font-heading)] font-semibold text-xl mb-2 text-[var(--color-text)]">
            {project.title}
          </h3>
          
          {/* Descripción corta - Body text */}
          <p className="font-[var(--font-body)] text-[var(--color-text-secondary)] mb-4 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>
          
          {/* Tech stack - Caption */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="font-[var(--font-caption)] font-medium text-xs px-3 py-1 rounded-full bg-[var(--color-primary)] bg-opacity-10 text-[var(--color-primary)]"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="font-[var(--font-caption)] font-medium text-xs px-3 py-1 text-[var(--color-text-secondary)]">
                +{project.techStack.length - 4} más
              </span>
            )}
          </div>
          
          {/* CTA para ver detalle */}
          <div className="flex items-center gap-2 pt-4 border-t border-[var(--color-separator)] text-[var(--color-primary)] font-[var(--font-caption)] font-semibold text-sm">
            Ver caso de estudio
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Card>
    </a>
  );
}
Experience Section
IMPORTANTE: La sección de experiencia debe comunicar valor y capacidades, no solo historial laboral. Enfocarse en QUÉ PROBLEMAS RESUELVO y CÓMO agrego valor a las empresas.
typescript// components/sections/Experience.tsx
import { motion } from 'framer-motion';
import { Section } from '@/components/core/Section';
import { ExperienceItem } from '@/components/ui/ExperienceItem';
import type { Experience } from '@/data/portfolio';
import { staggerContainer, fadeInUp } from '@/utils/motion-config';

interface ExperienceProps {
  experiences: Experience[];
  expertise?: string[]; // Lista de áreas de expertise
}

export function Experience({ experiences, expertise }: ExperienceProps) {
  return (
    <Section
      id="experience"
      title="Experiencia"
    >
      {/* Expertise highlight - Lo que sé resolver */}
      {expertise && expertise.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]"
        >
          <h3 className="font-[var(--font-heading)] font-semibold text-2xl mb-6 text-[var(--color-text)]">
            Soy especialmente bueno resolviendo:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expertise.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <svg 
                  className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-[var(--font-body)] text-lg text-[var(--color-text)]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Timeline de experiencia */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-12"
      >
        {experiences.map((exp) => (
          <motion.div key={exp.id} variants={fadeInUp}>
            <ExperienceItem experience={exp} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
typescript// components/ui/ExperienceItem.tsx
import { motion } from 'framer-motion';
import type { Experience } from '@/data/portfolio';

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="relative pl-8 md:pl-12 border-l-2 border-[var(--color-border)]">
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-4 h-4 -ml-[9px] rounded-full bg-[var(--color-primary)] ring-4 ring-[var(--color-background)]" />
      
      <div>
        {/* Header */}
        <div className="mb-4">
          <h3 className="font-[var(--font-heading)] font-semibold text-2xl text-[var(--color-text)] mb-1">
            {experience.role}
          </h3>
          <div className="flex flex-wrap items-center gap-3 font-[var(--font-caption)] text-base text-[var(--color-text-secondary)]">
            <span className="font-semibold text-[var(--color-primary)]">
              {experience.company}
            </span>
            {experience.location && (
              <>
                <span>•</span>
                <span>{experience.location}</span>
              </>
            )}
            <span>•</span>
            <span>
              {experience.startDate} - {experience.endDate}
            </span>
          </div>
        </div>

        {/* Descripción principal */}
        <p className="font-[var(--font-body)] text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          {experience.description}
        </p>

        {/* Logros cuantificables - ENFOQUE EN IMPACTO */}
        {experience.achievements && experience.achievements.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-[var(--font-heading)] font-semibold text-base text-[var(--color-text)] mb-3">
              Impacto y Logros:
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, idx) => (
                <li 
                  key={idx}
                  className="flex gap-3 font-[var(--font-body)] text-base text-[var(--color-text-secondary)]"
                >
                  <span className="text-[var(--color-primary)] font-bold mt-1">▸</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech stack usado */}
        {experience.techStack && experience.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {experience.techStack.map((tech) => (
              <span
                key={tech}
                className="font-[var(--font-caption)] font-medium text-xs px-3 py-1 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
Skills Section
typescript// components/sections/Skills.tsx
import { motion } from 'framer-motion';
import { Section } from '@/components/core/Section';
import { SkillBadge } from '@/components/ui/SkillBadge';
import type { SkillCategory } from '@/data/portfolio';
import { staggerContainer, fadeInUp } from '@/utils/motion-config';

interface SkillsProps {
  skills: SkillCategory[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <Section
      id="skills"
      title="Skills Técnicos"
      subtitle="Tecnologías y herramientas que domino para crear soluciones efectivas."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-12"
      >
        {skills.map((category) => (
          <motion.div key={category.name} variants={fadeInUp}>
            <h3 className="font-[var(--font-heading)] font-semibold text-2xl mb-6 text-[var(--color-text)]">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
Project Detail Page
Cada proyecto debe tener su página de detalle con caso de estudio completo:
astro---
// pages/proyecto/[slug].astro
import BaseLayout from '@/layouts/BaseLayout.astro';
import { ProjectDetail } from '@/components/sections/ProjectDetail';
import { portfolioData } from '@/data/portfolio';

export async function getStaticPaths() {
  return portfolioData.projects.map((project) => ({
    params: { slug: project.slug },
    props: { project },
  }));
}

const { project } = Astro.props;
---

<BaseLayout 
  title={`${project.title} - Tu Nombre`}
  description={project.shortDescription}
  image={project.image}
>
  <ProjectDetail project={project} client:load />
</BaseLayout>
typescript// components/sections/ProjectDetail.tsx
import { motion } from 'framer-motion';
import { Button } from '@/components/core/Button';
import type { Project } from '@/data/portfolio';

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Back button */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 mb-8">
        <a 
          href="/#projects"
          className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] font-[var(--font-caption)] font-medium"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver a proyectos
        </a>
      </div>

      {/* Hero section del proyecto */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-6 md:px-8 mb-16"
      >
        <h1 className="font-[var(--font-display)] font-semibold text-5xl md:text-6xl mb-6 text-[var(--color-text)]">
          {project.title}
        </h1>
        
        <p className="font-[var(--font-body)] text-xl md:text-2xl text-[var(--color-text-secondary)] mb-8 leading-relaxed max-w-3xl">
          {project.shortDescription}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap gap-8 mb-8">
          {project.client && (
            <div>
              <p className="font-[var(--font-caption)] font-medium text-xs text-[var(--color-text-secondary)] mb-1 uppercase tracking-wider">
                Cliente
              </p>
              <p className="font-[var(--font-body)] text-base text-[var(--color-text)]">
                {project.client}
              </p>
            </div>
          )}
          {project.year && (
            <div>
              <p className="font-[var(--font-caption)] font-medium text-xs text-[var(--color-text-secondary)] mb-1 uppercase tracking-wider">
                Año
              </p>
              <p className="font-[var(--font-body)] text-base text-[var(--color-text)]">
                {project.year}
              </p>
            </div>
          )}
          {project.role && (
            <div>
              <p className="font-[var(--font-caption)] font-medium text-xs text-[var(--color-text-secondary)] mb-1 uppercase tracking-wider">
                Rol
              </p>
              <p className="font-[var(--font-body)] text-base text-[var(--color-text)]">
                {project.role}
              </p>
            </div>
          )}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-[var(--font-caption)] font-medium text-sm px-4 py-2 rounded-full bg-[var(--color-primary)] bg-opacity-10 text-[var(--color-primary)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-4">
          {project.liveUrl && (
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              Ver Demo
            </Button>
          )}
          {project.repoUrl && (
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.open(project.repoUrl, '_blank')}
            >
              Ver Código
            </Button>
          )}
        </div>
      </motion.div>

      {/* Imagen destacada */}
      {project.image && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 md:px-8 mb-20"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      )}

      {/* Contenido del caso de estudio */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-3xl mx-auto px-6 md:px-8 space-y-16"
      >
        {/* El Desafío */}
        {project.challenge && (
          <div>
            <h2 className="font-[var(--font-heading)] font-semibold text-3xl mb-6 text-[var(--color-text)]">
              El Desafío
            </h2>
            <div 
              className="font-[var(--font-body)] text-lg text-[var(--color-text-secondary)] leading-relaxed prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: project.challenge }}
            />
          </div>
        )}

        {/* La Solución */}
        {project.solution && (
          <div>
            <h2 className="font-[var(--font-heading)] font-semibold text-3xl mb-6 text-[var(--color-text)]">
              La Solución
            </h2>
            <div 
              className="font-[var(--font-body)] text-lg text-[var(--color-text-secondary)] leading-relaxed prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: project.solution }}
            />
          </div>
        )}

        {/* Galería de imágenes adicionales */}
        {project.gallery && project.gallery.length > 0 && (
          <div>
            <h2 className="font-[var(--font-heading)] font-semibold text-3xl mb-6 text-[var(--color-text)]">
              Capturas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden shadow-lg">
                  <img src={img.url} alt={img.caption || `Screenshot ${idx + 1}`} className="w-full" />
                  {img.caption && (
                    <p className="font-[var(--font-caption)] text-sm text-[var(--color-text-secondary)] mt-2 text-center">
                      {img.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resultados */}
        {project.results && project.results.length > 0 && (
          <div>
            <h2 className="font-[var(--font-heading)] font-semibold text-3xl mb-6 text-[var(--color-text)]">
              Resultados e Impacto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.results.map((result, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]"
                >
                  <div className="font-[var(--font-display)] font-semibold text-4xl text-[var(--color-primary)] mb-2">
                    {result.metric}
                  </div>
                  <p className="font-[var(--font-body)] text-base text-[var(--color-text-secondary)]">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Aprendizajes */}
        {project.learnings && (
          <div>
            <h2 className="font-[var(--font-heading)] font-semibold text-3xl mb-6 text-[var(--color-text)]">
              Aprendizajes Clave
            </h2>
            <ul className="space-y-4">
              {project.learnings.map((learning, idx) => (
                <li 
                  key={idx}
                  className="flex gap-4 font-[var(--font-body)] text-lg text-[var(--color-text-secondary)]"
                >
                  <span className="text-[var(--color-primary)] font-bold">•</span>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>

      {/* Navegación a siguiente proyecto */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 mt-24 pt-12 border-t border-[var(--color-separator)]">
        <a 
          href="/#projects"
          className="inline-flex items-center gap-2 font-[var(--font-heading)] font-semibold text-lg text-[var(--color-primary)] hover:underline"
        >
          Ver más proyectos
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

## Data Structure
```typescript
// data/portfolio.ts
export interface SocialLink {
  platform: 'linkedin' | 'github' | 'twitter' | 'email' | 'website';
  url: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  avatar?: string;
  location?: string;
  email?: string;
  socialLinks: SocialLink[];
}

export interface Project {
  id: string;
  slug: string; // URL-friendly identifier (e.g., "ecommerce-platform")
  title: string;
  shortDescription: string; // Para cards (2-3 líneas)
  image?: string; // Imagen principal
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  
  // Metadata del proyecto
  client?: string;
  year?: string;
  role?: string; // "Full Stack Developer", "Frontend Lead", etc.
  
  // Caso de estudio completo (HTML permitido)
  challenge?: string; // El problema/desafío que resolvió
  solution?: string; // Cómo lo resolviste, arquitectura, decisiones
  gallery?: Array<{ url: string; caption?: string }>; // Imágenes adicionales
  results?: Array<{ metric: string; description: string }>; // Ej: "+50%", "Mejora en conversiones"
  learnings?: string[]; // Aprendizajes clave del proyecto
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string; // "Enero 2023" o "Jan 2023"
  endDate: string | 'Presente'; // "Diciembre 2024", "Presente", "Present"
  description: string; // Descripción del rol y responsabilidades principales
  achievements?: string[]; // LOGROS CUANTIFICABLES con impacto medible
  location?: string; // "Buenos Aires, Argentina" o "Remoto"
  techStack?: string[]; // Tecnologías principales usadas en este rol
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  projects: Project[];
  experience: Experience[];
  expertise: string[]; // Áreas donde eres especialmente bueno resolviendo
  skills: SkillCategory[];
}

// Datos de ejemplo
export const portfolioData: PortfolioData = {
  personal: {
    name: 'Tu Nombre',
    role: 'Full Stack Developer',
    tagline: 'Construyendo experiencias web excepcionales con atención al detalle y código limpio.',
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/tu-perfil',
        label: 'LinkedIn'
      }
    ]
  },
  projects: [],
  experience: [],
  expertise: [
    'Arquitecturas escalables con Node.js y microservicios',
    'Optimización de rendimiento en aplicaciones React',
    'Integración de APIs RESTful y GraphQL',
    'Implementación de CI/CD y DevOps workflows',
    'Refactorización de código legacy a arquitecturas modernas',
    'Diseño de sistemas de autenticación seguros'
  ],
  skills: []
};
```

## Theme Switcher Component
```typescript
// components/ui/ThemeSwitcher.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colorPalettes, applyColorPalette } from '@/styles/themes/theme-manager';

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPalette, setCurrentPalette] = useState<keyof typeof colorPalettes>('ocean');
  const [currentMode, setCurrentMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedPalette = localStorage.getItem('color-palette') as keyof typeof colorPalettes;
    const savedMode = localStorage.getItem('color-mode') as 'light' | 'dark';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const palette = savedPalette || 'ocean';
    const mode = savedMode || (prefersDark ? 'dark' : 'light');
    
    setCurrentPalette(palette);
    setCurrentMode(mode);
    applyColorPalette(palette, mode);
  }, []);

  const handlePaletteChange = (palette: keyof typeof colorPalettes) => {
    setCurrentPalette(palette);
    applyColorPalette(palette, currentMode);
    setIsOpen(false);
  };

  const toggleMode = () => {
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    setCurrentMode(newMode);
    applyColorPalette(currentPalette, newMode);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Botón principal */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </motion.button>

      {/* Panel de paletas */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 bg-[var(--color-surface)] rounded-2xl shadow-2xl border border-[var(--color-border)] p-6 min-w-[280px]"
          >
            <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-4">
              Personalizar tema
            </h3>
            
            {/* Toggle Light/Dark */}
            <div className="flex items-center justify-between mb-6 p-3 bg-[var(--color-background)] rounded-lg">
              <span className="font-[var(--font-body)] text-sm">Modo oscuro</span>
              <button
                onClick={toggleMode}
                className={`w-12 h-6 rounded-full transition-colors ${
                  currentMode === 'dark' ? 'bg-[var(--color-primary)]' : 'bg-gray-300'
                }`}
              >
                <motion.div
                  className="w-5 h-5 bg-white rounded-full"
                  animate={{ x: currentMode === 'dark' ? 26 : 2 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
            </div>
            
            {/* Paletas */}
            <div className="space-y-2">
              <p className="font-[var(--font-caption)] font-medium text-xs text-[var(--color-text-secondary)] mb-3">
                Paleta de colores
              </p>
              {Object.entries(colorPalettes).map(([key, palette]) => (
                <button
                  key={key}
                  onClick={() => handlePaletteChange(key as keyof typeof colorPalettes)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    currentPalette === key
                      ? 'bg-[var(--color-primary)] bg-opacity-10 border-2 border-[var(--color-primary)]'
                      : 'bg-[var(--color-background)] hover:bg-[var(--color-hover)]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <div 
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: palette[currentMode].primary }}
                      />
                      <div 
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: palette[currentMode].secondary }}
                      />
                      <div 
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: palette[currentMode].accent }}
                      />
                    </div>
                    <span className="font-[var(--font-body)] text-sm">
                      {palette.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

## SEO y Performance
```astro
---
// layouts/BaseLayout.astro
import '@/styles/global.css';

interface Props {
  title?: string;
  description?: string;
  image?: string;
}

const {
  title = 'Tu Nombre - Full Stack Developer',
  description = 'Portfolio profesional de desarrollo web',
  image = '/og-image.jpg'
} = Astro.props;

const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="canonical" href={canonicalURL} />
    
    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonicalURL} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={new URL(image, Astro.url)} />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={canonicalURL} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={new URL(image, Astro.url)} />
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

## Checklist de Implementación

Cuando generes un portfolio, asegúrate de:

### Diseño
- [ ] Sistema de tipografía serif/sans-serif correctamente aplicado
- [ ] Paletas de colores intercambiables implementadas
- [ ] Modo claro/oscuro funcional
- [ ] Espaciado siguiendo 8pt grid
- [ ] Animaciones sutiles con Framer Motion
- [ ] Responsive design mobile-first
- [ ] Accesibilidad (contraste, navegación por teclado, ARIA labels)
- [ ] **NUNCA usar carousels** - siempre grids accesibles

### Arquitectura
- [ ] Componentes core reutilizables (Button, Card, Section)
- [ ] Secciones modulares (Hero, Projects, Experience, Skills)
- [ ] **Páginas de detalle para cada proyecto** con caso de estudio completo
- [ ] Página `/proyectos` con grid completo
- [ ] Data centralizada en `/data/portfolio.ts`
- [ ] Utilidades helpers (`cn.ts`, motion configs)
- [ ] Theme manager funcional
- [ ] CSS tokens organizados por categoría

### Performance
- [ ] Imágenes optimizadas (lazy loading, formatos modernos)
- [ ] Preload de fuentes críticas
- [ ] Code splitting apropiado
- [ ] Meta tags SEO completos para cada página
- [ ] Lighthouse score > 90

### Contenido
- [ ] Información personal completa
- [ ] Al menos 3 proyectos con casos de estudio detallados
- [ ] Cada proyecto con slug, hero image, galería opcional
- [ ] **Expertise highlight**: qué problemas resuelves especialmente bien
- [ ] Experiencia laboral con logros cuantificables (métricas, impacto)
- [ ] Skills agrupados por categoría
- [ ] Redes sociales con iconos

### Navegación y UX
- [ ] Link "Ver todos los proyectos" desde homepage
- [ ] Breadcrumb/back button en páginas de detalle
- [ ] Enlaces a demo/código en cada proyecto
- [ ] Navegación fluida entre secciones
- [ ] Estados hover/focus claramente visibles

## Mejora de Portfolio Existente

Si el usuario proporciona código existente:

1. **Auditoría inicial:**
   - Identificar stack tecnológico actual
   - Evaluar arquitectura de componentes
   - Revisar sistema de estilos
   - Detectar problemas de performance

2. **Plan de migración:**
   - Priorizar cambios críticos (diseño, tipografía, colores)
   - Migración gradual a Astro + React
   - Refactorización de componentes
   - Implementación de theme system

3. **Preservar contenido:**
   - Extraer datos existentes a `/data/portfolio.ts`
   - Migrar imágenes optimizadas
   - Mantener URLs y SEO

## Ejemplo de Output

Cuando generes el portfolio, estructura tu respuesta así:
He creado tu portfolio profesional siguiendo Apple HIG. Aquí está la estructura:
[Presentar archivos generados organizados por carpetas]
Características destacadas:

Sistema de paletas intercambiables (Ocean, Forest, Monochrome, Sunset)
Tipografía serif (Crimson Pro) para títulos + sans-serif (Inter) para cuerpo
Modo claro/oscuro automático
Animaciones sutiles con Framer Motion
Componentes 100% reutilizables

Para personalizar, edita /src/data/portfolio.ts con tu información.

## Notas Finales

- **NUNCA uses Comic Sans, Papyrus, o fuentes decorativas genéricas**
- **Prioriza legibilidad sobre creatividad excesiva** - Apple HIG enfatiza claridad
- **Evita animaciones agresivas** - sutileza es clave
- **Mantén jerarquía visual clara** - cada sección debe tener propósito
- **Respeta el espacio en blanco** - no llenes cada pixel
- **Diseña mobile-first** - la mayoría del tráfico viene de móviles
- **Testea accesibilidad** - usa herramientas como axe DevTools

Este skill te permite generar portfolios de calidad profesional que respetan los estándares de diseño más altos de la industria.