import type { ReactNode } from 'react';
import { SiSvelte, SiRedux, SiPython, SiExpress, SiConfluence, SiNodedotjs, SiAngular, SiMongodb, SiDocker, SiGit, SiRabbitmq, SiPostgresql } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

interface SkillIconData {
    icon: ReactNode;
    brandColor: string;
}

function Monogram({ label }: { label: string }) {
    const abbr = label.length <= 3 ? label : label.slice(0, 2);
    return (
        <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
            <rect x="1" y="1" width="22" height="22" rx="6" fill="currentColor" opacity="0.08" />
            <text
                x="12"
                y="16"
                textAnchor="middle"
                fill="currentColor"
                fontSize="10"
                fontWeight="700"
                fontFamily="Inter, system-ui, sans-serif"
            >
                {abbr}
            </text>
        </svg>
    );
}

const icons: Record<string, SkillIconData> = {
    React: {
        brandColor: '#61DAFB',
        icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
                <circle cx="12" cy="12" r="2.2" fill="currentColor" />
                <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" />
                <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)" />
            </svg>
        ),
    },
    'React Native': {
        brandColor: '#61DAFB',
        icon: <TbBrandReactNative size="100%" />,
    },
    'Next.js': {
        brandColor: '#A0A0A0',
        icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
                <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <path d="M8 16V8l10 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 8v4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    Svelte: {
        brandColor: '#FF3E00',
        icon: <SiSvelte size="100%" />,
    },
    SvelteKit: {
        brandColor: '#FF3E00',
        icon: <SiSvelte size="100%" />,
    },
    Angular: {
        brandColor: '#DD0031',
        icon: <SiAngular size="100%" />,
    },
    Redux: {
        brandColor: '#764ABC',
        icon: <SiRedux size="100%" />,
    },
    'Node.js': {
        brandColor: '#339933',
        icon: <SiNodedotjs size="100%" />,
    },
    Express: {
        brandColor: '#A0A0A0',
        icon: <SiExpress size="100%" />,
    },
    Python: {
        brandColor: '#3776AB',
        icon: <SiPython size="100%" />,
    },
    'REST APIs': {
        brandColor: '#6366F1',
        icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
                <circle cx="5" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1.3" />
                <circle cx="19" cy="6" r="2" fill="none" stroke="currentColor" strokeWidth="1.3" />
                <circle cx="19" cy="18" r="2" fill="none" stroke="currentColor" strokeWidth="1.3" />
                <path d="M7 11.2L17 6.8M7 12.8l10 4.4" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
        ),
    },
    PostgreSQL: {
        brandColor: '#4169E1',
        icon: <SiPostgresql size="100%" />,
    },
    MongoDB: {
        brandColor: '#47A248',
        icon: <SiMongodb size="100%" />,
    },
    CouchDB: {
        brandColor: '#E42528',
        icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
                <ellipse cx="12" cy="8" rx="7" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <path d="M5 8v8c0 1.9 3.1 3.5 7 3.5s7-1.6 7-3.5V8" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <path d="M3 14h2M19 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            </svg>
        ),
    },
    PouchDB: {
        brandColor: '#6CCB99',
        icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
                <ellipse cx="12" cy="9" rx="6" ry="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <path d="M6 9v7c0 1.7 2.7 3 6 3s6-1.3 6-3V9" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <path d="M12 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M9 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    Docker: {
        brandColor: '#2496ED',
        icon: <SiDocker size="100%" />,
    },
    Git: {
        brandColor: '#F05032',
        icon: <SiGit size="100%" />,
    },
    RabbitMQ: {
        brandColor: '#FF6600',
        icon: <SiRabbitmq size="100%" />,
    },
    'AG Grid': {
        brandColor: '#66BCEB',
        icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
                <path d="M3 8l9-5 9 5v8l-9 5-9-5V8z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                <path d="M3 8l9 5 9-5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                <path d="M12 13v8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                <path d="M7.5 10.5l4.5 2.5 4.5-2.5" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
            </svg>
        ),
    },
    Confluence: {
        brandColor: '#172B4D',
        icon: <SiConfluence size="100%" />,
    },
};

export function getSkillIcon(skill: string): SkillIconData {
    return icons[skill] ?? { icon: <Monogram label={skill} />, brandColor: 'currentColor' };
}
