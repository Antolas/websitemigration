'use client';

import { usePathname } from 'next/navigation';
import { editionFromPath } from './palettes';
import { getTheme } from './theme';

/**
 * Theme matching the current route: /2024 and /2025 keep their edition colours,
 * every other page uses the current edition.
 */
export function useEditionTheme() {
  return getTheme(editionFromPath(usePathname()));
}
