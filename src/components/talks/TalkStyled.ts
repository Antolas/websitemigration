'use client';

import { styled } from '@mui/material/styles';
import { BASE_PATH } from '@/lib/base-path';

export const InsideTheTalkBannerStyled = styled('div')(({ theme }) => ({
  paddingTop: 'calc(var(--navbar-height, 0px) + 69px)',
  paddingBottom: '32px',
  paddingLeft: '40px',
  paddingRight: '40px',
  background: theme.palette.grey[50],
  [theme.breakpoints.down('md')]: {
    paddingTop: 'calc(var(--navbar-height, 0px) + 52px)',
    paddingBottom: '48px',
    paddingLeft: '0px',
    paddingRight: '0px',
  },
  '.go-back-button': { display: 'flex', justifyContent: 'start', [theme.breakpoints.down('md')]: { padding: '0px 16px' } },
  '.hero-grid-container': {
    display: 'grid',
    maxWidth: '1176px',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateAreas:
      '"info-event info-event info-event title-container title-container title-container title-container title-container title-container . . ."',
    [theme.breakpoints.down('md')]: { display: 'flex', flexDirection: 'column-reverse', gap: '0px' },
  },
  '.info-event': { display: 'flex', gap: '24px', width: '100%', maxWidth: '1176px' },
  '.title-container': {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '576px',
    [theme.breakpoints.down('md')]: { gap: '4px', padding: '48px 16px', width: 'auto' },
  },
  '.hero-container': {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('md')]: { justifyContent: 'start', padding: '0px 16px', width: 'auto' },
  },
  '.info-event-container': {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '188px',
    alignSelf: 'center',
    [theme.breakpoints.down('md')]: { alignSelf: 'start', padding: '0px 16px' },
  },
  '.track-chip': { padding: '0px 8px', borderRadius: '30px', width: 'fit-content', textTransform: 'uppercase' },
}));

/** Dark hexagon background shared by talk and content-hub detail pages. */
export const MainContentContainerStyled = styled('div')(({ theme }) => ({
  background: `url('${BASE_PATH}/PatternHexagons.png') center center / 100% no-repeat,\n      linear-gradient(123deg, #003140 19.13%, #001015 105.03%)`,
  color: '#FFF',
  padding: '80px 40px 0px 40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: { padding: '24px 0px 80px 0px' },
  [theme.breakpoints.down('sm')]: { gridTemplateColumns: '1fr', gap: '16px' },
  '.topics': { padding: '32px 0px', display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' },
  '.track-chip': { padding: '0px 8px', borderRadius: '30px', width: 'fit-content', textTransform: 'uppercase' },
  '.main-content-text-grid': {
    display: 'grid',
    width: '100%',
    maxWidth: '1176px',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateAreas: '". . . abstract abstract abstract abstract abstract abstract . . ."',
    [theme.breakpoints.down('md')]: { display: 'flex', justifyContent: 'center' },
  },
  '.main-content-text': { display: 'flex', gap: '40px', flexDirection: 'column', [theme.breakpoints.down('md')]: { width: '95%' } },
  '.talk-chip-container': { display: 'flex', gap: '80px', [theme.breakpoints.down('md')]: { paddingBottom: '64px', gap: '16px' } },
  '.speaker-wrapper': {
    '&:hover': { backgroundColor: 'rgba(234, 254, 243, 0.20)', cursor: 'pointer', borderRadius: '8px' },
  },
  '.speakers-talks-container': {
    maxWidth: '588px',
    paddingBottom: '80px',
    [theme.breakpoints.down('md')]: { padding: '0px 16px', alignSelf: 'start' },
  },
  '.speakers-talks': {
    display: 'grid',
    gap: '12px',
    gridTemplateColumns: 'repeat(2, 1fr)',
    [theme.breakpoints.down('md')]: { gridTemplateColumns: 'repeat(1, 1fr)' },
  },
}));
