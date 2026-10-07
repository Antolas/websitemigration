'use client';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import SocialButton from '@/components/buttons/SocialButton';
import BackLink from '@/components/talks/BackLink';
import type { Option, Track } from '@/lib/content';
import { theme } from '@/theme/theme';

const ContentHubDetailHeroStyled = styled('div')(({ theme }) => ({
  paddingTop: 'calc(var(--navbar-height, 0px) + 69px)',
  paddingBottom: '32px',
  paddingLeft: '40px',
  paddingRight: '40px',
  background: theme.palette.grey[50],
  [theme.breakpoints.down('md')]: {
    paddingTop: 'calc(var(--navbar-height, 0px) + 56px)',
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

interface Props {
  track?: Track;
  edition?: Option;
  title?: string;
  subtitle?: string;
}

/** Header of a Content Hub item: track, edition, share buttons and title. */
export default function ContentHubDetailHero({ track, edition, title = '', subtitle = '' }: Props) {
  const grey = theme.palette.grey;
  return (
    <ContentHubDetailHeroStyled>
      <div className="go-back-button">
        <BackLink href="/content-hub" label="BACK" />
      </div>
      <div className="hero-container">
        <div className="hero-grid-container">
          <div className="info-event-container" style={{ gridArea: 'info-event' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ color: grey[800] }}>
                <Typography variant="bodyXSSemibold">Track</Typography>
              </div>
              <div className="track-chip" style={{ color: track?.textColor, background: track?.backgroundColor }}>
                <Typography variant="bodyXSSemibold">{track?.title || ''}</Typography>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ color: grey[800] }}>
                <Typography variant="bodyXSSemibold">Edition</Typography>
              </div>
              <div className="track-chip" style={{ color: grey[800], background: grey[100] }}>
                <Typography variant="bodyXSSemibold">{edition?.label || ''}</Typography>
              </div>
            </div>
            <div style={{ flexDirection: 'column', display: 'flex', gap: '4px' }}>
              <div style={{ color: grey[800] }}>
                <Typography variant="bodyXSSemibold">Share</Typography>
              </div>
              <div style={{ gap: '8px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <SocialButton lightMode socialMediaName="linkedin" handleLinkedInShare />
                <SocialButton lightMode socialMediaName="share" copyUrlOfPage />
              </div>
            </div>
          </div>
          <div style={{ gridArea: 'title-container' }} className="title-container">
            <div style={{ color: grey[600] }}>
              <Typography variant="h1">INSIDE THE TALK</Typography>
            </div>
            <div style={{ color: grey[800] }}>
              <Typography variant="h4">{title}</Typography>
            </div>
            {subtitle && (
              <div style={{ color: grey[600] }}>
                <Typography variant="bodyL">{subtitle}</Typography>
              </div>
            )}
          </div>
        </div>
      </div>
    </ContentHubDetailHeroStyled>
  );
}
