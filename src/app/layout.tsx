import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import Analytics from '@/components/layout/Analytics';
import { BannerStateProvider } from '@/components/layout/BannerState';
import MobileRegisterBar from '@/components/layout/MobileRegisterBar';
import { SITE_URL } from '@/lib/site';
import ThemeRegistry from '@/theme/ThemeRegistry';
import '@/theme/fonts';
import { BASE_PATH, withBase } from '@/lib/base-path';

const title = 'Platmosphere | A Mia-Platform Invitation';
const description = 'Platmosphere is the in-person event for platform enthusiasts. Join us for chapter 2026 - Master the Vibe!';
const ogImage = { url: `${SITE_URL}/assets/images/og-image.png`, width: 1200, height: 630 };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  // Sub-path previews (GitHub Pages) are not indexed.
  robots: BASE_PATH ? { index: false, follow: false } : { index: true, follow: true, googleBot: { index: true, follow: true } },
  other: { google: 'index,follow' },
  openGraph: { title, description, images: [ogImage] },
  twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
  icons: { icon: withBase('/favicon.ico'), apple: [{ url: withBase('/apple-touch-icon.png'), sizes: '180x180' }] },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ThemeRegistry>
          <BannerStateProvider>
            <Analytics>{children}</Analytics>
            <MobileRegisterBar />
          </BannerStateProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
