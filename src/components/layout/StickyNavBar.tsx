'use client';

import { styled } from '@mui/material/styles';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { siteConfig } from '@/lib/site';
import AnnouncementBanner from './AnnouncementBanner';
import { useBannerState } from './BannerState';

const NavWrapper = styled('div', { shouldForwardProp: (p) => p !== '$hasBanner' })<{ $hasBanner: boolean }>(({ theme, $hasBanner }) => ({
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  zIndex: 1200,
  display: 'flex',
  flexDirection: 'column',
  padding: $hasBanner ? '0px' : '30px 0px 0px 0px',
  paddingRight: 'inherit',
  [theme.breakpoints.down('md')]: {
    paddingTop: $hasBanner ? '0px' : '16px',
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
  },
}));

const NavInner = styled('div', { shouldForwardProp: (p) => p !== '$hasBanner' })<{ $hasBanner: boolean }>(({ theme, $hasBanner }) => ({
  padding: $hasBanner ? '0px 40px' : '0px',
  [theme.breakpoints.down('md')]: { padding: '0px 16px' },
}));

/**
 * Fixed top bar: optional announcement banner + the floating navbar.
 * Publishes its height as the CSS variable `--navbar-height` so heroes can pad themselves.
 */
export default function StickyNavBar({ children, hasBanner }: { children: ReactNode; hasBanner?: boolean }) {
  const { isBannerClosed, closeBanner, isHydrated } = useBannerState();
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const showBanner = hasBanner !== undefined ? hasBanner : !!siteConfig.banner && !isBannerClosed && isHydrated;

  useEffect(() => {
    const update = () => {
      if (ref.current) setHeight(ref.current.offsetHeight);
    };
    update();
    const observer = new ResizeObserver(update);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [showBanner]);

  useEffect(() => {
    document.documentElement.style.setProperty('--navbar-height', `${height}px`);
    return () => {
      document.documentElement.style.removeProperty('--navbar-height');
    };
  }, [height]);

  return (
    <NavWrapper ref={ref} $hasBanner={showBanner}>
      {showBanner && <AnnouncementBanner onClose={closeBanner} />}
      {showBanner && <div style={{ height: '16px', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }} />}
      <NavInner $hasBanner={showBanner}>{children}</NavInner>
    </NavWrapper>
  );
}
