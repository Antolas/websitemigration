/**
 * Colour palettes of each Platmosphere edition.
 * The current edition (2026) uses `current`; the archive pages /2024 and /2025
 * keep the palette they had when they were live.
 */
export type Edition = 'current' | '2024' | '2025';

export interface EditionPalette {
  primary: Record<50 | 100 | 200 | 300 | 500 | 700 | 800 | 900 | 950, string>;
  grey: Record<25 | 50 | 100 | 200 | 300 | 400 | 600 | 800 | 900, string>;
  button: { disabledBackground: string; secondaryBorder: string; secondaryHover: string };
}

export const palettes: Record<Edition, EditionPalette> = {
  current: {
    primary: {
      50: '#EAFEF3', 100: '#D5FDE7', 200: '#AAFBD0', 300: '#71D9BA', 500: '#00968D',
      700: '#00747C', 800: '#00516B', 900: '#003140', 950: '#00202B',
    },
    grey: {
      25: '#F9FAFA', 50: '#EEEFEF', 100: '#D1D4D4', 200: '#B9BEBF', 300: '#A2A8AA',
      400: '#747D7F', 600: '#465155', 800: '#17262A', 900: '#001015',
    },
    button: { disabledBackground: '#EEEFEF', secondaryBorder: '#AAFBD0', secondaryHover: 'rgba(234, 254, 243, 0.24)' },
  },
  '2024': {
    primary: {
      50: '#E9F5FF', 100: '#B8DCFF', 200: '#8EC7FF', 300: '#5FB1FF', 500: '#1890FF',
      700: '#206FDC', 800: '#205DCA', 900: '#002F5A', 950: '#162039',
    },
    grey: {
      25: '#FBFCFC', 50: '#F1F3F3', 100: '#D7D9DB', 200: '#BEBFC3', 300: '#A4A4AB',
      400: '#8B8A93', 600: '#585662', 800: '#252132', 900: '#0B071A',
    },
    button: { disabledBackground: '#BEBFC3', secondaryBorder: '#8EC7FF', secondaryHover: 'rgba(142, 199, 255, 0.1)' },
  },
  '2025': {
    primary: {
      50: '#EFEBFC', 100: '#D2C4F4', 200: '#9F86EB', 300: '#7F5EE4', 500: '#5F36DD',
      700: '#4C2BB1', 800: '#392085', 900: '#261658', 950: '#22144F',
    },
    grey: {
      25: '#FBFCFC', 50: '#F1F3F3', 100: '#D7D9DB', 200: '#BEBFC3', 300: '#A4A4AB',
      400: '#8B8A93', 600: '#585662', 800: '#252132', 900: '#0B071A',
    },
    button: { disabledBackground: '#BEBFC3', secondaryBorder: '#9F86EB', secondaryHover: 'rgba(159, 134, 235, 0.1)' },
  },
};

/** Archive pages use the palette of their own edition. */
export function editionFromPath(pathname: string | null | undefined): Edition {
  if (pathname === '/2024') return '2024';
  if (pathname === '/2025') return '2025';
  return 'current';
}
