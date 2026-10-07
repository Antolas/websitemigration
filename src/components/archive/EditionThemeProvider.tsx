'use client';

import { ThemeProvider } from '@mui/material/styles';
import type { ReactNode } from 'react';
import type { Edition } from '@/theme/palettes';
import { getTheme } from '@/theme/theme';

/** Wraps an archive page so every styled component uses that edition's palette. */
export default function EditionThemeProvider({ edition, children }: { edition: Edition; children: ReactNode }) {
  return <ThemeProvider theme={getTheme(edition)}>{children}</ThemeProvider>;
}
