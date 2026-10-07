import type { MetadataRoute } from 'next';
import { contentHub, talks } from '@/lib/content';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

const PAGES = ['/', '/about', '/gallery', '/speakers', '/become-a-sponsor', '/content-hub', '/register-now', '/join-us', '/2024', '/2025'];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [...PAGES, ...talks.map((t) => `/talks/${t.readablePathId}`), ...contentHub.map((c) => `/content-hub/${c.readablePathId}`)];
  return paths.map((p) => ({ url: p === '/' ? `${SITE_URL}/` : `${SITE_URL}${p}`, lastModified, changeFrequency: 'always' }));
}
