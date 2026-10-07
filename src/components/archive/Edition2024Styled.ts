'use client';

/* Styles of the /2024 archive page (palette comes from EditionThemeProvider). */
import { styled } from '@mui/material/styles';

export const ContactBanner2024Styled = styled('div')(({ theme }) => ({
  background: theme.palette.primary['900'],
  color: '#FFFFFF',
  '.title-contact-banner': {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '60px 152px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      padding: '64px 16px',
      gap: '4px',
    },
  },
  '.contact-banner-content-text': {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  '.subtitle-contact-banner': {
    color: theme.palette.primary['100'],
  },
  '.image-sphere': {
    width: '400px',
    height: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '300px',
    },
  },
}));

export const EmotionalVideo2024Styled = styled('div')(({ theme }) => ({
  background: theme.palette.grey[900],
  padding: '180px 0px 160px 0px',
  display: 'flex',
  flexDirection: 'column',
  gap: '80px',
  color: '#FFFFFF',
  [theme.breakpoints.down('md')]: {
    marginTop: '-110px',
    padding: '64px 0px',
    gap: '32px',
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '0px',
    padding: '64px 0px',
    gap: '32px',
  },
  '.title-emotional-video': {
    textAlign: 'center',
  },
  '.watch-recap-button-container': {
    textAlign: 'center',
  },
}));

export const Gallery2024Styled = styled('div')(({ theme }) => ({
  backgroundImage: `url(/images/editions/galleryBackground2024.png)`,
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundColor: theme.palette.grey[50],
  paddingBottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '64px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    backgroundImage: `url(/images/editions/galleryBackground2024Mobile.png)`,
  },
  '.gallery-description': {
    padding: '100px 10px 0px 10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '40vw',
    gap: '30px',
    [theme.breakpoints.down('sm')]: {
      padding: '100px 10px 50px 10px',
      width: '90%',
    },
  },
  '.image-up': {
    width: '300px',
    height: '500px',
    marginRight: '10px',
    marginBottom: '30px',
    borderRadius: '20px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '10px',
      width: '120px',
      height: '200px',
    },
  },
  '.image-down': {
    width: '300px',
    height: '500px',
    marginRight: '10px',
    marginTop: '30px',
    borderRadius: '20px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '10px',
      width: '120px',
      height: '200px',
    },
  },
}));

export const Hero2024Styled = styled('div')(({ theme }) => ({
  padding: '97px  100px 80px 100px ',
  color: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    padding: '70px  32px 32px',
  },
  '.hero-title': {
    color: theme.palette.primary[100],
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  '.hero-image': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  '.text-container': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
    [theme.breakpoints.down('md')]: {
      gap: '16px',
    },
  },
  '.text-info': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '50px',
  },
  '.text-date': {
    display: 'flex',
    gap: '4px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
}));

export const Impact2024Styled = styled('div')(({ theme }) => ({
  background: theme.palette.grey[50],
  padding: '0px 0px 80px 0px',
  color: theme.palette.grey[900],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '.title-impact': {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '80px 0px',
    textAlign: 'center',
  },
  '.impact-grid-container': {
    display: 'flex',
    justifyContent: 'center',
    padding: '100px 0px 0px 0px',
  },
  '.impact-grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    width: 'max-content',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '8px',
    },
  },
  '.impact-button': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const ImpactNumbers2024Styled = styled('div')(({ theme }) => ({
  background: theme.palette.grey[50],
  display: 'flex',
  justifyContent: 'center',
  gap: '0px',
  paddingBottom: '48px',
  [theme.breakpoints.down('sm')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '50px',
    justifyItems: 'center',
    '& > :first-child': {
      gridColumn: 'span 2',
      width: '100%',
      gap: '10px',
    },
  },
}));

export const MediaPartners2024Styled = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.grey[50],
  color: theme.palette.grey[900],
  alignItems: 'center',
  paddingBottom: '80px',
  paddingTop: '80px',
  [theme.breakpoints.down('md')]: {
    paddingBottom: '100px',
    paddingTop: '100px',
    padding: '100px 25px',
  },
  gap: '48px',
  '.title-media-partners': {
    display: 'flex',
    maxWidth: '1170px',
    flexDirection: 'column',
    gap: '40px',
    textAlign: 'center',
  },
  '.media-partners-logos-container': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '.media-partners-logos': {
    display: 'flex',
    maxWidth: '776px',
    gap: '24px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      gap: '8px',
    },
  },
}));

export const NumberReport2024Styled = styled('div')(({ theme }) => ({
  paddingBottom: '100px',
  color: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  gap: '100px',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    padding: '0px 25px 25px 25px',
  },
}));

export const NumberComponent2024Styled = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '100px',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    gap: '25px',
  },
}));

export const NumberReport2024ItemStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'flex-start',
  gap: '10px',
  width: '250px',
  [theme.breakpoints.down('md')]: {
    width: '150px',
  },
  '.first-child': {
    color: theme.palette.primary[900],
  },
  '.second-child': {
    color: theme.palette.primary[800],
  },
}));

export const Speakers2024Styled = styled('div')(({ theme }) => ({
  background: theme.palette.grey[900],
  padding: '180px 40px 160px 40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '100px',
  color: '#FFFFFF',
  [theme.breakpoints.down('md')]: {
    padding: '64px 0px',
    gap: '32px',
  },
  '.title-speakers': {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    [theme.breakpoints.down('md')]: {
      padding: '0px 16px',
      gap: '32px',
    },
  },
  '.speakers-grid-container': {
    display: 'flex',
    justifyContent: 'center',
    padding: '80px 0px 0px 0px',
    [theme.breakpoints.down('md')]: {
      padding: '25px 0px 0px 0px',
      justifyContent: 'start',
    },
  },
  '.speakers-grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    maxWidth: '1176px',
    width: '100%',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '8px',
    },
  },
  '.speaker-wrapper': {
    '&:hover': {
      backgroundColor: 'rgba(234, 254, 243, 0.24)',
      cursor: 'pointer',
      borderRadius: '8px',
    },
  },
}));

export const Sponsors2024Styled = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.grey[50],
  color: theme.palette.grey[900],
  alignItems: 'center',
  paddingBottom: '80px',
  paddingTop: '80px',
  [theme.breakpoints.down('md')]: {
    paddingBottom: '100px',
    paddingTop: '100px',
    padding: '100px 25px',
  },
  gap: '48px',
  '.title-sponsors': {
    display: 'flex',
    maxWidth: '1170px',
    flexDirection: 'column',
    gap: '40px',
    textAlign: 'center',
  },
  '.sponsors-logos-container': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '.sponsors-logos': {
    display: 'flex',
    maxWidth: '776px',
    gap: '24px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      gap: '8px',
    },
  },
}));

export const Sustainability2024Styled = styled('div')(({ theme }) => ({
  background: theme.palette.grey[50],
  padding: '0px 100px 125px 100px',
  color: theme.palette.grey[900],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    padding: '0px',
  },
  '.title-sustainability': {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '100px 50px 50px 50px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px',
      padding: '100px 0px 50px 0px',
    },
  },
  '.sustainability-grid-container': {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      padding: '0px',
      display: 'flex',
      flexDirection: 'column-reverse',
      paddingBottom: '10px',
      alignItems: 'center',
    },
  },
  '.sustainability-grid': {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    width: '40%',
    maxWidth: '540px',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      padding: '10px',
      paddingBottom: '50px',
      alignItems: 'center',
    },
  },
  '.sustainability-title': {
    display: 'flex',
    flexDirection: 'column',
    wordBreak: 'keep-all',
  },
  '@media (max-width: 600px)': {
    '.responsive-break': {
      display: 'none',
    },
  },
}));

export const Tracks2024Styled = styled('div')(({ theme }) => ({
  background: theme.palette.grey[50],
  padding: '180px 0px 160px 0px',
  color: theme.palette.grey[800],
  display: 'flex',
  flexDirection: 'column',
  gap: '80px',
  [theme.breakpoints.down('md')]: {
    gap: '32px',
    padding: '64px 16px',
  },
  '.title-tracks': {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    textAlign: 'center',
  },
  '.tracks-grid-container': {
    display: 'flex',
    justifyContent: 'center',
  },
  '.tracks-grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    width: 'max-content',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '8px',
      width: '100%',
    },
  },
  '.tracks-title': {
    display: 'flex',
    flexDirection: 'column',
    wordBreak: 'keep-all',
  },
}));
