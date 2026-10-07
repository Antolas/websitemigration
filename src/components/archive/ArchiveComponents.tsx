'use client';

/** Small building blocks shared by the /2024 and /2025 archive pages. */
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, type Theme } from '@mui/material/styles';
import type { ReactNode } from 'react';
import LinkButton from '@/components/buttons/LinkButton';
import WhiteButton from '@/components/buttons/WhiteButton';
import Icon from '@/components/common/Icon';
import LayeredBackground from '@/components/common/LayeredBackground';
import SpeakerCard from '@/components/speakers/SpeakerCard';
import type { Speaker } from '@/lib/content';
import type { Edition } from '@/theme/palettes';

const TrackCardStyled = styled('div')(() => ({
  '.tracks-content': { display: 'flex', flexDirection: 'column', gap: '16px', color: '#FFFFFF', padding: '50px' },
}));

/** Coloured track card with an illustration in the background. */
export function TrackCard({ children, image, backgroundColor }: { children: ReactNode; image: ReactNode; backgroundColor: string }) {
  const isMobile = useMediaQuery((t: Theme) => t.breakpoints.down('md'));
  return (
    <TrackCardStyled>
      <LayeredBackground
        containerStyle={
          isMobile
            ? { width: 'auto', height: 'auto', background: backgroundColor, borderRadius: '8px' }
            : { width: '370px', height: '410px', background: backgroundColor, borderRadius: '8px' }
        }
        backgroundContent={<div style={{ width: '100%', height: 'auto' }}>{image}</div>}
      >
        <div className="tracks-content">{children}</div>
      </LayeredBackground>
    </TrackCardStyled>
  );
}

export function RecapLink({ recapVideoUrl = '', label }: { recapVideoUrl?: string; label: string }) {
  return (
    <LinkButton onClick={() => window.open(recapVideoUrl, '_blank')} icon="arrow-up-right.svg" darkMode>
      <Typography variant="bodySAlt">{label}</Typography>
    </LinkButton>
  );
}

export function ContactUsButton() {
  return (
    <WhiteButton onClick={() => window.open('/join-us', '_blank')} endIcon={<Icon name="arrow-up-right.svg" height={20} width={20} />}>
      Contact us
    </WhiteButton>
  );
}

export function AgendaPdfLink({ href }: { href: string }) {
  return (
    <LinkButton onClick={() => window.open(href, '_blank')} icon="arrow-up-right.svg">
      Explore the agenda
    </LinkButton>
  );
}

export function BecomeSponsorLink() {
  return (
    <LinkButton darkMode={false} onClick={() => window.open('/become-a-sponsor', '_blank')} icon="arrow-up-right.svg">
      Become a 2027 Sponsor
    </LinkButton>
  );
}

export function BecomeMediaPartnerLink() {
  return (
    <LinkButton darkMode={false} onClick={() => window.open('/become-a-sponsor', '_blank')} icon="arrow-up-right.svg">
      Become a Media partner
    </LinkButton>
  );
}

export interface ArchiveSpeaker extends Omit<Speaker, 'id'> {
  /** Recordings in the Content Hub. */
  talks?: { name: string; contentHubLink: string }[];
}

/** Speaker card of a past edition: its drawer links to the talk recordings. */
export function ArchiveSpeakerCard({ speaker, edition }: { speaker: ArchiveSpeaker; edition: Edition }) {
  const { talks, ...rest } = speaker;
  return (
    <SpeakerCard
      speaker={{ id: `${speaker.firstName}-${speaker.lastName}`, ...rest }}
      darkMode
      edition={edition}
      talkLinks={(talks || []).map((t) => ({ title: t.name, href: t.contentHubLink, external: true }))}
    />
  );
}
