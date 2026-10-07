'use client';

import { styled } from '@mui/material/styles';

export const HomeHeroStyled = styled('div')(({ theme }) => ({
  padding: '97px 100px 80px 100px ',
  color: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: { padding: '70px 32px 32px' },
  '.hero-title': { color: theme.palette.primary[100], width: '100%', display: 'flex', justifyContent: 'center' },
  '.hero-image': { width: '100%', display: 'flex', justifyContent: 'center' },
  '.text-container': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
    [theme.breakpoints.down('md')]: { gap: '16px' },
  },
  '.text-info': { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px' },
  '.text-date': {
    display: 'flex',
    gap: '4px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: { flexDirection: 'column', alignItems: 'center' },
  },
}));

export const HomeNumberReportStyled = styled('div')(({ theme }) => ({
  paddingBottom: '100px',
  color: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  gap: '100px',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: { padding: '0px 25px 25px 25px' },
}));

export const HomeNumberComponentStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '100px',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: { gap: '25px' },
}));

export const HomeKeywordsStyled = styled('div')(() => ({
  color: '#FFFFFF',
  display: 'flex',
  justifyContent: 'center',
  background: 'rgba(243, 244, 251, 0.15)',
}));

export const KeywordStyled = styled('div')(() => ({
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: '40px',
  marginLeft: '40px',
}));

export const HomeEmotionalVideoStyled = styled('div')(({ theme }) => ({
  background: theme.palette.grey[900],
  padding: '180px 0px 160px 0px',
  display: 'flex',
  flexDirection: 'column',
  gap: '80px',
  color: '#FFFFFF',
  [theme.breakpoints.down('md')]: { marginTop: '0px', padding: '64px 0px', gap: '32px' },
  '.title-emotional-video': { textAlign: 'center' },
  '.watch-recap-button-container': { textAlign: 'center' },
}));

export const HomeGalleryStyled = styled('div')(({ theme }) => ({
  background: theme.palette.grey[900],
  padding: '80px 40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  color: '#FFFFFF',
  [theme.breakpoints.down('md')]: { padding: '64px 0px', gap: '32px' },
  '.title-gallery': {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '44px',
    [theme.breakpoints.down('md')]: { padding: '0px 16px', gap: '32px' },
  },
  '.gallery-button': { textAlign: 'center' },
}));

export const HomeSpeakersStyled = styled('div')(({ theme }) => ({
  background: theme.palette.grey[900],
  padding: '80px 40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  color: '#FFFFFF',
  [theme.breakpoints.down('md')]: { padding: '64px 0px', gap: '32px' },
  '.title-speakers': {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '44px',
    [theme.breakpoints.down('md')]: { padding: '0px 16px', gap: '32px' },
  },
  '.speakers-button': { textAlign: 'center' },
  '.speakers-grid-container': {
    display: 'flex',
    justifyContent: 'center',
    padding: '80px 0px 0px 0px',
    [theme.breakpoints.down('md')]: { padding: '25px 0px 0px 0px', justifyContent: 'start' },
  },
  '.speakers-grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    maxWidth: '1176px',
    width: '100%',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: { gridTemplateColumns: 'repeat(1, 1fr)', gap: '8px' },
  },
  '.speaker-wrapper': {
    '&:hover': { backgroundColor: 'rgba(234, 254, 243, 0.24)', cursor: 'pointer', borderRadius: '8px' },
  },
}));

export const HomeMediaPartnersStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.grey[50],
  color: theme.palette.grey[900],
  alignItems: 'center',
  padding: '80px 0px 80px 0px',
  [theme.breakpoints.down('md')]: { padding: '64px 16px 64px 16px' },
  gap: '48px',
  '.title-media-partners': { display: 'flex', maxWidth: '1170px', flexDirection: 'column', gap: '40px', textAlign: 'center' },
  '.media-partners-logos-container': { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  '.media-partners-logos': {
    display: 'flex',
    maxWidth: '776px',
    gap: '24px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: { gap: '8px' },
  },
}));

export const DarkBannerStyled = styled('div')(({ theme }) => ({
  background: 'linear-gradient(90deg, #A0FFA7 -7.63%, #20A393 29.18%, #002F5A 93.49%)',
  color: '#FFFFFF',
  '.dark-banner-content': {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '60px 152px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: { padding: '64px 16px', gap: '4px' },
  },
  '.dark-banner-text': { display: 'flex', flexDirection: 'column', gap: '16px' },
  '.dark-banner-subtitle': { color: theme.palette.primary['100'] },
  '.dark-banner-sphere': { width: '400px', height: 'auto', [theme.breakpoints.down('md')]: { width: '300px' } },
}));
