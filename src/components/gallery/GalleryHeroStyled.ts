'use client';

import { styled } from '@mui/material/styles';

export const GalleryHeroStyled = styled('div')(({ theme }) => ({
  background: theme.palette.grey[50],
  paddingTop: 'calc(var(--navbar-height, 0px) + 79px)',
  paddingBottom: '150px',
  paddingLeft: '50px',
  paddingRight: '50px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  backgroundImage: 'url("/Sphere2026.png")',
  backgroundPosition: 'bottom right',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '560px auto',
  alignItems: 'center',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    paddingTop: 'calc(var(--navbar-height, 0px) + 64px)',
    backgroundImage: 'url("/Sphere2026-half.png")',
    backgroundSize: '50%',
  },
  '.text-container': { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px' },
  '.text-info': { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px' },
  '.location-container': { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', borderRadius: '8px' },
  '@media (max-width: 600px)': { '.responsive-break': { display: 'none' } },
}));
