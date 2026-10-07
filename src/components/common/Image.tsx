import NextImage, { type ImageProps } from 'next/image';

/** next/image with the site defaults: SVGs are served untouched (no srcset), as on the original site. */
export default function Image(props: ImageProps) {
  const isSvg = typeof props.src === 'string' && props.src.split('?', 1)[0].endsWith('.svg');
  return <NextImage {...props} unoptimized={props.unoptimized ?? isSvg} />;
}
