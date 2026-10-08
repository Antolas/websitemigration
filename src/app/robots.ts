import type { MetadataRoute } from 'next';
import { BASE_PATH } from '@/lib/base-path';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  // Preview deployments on a sub-path (GitHub Pages) must not compete with platmosphere.com in search results.
  if (BASE_PATH) return { rules: { userAgent: '*', disallow: '/' } };
  return {
    rules: { userAgent: '*', allow: ['/', '/*.js', '/*.css'] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
