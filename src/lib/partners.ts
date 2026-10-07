import partnersJson from '@content/partners.json';
import type { Logo } from '@/components/partners/LogoCard';

export interface SponsorGroup {
  title: string;
  /** "big" = 376×128 tiles, "standard" = 176×60 tiles */
  size: 'big' | 'standard';
  logos: Logo[];
}

export const partners = partnersJson as unknown as {
  sponsors2026: SponsorGroup[];
  mediaPartners2026: Logo[];
} & Record<string, unknown>;
