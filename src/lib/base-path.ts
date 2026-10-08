/**
 * Optional URL prefix used when the site is served from a sub-path
 * (e.g. GitHub Pages: https://<user>.github.io/<repo>/). Empty in production on platmosphere.com.
 * next/link and router.push add it automatically; everything else (images, CSS url(), <a href>,
 * window.open) goes through withBase().
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function withBase<T extends string | undefined | null>(path: T): T {
  if (!path || !BASE_PATH) return path;
  return (path.startsWith('/') && !path.startsWith('//') && !path.startsWith(BASE_PATH + '/') ? BASE_PATH + path : path) as T;
}
