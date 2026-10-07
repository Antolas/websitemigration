'use client';

/**
 * Small client-side buttons used by server-rendered sections.
 * They only differ by style and by how they navigate (router push vs new tab).
 */
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import Icon from '@/components/common/Icon';
import LinkButton from './LinkButton';
import WhiteButton from './WhiteButton';

/** Outlined (secondary) button with →, navigating inside the site. e.g. "Meet Our Speakers". */
export function SecondaryNavButton({ href, children, iconSize = 20 }: { href: string; children: ReactNode; iconSize?: number }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(href)}
      endIcon={<Icon name="arrow-right.svg" height={iconSize} width={iconSize} />}
      variant="contained"
      color="secondary"
    >
      {children}
    </Button>
  );
}

/** Filled primary button with →, navigating inside the site. */
export function PrimaryNavButton({ href, children }: { href: string; children: ReactNode }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(href)}
      endIcon={<Icon name="arrow-right.svg" height={16} width={17} />}
      variant="contained"
      color="primary"
    >
      {children}
    </Button>
  );
}

/** White button with →, navigating inside the site. e.g. "Get Updates". */
export function WhiteNavButton({ href, children }: { href: string; children: ReactNode }) {
  const router = useRouter();
  return (
    <WhiteButton onClick={() => router.push(href)} endIcon={<Icon name="arrow-right.svg" height={16} width={17} />}>
      {children}
    </WhiteButton>
  );
}

/** White button opening a link (new tab by default). e.g. "Sign up ↗". */
export function WhiteLinkButton({
  label,
  href,
  iconName = 'arrow-up-right.svg',
  target = '_blank',
}: {
  label: string;
  href: string;
  iconName?: string;
  target?: string;
}) {
  return (
    <div style={{ paddingTop: '24px' }}>
      <WhiteButton onClick={() => window.open(href, target)} endIcon={<Icon name={iconName} />}>
        {label}
      </WhiteButton>
    </div>
  );
}

/** Underlined text link opening a URL in a new tab. e.g. "Become a 2027 Sponsor ↗". */
export function ExternalTextLink({
  href,
  children,
  darkMode = false,
  icon = 'arrow-up-right.svg',
}: {
  href: string;
  children: ReactNode;
  darkMode?: boolean;
  icon?: string;
}) {
  return (
    <LinkButton darkMode={darkMode} onClick={() => window.open(href, '_blank')} icon={icon}>
      {children}
    </LinkButton>
  );
}

/** Underlined text link navigating inside the site. e.g. "Read more →". */
export function InternalTextLink({
  href,
  children,
  darkMode = false,
  icon = 'arrow-right.svg',
}: {
  href: string;
  children: ReactNode;
  darkMode?: boolean;
  icon?: string;
}) {
  const router = useRouter();
  return (
    <LinkButton darkMode={darkMode} onClick={() => router.push(href)} icon={icon}>
      {children}
    </LinkButton>
  );
}

/** "Watch video recap ↗" link on dark sections. */
export function WatchRecapLink({ href, label }: { href: string; label: string }) {
  return (
    <LinkButton onClick={() => window.open(href, '_blank')} icon="arrow-up-right.svg" darkMode>
      <Typography variant="bodySAlt">{label}</Typography>
    </LinkButton>
  );
}
