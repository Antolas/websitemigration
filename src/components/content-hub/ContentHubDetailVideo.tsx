'use client';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Icon from '@/components/common/Icon';
import { withBase } from '@/lib/base-path';

const ContentHubDetailVideoStyled = styled('div')(({ theme }) => ({
  background: theme.palette.grey[900],
  display: 'flex',
  flexDirection: 'column',
  gap: '80px',
  color: '#FFFFFF',
  '.title-emotional-video': { textAlign: 'center' },
  '.watch-recap-button-container': { textAlign: 'center' },
  '.vide-container': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: { maxWidth: '380px', height: '213px' },
  },
  '.iframe-container': {
    position: 'relative',
    maxWidth: '600px',
    height: '338px',
    margin: '0 auto',
    aspectRatio: '16/9',
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: { maxWidth: '380px', height: '213px' },
  },
}));

/** YouTube player of a Content Hub item. */
export function ContentHubDetailVideo({ videoId }: { videoId: string }) {
  return (
    <ContentHubDetailVideoStyled>
      <div className="video-container">
        <div className="iframe-container">
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', aspectRatio: '16/9' }}
            allow="fullscreen"
            allowFullScreen
            frameBorder="0"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="content video"
            loading="lazy"
          />
        </div>
      </div>
    </ContentHubDetailVideoStyled>
  );
}

export function DownloadSlidesButton({ slideURL = '' }: { slideURL?: string }) {
  return (
    <Button
      variant="contained"
      endIcon={<Icon name="arrow-up-right.svg" height={20} width={20} />}
      onClick={() => window.open(withBase(slideURL), '_blank')}
      color="secondary"
      component="a"
      target="_blank"
    >
      Download slides
    </Button>
  );
}
