import type { CSSProperties } from 'react';

interface IconProps {
  /** File name inside /public/icons (e.g. "arrow-right.svg"). */
  name: string;
  width?: number | string;
  height?: number | string;
  style?: CSSProperties;
}

/** SVG icon rendered as a CSS mask so it inherits `currentColor`. */
export default function Icon({ name, style, width, height }: IconProps) {
  const url = `/icons/${name.replace(/^\/+/, '')}`;
  return (
    <div
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        width: width || 16,
        height: height || 16,
        backgroundColor: 'currentColor',
        mask: `url(${url}) no-repeat center`,
        maskSize: 'contain',
        WebkitMask: `url(${url}) no-repeat center`,
        WebkitMaskSize: 'contain',
      }}
    />
  );
}
