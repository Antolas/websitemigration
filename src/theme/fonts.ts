import { Fira_Code, Inter } from 'next/font/google';

export const interFont = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'greek', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const firaCodeFont = Fira_Code({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'greek'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const inter = interFont.style.fontFamily;
export const firaCode = firaCodeFont.style.fontFamily;
