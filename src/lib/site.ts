import site from '@content/site.json';

export type NavButtonType = 'navigate' | 'tab' | 'past-editions';

export interface NavButton {
  identifier: string;
  text: string;
  link?: string;
  type: NavButtonType | string;
}

export interface AnnouncementBanner {
  text: string;
  buttonText?: string;
  linkButton?: string;
}

export interface SiteConfig {
  navigation: NavButton[];
  banner?: AnnouncementBanner | null;
}

export const siteConfig = site as SiteConfig;

const DEFAULT_BUTTONS: Record<string, NavButton> = {
  'navbar-1': { identifier: 'navbar-1', text: 'About', link: '/about', type: 'navigate' },
  'navbar-2': { identifier: 'navbar-2', text: 'Past Editions', type: 'past-editions' },
  'navbar-3': { identifier: 'navbar-3', text: 'Become a Sponsor', link: '/become-a-sponsor', type: 'tab' },
  'navbar-right': { identifier: 'navbar-right', text: 'Register', link: '/register-now', type: 'navigate' },
};

/** Navigation button configured in content/site.json, falling back to the built-in defaults. */
export function getNavButton(identifier: string): NavButton | undefined {
  return siteConfig.navigation.find((b) => b.identifier === identifier) ?? DEFAULT_BUTTONS[identifier];
}

export const SITE_URL = 'https://platmosphere.com';
