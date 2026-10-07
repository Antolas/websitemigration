import type { CSSProperties, ReactNode } from 'react';

interface LayeredBackgroundProps {
  /** CSS background of the outer container (e.g. a gradient). */
  background?: string;
  /** Decorative layer rendered absolutely behind the content. */
  backgroundContent?: ReactNode;
  children: ReactNode;
  style?: CSSProperties;
}

/** Content on top of an absolutely positioned decorative layer (animations, spheres, hexagons). */
export default function LayeredBackground({ background, backgroundContent, children, style }: LayeredBackgroundProps) {
  return (
    <div style={{ width: '100%', height: '100%', ...(background ? { background } : {}), position: 'relative', overflow: 'hidden', ...style }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
        {backgroundContent}
      </div>
      <div style={{ position: 'relative', zIndex: 1, height: 'inherit' }}>{children}</div>
    </div>
  );
}
