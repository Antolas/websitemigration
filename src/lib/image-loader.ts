/**
 * next/image loader for the static export.
 *
 * Files are served as-is, but we still emit a width-based `srcset` (like the original site,
 * which used the Next.js image optimizer). This matters for layout: with `sizes="100vw"`
 * the browser derives the intrinsic size of the image from the srcset, so auto-sized images
 * render exactly as they did before.
 */
export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  return `${src}?w=${width}`;
}
