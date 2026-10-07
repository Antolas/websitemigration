'use client';

import Typography, { type TypographyProps } from '@mui/material/Typography';
import { TextHighlightedStyled } from './TextHighlighted';

/** Bold words with a coloured marker line, used inside running text. */
export default function HighlightedInline({
  children,
  variant = 'bodyM',
  highlightColor = '#00747C',
}: {
  children: string;
  variant?: TypographyProps['variant'];
  highlightColor?: string;
}) {
  return (
    <TextHighlightedStyled
      variant={variant}
      highlightColor={highlightColor}
      containerStyle={{ '& .MuiTypography-root': { fontWeight: 'bold' } }}
    >
      <div className="text-highlighted-text">
        <Typography variant={variant}>{children}</Typography>
      </div>
      <div className="text-highlighted-line" />
    </TextHighlightedStyled>
  );
}
