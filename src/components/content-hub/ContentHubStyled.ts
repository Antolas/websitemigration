'use client';

import { styled } from '@mui/material/styles';
import { BASE_PATH } from '@/lib/base-path';

export const ContentHubHeroStyled = styled('div')(({ theme }) => ({
  background: theme.palette.grey[50],
  paddingTop: 'calc(var(--navbar-height, 0px) + 79px)',
  paddingBottom: '94px',
  paddingLeft: '50px',
  paddingRight: '50px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  backgroundImage: `url("${BASE_PATH}/Sphere2026.png")`,
  backgroundPosition: 'bottom right',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '560px auto',
  alignItems: 'center',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    paddingTop: 'calc(var(--navbar-height, 0px) + 64px)',
    backgroundImage: `url("${BASE_PATH}/Sphere2026-half.png")`,
    backgroundSize: '50%',
  },
  '.text-container': { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px' },
  '.text-info': { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px' },
  '.location-container': { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', borderRadius: '8px' },
  '@media (max-width: 600px)': { '.responsive-break': { display: 'none' } },
}));

export const CallForPaperUnbrandedStyled = styled('div')(({ theme }) => ({
  background: theme.palette.grey[50],
  color: theme.palette.grey[900],
  '.title-call-for-papers': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    padding: '100px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: { padding: '64px 16px' },
  },
  '.subtitle-call-for-papers': { color: theme.palette.grey[600] },
  '.call-for-paper-button-container': { display: 'flex', justifyContent: 'center', paddingTop: '24px' },
  '.image-sphere': { width: '20%', height: 'auto', [theme.breakpoints.down('md')]: { width: '30%' } },
}));
