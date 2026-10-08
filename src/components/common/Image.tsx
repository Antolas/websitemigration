import NextImage, { type ImageProps } from 'next/image';
import { withBase } from '@/lib/base-path';

/** next/image with the site defaults: SVGs are served untouched (no srcset), as on the original site. */
export default function Image(props: ImageProps) {
  const isSvg = typeof props.src === 'string' && props.src.split('?', 1)[0].endsWith('.svg');
  const src = typeof props.src === 'string' ? withBase(props.src) : props.src;
  return <NextImage {...props} src={src} unoptimized={props.unoptimized ?? isSvg} />;
}
