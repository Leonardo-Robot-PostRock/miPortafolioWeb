export const colorPalettes = {
  ocean: {
    name: 'Ocean',
    light: {
      primary: '#0A7EA4',
      'primary-foreground': '#FFFFFF',
      secondary: '#64CCC5',
      accent: '#176B87',
      background: '#FFFFFF',
      surface: '#F8FAFB',
      text: '#1A1A1A',
      'text-secondary': '#6B7280',
    },
    dark: {
      primary: '#64CCC5',
      'primary-foreground': '#052E35',
      secondary: '#0A7EA4',
      accent: '#89CFF0',
      background: '#0A0A0A',
      surface: '#1A1A1A',
      text: '#F9FAFB',
      'text-secondary': '#9CA3AF',
    }
  },
  forest: {
    name: 'Forest',
    light: {
      primary: '#2D5016',
      'primary-foreground': '#FFFFFF',
      secondary: '#7CB342',
      accent: '#9CCC65',
      background: '#FFFFFF',
      surface: '#F1F8E9',
      text: '#1A1A1A',
      'text-secondary': '#558B2F',
    },
    dark: {
      primary: '#9CCC65',
      'primary-foreground': '#1A2E0A',
      secondary: '#7CB342',
      accent: '#C5E1A5',
      background: '#0D0D0D',
      surface: '#1A1A1A',
      text: '#F9FAFB',
      'text-secondary': '#AED581',
    }
  },
  monochrome: {
    name: 'Monochrome',
    light: {
      primary: '#000000',
      'primary-foreground': '#FFFFFF',
      secondary: '#404040',
      accent: '#737373',
      background: '#FFFFFF',
      surface: '#F5F5F5',
      text: '#0A0A0A',
      'text-secondary': '#525252',
    },
    dark: {
      primary: '#FFFFFF',
      'primary-foreground': '#0A0A0A',
      secondary: '#D4D4D4',
      accent: '#A3A3A3',
      background: '#0A0A0A',
      surface: '#171717',
      text: '#FAFAFA',
      'text-secondary': '#A3A3A3',
    }
  },
  sunset: {
    name: 'Sunset',
    light: {
      primary: '#D97706',
      'primary-foreground': '#FFFFFF',
      secondary: '#F59E0B',
      accent: '#FBBF24',
      background: '#FFFFFF',
      surface: '#FFF7ED',
      text: '#1A1A1A',
      'text-secondary': '#92400E',
    },
    dark: {
      primary: '#FCD34D',
      'primary-foreground': '#451A03',
      secondary: '#FBBF24',
      accent: '#F59E0B',
      background: '#0A0A0A',
      surface: '#1C1917',
      text: '#FAFAF9',
      'text-secondary': '#FDE68A',
    }
  }
} as const;

export type PaletteName = keyof typeof colorPalettes;
export type ColorMode = 'light' | 'dark';

export function applyColorPalette(palette: PaletteName, mode: ColorMode) {
  const colors = colorPalettes[palette][mode];
  const root = document.documentElement;

  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });

  root.setAttribute('data-theme', mode);
  localStorage.setItem('color-palette', palette);
  localStorage.setItem('color-mode', mode);
}

export function getInitialTheme(): { palette: PaletteName; mode: ColorMode } {
  const savedPalette = (typeof localStorage !== 'undefined'
    ? localStorage.getItem('color-palette')
    : null) as PaletteName | null;
  const savedMode = (typeof localStorage !== 'undefined'
    ? localStorage.getItem('color-mode')
    : null) as ColorMode | null;
  const prefersDark = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false;

  return {
    palette: savedPalette || 'ocean',
    mode: savedMode || (prefersDark ? 'dark' : 'light'),
  };
}
