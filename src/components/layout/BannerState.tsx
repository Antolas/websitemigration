'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { siteConfig } from '@/lib/site';

interface BannerState {
  isBannerClosed: boolean;
  closeBanner: () => void;
  isHydrated: boolean;
}

const BannerStateContext = createContext<BannerState | undefined>(undefined);

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const parts = `; ${document.cookie}`.split(`; ${name}=`);
  return (parts.length === 2 && parts.pop()?.split(';').shift()) || null;
}

function setCookie(name: string, value: string, days = 7) {
  if (typeof document === 'undefined') return;
  const date = new Date();
  date.setTime(date.getTime() + 864e5 * days);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

/** Remembers (for one day, via cookie) whether the visitor closed the announcement banner. */
export function BannerStateProvider({ children }: { children: ReactNode }) {
  const noBanner = !siteConfig.banner;
  const [isHydrated, setIsHydrated] = useState(false);
  const [isBannerClosed, setIsBannerClosed] = useState(() => !noBanner && getCookie('bannerClosed') === 'true');

  useEffect(() => {
    if (!noBanner && getCookie('bannerClosed') === 'true') setIsBannerClosed(true);
    setIsHydrated(true);
  }, [noBanner]);

  const closeBanner = () => {
    setIsBannerClosed(true);
    if (!noBanner) setCookie('bannerClosed', 'true', 1);
  };

  return <BannerStateContext.Provider value={{ isBannerClosed, closeBanner, isHydrated }}>{children}</BannerStateContext.Provider>;
}

export function useBannerState() {
  const ctx = useContext(BannerStateContext);
  if (!ctx) throw Error('useBannerState must be used within BannerStateProvider');
  return ctx;
}
