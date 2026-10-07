'use client';

import { styled } from '@mui/material/styles';

/** Gradient hero with a sphere, used by /become-a-sponsor and /join-us. */
export const DarkHeroHeaderStyled = styled('div')(({ theme }) => ({
  background: 'linear-gradient(90deg, #A0FFA7 -7.63%, #20A393 29.18%, #002F5A 93.49%)',
  '.content-wrapper': {
    width: '100%',
    paddingTop: 'calc(var(--navbar-height, 0px) + 75px)',
    [theme.breakpoints.down('sm')]: { paddingTop: 'calc(var(--navbar-height, 0px) + 64px)' },
  },
  '.title-header': { color: '#FFFFFF' },
  '.supertitle-header': {
    color: theme.palette.primary['100'],
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '0px 0px 80px 0px',
    textAlign: 'center',
    justifyContent: 'end',
  },
  '.image-sphere': { width: '25%', height: 'auto', [theme.breakpoints.down('md')]: { width: '50%' } },
}));

export const SponsorsStyled = styled('div')(({ theme }) => ({
  '.sponsors-full-width-section': {
    width: '100%',
    background: theme.palette.grey[50],
    display: 'flex',
    justifyContent: 'center',
    padding: '100px 0px',
    [theme.breakpoints.down('md')]: { padding: '0px' },
  },
  '.sponsors-inner-container': {
    width: '1176px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: { width: '100%' },
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      padding: '64px 16px',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '64px',
      width: 'auto',
    },
  },
  '.sponsors-content-container': {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('md')]: { flexDirection: 'column', justifyContent: 'flex-start', gap: '60px' },
  },
  '.sponsors-text-section': {
    display: 'flex',
    gap: '16px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '576px',
    [theme.breakpoints.down('md')]: { width: '100%' },
  },
  '.sponsors-form': {
    display: 'flex',
    width: '488px',
    height: 'fit-content',
    padding: '32px 28px',
    alignItems: 'flex-start',
    background: theme.palette.grey[25],
    [theme.breakpoints.down('md')]: { width: 'auto', justifyContent: 'center' },
  },
  '#hs-form': { width: '100%', [theme.breakpoints.down('md')]: { width: '100%', justifyContent: 'center' } },
}));

export const SponsorsTextSectionStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '60px',
  '.text-info-sponsors': { display: 'flex', flexDirection: 'column', gap: '8px' },
  '.sponsors-logos-container': {
    maxWidth: '376px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    paddingBottom: '32px',
    gap: '32px',
    color: theme.palette.grey['600'],
    [theme.breakpoints.down('md')]: { width: 'auto', alignItems: 'center' },
  },
  '.sponsors-logos': {
    display: 'flex',
    maxWidth: '376px',
    gap: '24px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: { gap: '8px' },
  },
  '.logo': { background: '#FFFFFF', width: '176px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  '.parteners-logos-container': {
    [theme.breakpoints.down('md')]: { justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  },
}));
