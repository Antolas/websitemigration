'use client';

import Typography, { type TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import type { CSSProperties, ReactNode } from 'react';

interface StyledProps {
  variant?: TypographyProps['variant'];
  highlightColor?: string;
  /** Extra styles for the wrapper; nested selectors (e.g. '& .MuiTypography-root') are allowed. */
  containerStyle?: CSSProperties | Record<string, unknown>;
}

export const TextHighlightedStyled = styled('div', {
  shouldForwardProp: (prop) => !['variant', 'highlightColor', 'containerStyle'].includes(prop as string),
})<StyledProps>(({ theme, variant, containerStyle, highlightColor = 'default' }) => ({
  display: 'inline-block',
  position: 'relative',
  width: 'fit-content',
  ...(containerStyle as object),
  '.text-highlighted-text': {
    display: 'inline-block',
    position: 'relative',
    zIndex: 1,
  },
  '.text-highlighted-line': {
    position: 'absolute',
    left: 0,
    right: 0,
    top: variant === 'bodyStickyNavBarSelected' ? '53%' : '65%',
    height: variant === 'bodyStickyNavBarSelected' ? '30%' : '25%',
    backgroundColor: highlightColor === 'default' ? theme.palette.primary[200] : highlightColor,
    zIndex: 0,
  },
}));

interface TextHighlightedProps extends StyledProps {
  children: ReactNode;
  disableHighlight?: boolean;
}

/** Text with the signature "marker" underline of the Platmosphere brand. */
export default function TextHighlighted({
  children,
  disableHighlight = false,
  variant,
  highlightColor,
  containerStyle,
}: TextHighlightedProps) {
  return (
    <TextHighlightedStyled variant={variant} highlightColor={highlightColor} containerStyle={containerStyle}>
      <div className="text-highlighted-text">
        <Typography variant={variant}>{children}</Typography>
      </div>
      {!disableHighlight && <div className="text-highlighted-line" />}
    </TextHighlightedStyled>
  );
}
