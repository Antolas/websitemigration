'use client';

import { styled } from '@mui/material/styles';
import { BASE_PATH } from '@/lib/base-path';

export const SpeakersHeroStyled = styled('div')(({ theme }) => ({
  '.hero-container': {
    background: theme.palette.grey[50],
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    backgroundImage: `url("${BASE_PATH}/Sphere2026.png")`,
    backgroundPosition: 'bottom right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: ' 560px auto',
    [theme.breakpoints.down('md')]: {
      paddingTop: 'calc(var(--navbar-height, 0px) + 79px)',
      paddingBottom: '50px',
      paddingLeft: '0px',
      paddingRight: '0px',
      alignItems: 'center',
      textAlign: 'center',
      backgroundImage: `url("${BASE_PATH}/Sphere2026-half.png")`,
      backgroundSize: '50%',
    },
    paddingTop: 'calc(var(--navbar-height, 0px) + 64px)',
    paddingBottom: '50px',
    paddingLeft: '50px',
    paddingRight: '50px',
  },
  '.text-container': { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px' },
  '.text-info': { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px' },
  '.location-container': {
    display: 'flex',
    height: '110px',
    flexDirection: 'column',
    alignItems: 'flex-end',
    borderRadius: '8px',
    paddingTop: '20px',
    [theme.breakpoints.down('sm')]: { paddingRight: '0px', alignSelf: 'center' },
  },
  '.hero-footer': {
    background: 'linear-gradient(90deg, #A0FFA7 -7.63%, #20A393 29.18%, #002F5A 93.49%)',
    height: '10px',
    width: '100%',
    marginTop: 'auto',
  },
  '@media (max-width: 600px)': { '.responsive-break': { display: 'none' } },
}));

export const SpeakersSpeakersStyled = styled('div')(({ theme }) => ({
  background: theme.palette.grey[50],
  padding: '0px 0px 125px 0px',
  color: theme.palette.grey[900],
  [theme.breakpoints.down('md')]: { padding: '0px 0px 50px 0px' },
  '.speakers-grid-container': {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '100px 0px 0px 0px',
    [theme.breakpoints.down('md')]: { padding: '25px 0px 0px 0px', justifyContent: 'start' },
  },
  '.speakers-grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    width: '100%',
    justifyContent: 'center',
    maxWidth: '1200px',
    [theme.breakpoints.down('md')]: { gridTemplateColumns: 'repeat(1, 1fr)', gap: '8px' },
  },
  '.speaker-wrapper': {
    '&:hover': { backgroundColor: theme.palette.primary['50'], cursor: 'pointer', borderRadius: '8px' },
  },
}));
