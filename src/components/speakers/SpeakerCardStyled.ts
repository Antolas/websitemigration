'use client';

import { styled } from '@mui/material/styles';

export interface SpeakerCardStyledProps {
  layout?: 'vertical' | 'horizontal';
  darkMode?: boolean;
}

export const SpeakerCardStyled = styled('div', {
  shouldForwardProp: (p) => p !== 'layout' && p !== 'darkMode',
})<SpeakerCardStyledProps>(({ theme, layout = 'vertical', darkMode = false }) => ({
  display: 'flex',
  flexDirection: layout === 'horizontal' ? 'row' : 'column',
  gap: layout === 'horizontal' ? '12px' : '16px',
  padding: '12px',
  [theme.breakpoints.down('md')]: { flexDirection: 'row' },
  '.speaker-image': {
    width: '276px',
    height: '276px',
    [theme.breakpoints.down('sm')]: { maxWidth: '100px', maxHeight: '100px' },
    [theme.breakpoints.between('sm', 'md')]: { width: '200px', height: '200px' },
  },
  '.speaker-subtitle': { color: darkMode ? theme.palette.grey[200] : theme.palette.grey[800] },
  '.speaker-text': {
    display: 'flex',
    flexDirection: 'column',
    gap: layout === 'horizontal' ? '12px' : '0px',
    [theme.breakpoints.down('md')]: { gap: '16px' },
  },
  '.speakerName': { [theme.breakpoints.down('sm')]: { fontSize: '16px' } },
}));
