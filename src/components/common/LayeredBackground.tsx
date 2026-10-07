import type { CSSProperties, ReactNode } from 'react';

interface LayeredBackgroundProps {
  /** Decorative layer rendered absolutely behind the content (animation, sphere, hexagons…). */
  backgroundContent?: ReactNode;
  /** Style of the outer box. Defaults to full width/height. */
  containerStyle?: CSSProperties;
  /** Extra style for the content layer. */
  childrenStyle?: CSSProperties;
  children: ReactNode;
}

/** Content on top of an absolutely positioned decorative layer. */
export default function LayeredBackground({
  backgroundContent,
  containerStyle = { width: '100%', height: '100%' },
  childrenStyle,
  children,
}: LayeredBackgroundProps) {
  return (
    <div style={{ ...containerStyle, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
        {backgroundContent}
      </div>
      <div style={{ ...childrenStyle, position: 'relative', zIndex: 1, height: 'inherit' }}>{children}</div>
    </div>
  );
}
