'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiLink from '@mui/material/Link';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, type Theme } from '@mui/material/styles';
import Image from '@/components/common/Image';
import { useState, type KeyboardEvent, type ReactNode } from 'react';
import IconButtonPrimary from '@/components/buttons/IconButtonPrimary';
import SocialButton from '@/components/buttons/SocialButton';
import Icon from '@/components/common/Icon';
import type { Speaker, TalkLink } from '@/lib/content';
import type { Edition } from '@/theme/palettes';
import { getTheme } from '@/theme/theme';

type SpeakerWithTalks = Speaker & { talks?: TalkLink[] };

interface DrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  speaker: SpeakerWithTalks;
  coverPhoto: string;
  edition: Edition;
  dividerGradient?: string;
}

const DIVIDER_GRADIENTS: Record<Edition, string> = {
  current: 'linear-gradient(90deg, #71D9BA 0%, #EAFEF3 100%)',
  '2025': 'linear-gradient(90deg, #D2C4F4 0%, #5F36DD 100%)',
  '2024': 'linear-gradient(90deg, #F0F7C4 0%, #8EEAE1 19.54%, #8EC7FF 96.48%)',
};

const DesktopDrawer = styled(SwipeableDrawer, { shouldForwardProp: (p) => p !== 'dividerGradient' })<{ dividerGradient: string }>(
  ({ theme, dividerGradient }) => ({
    '@keyframes fadeIn': { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
    '.MuiDrawer-paper': { animation: 'fadeIn 0.5s ease-out forwards' },
    '& .MuiPaper-root': { height: '100%', width: '50%', background: theme.palette.primary['900'] },
    '& .MuiBox-root': {},
    '& .MuiDivider-root': { background: dividerGradient, height: '8px' },
    '.info-details-container': {
      display: 'flex',
      flexDirection: 'column',
      gap: '48px',
      padding: '52px 40px',
      color: theme.palette.primary['50'],
    },
    '.info-details-section': { display: 'flex', flexDirection: 'column', gap: '20px' },
    '.talks-details-container': {
      display: 'flex',
      flexDirection: 'column',
      gap: '48px',
      padding: '52px 40px',
      color: theme.palette.primary['50'],
    },
    '.talk-details-section': { display: 'flex', flexDirection: 'column', gap: '20px' },
    '.talks-list': { display: 'flex', flexDirection: 'column', gap: '8px' },
    '.socials-container': { display: 'flex', gap: '12px' },
    '.main-info': { display: 'flex', flexDirection: 'column', width: 'calc(100% - 343px)' },
    '.card-main-content-container': { display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'white' },
    '.close-button-container': { height: '82px', textAlign: 'end', padding: '8px' },
    '.info-container': { display: 'flex', width: '288px', flexDirection: 'column', alignItems: 'flex-start', gap: '30px' },
    '.speaker-info': { display: 'flex', flexDirection: 'column', gap: '12px' },
    '.image-speaker': { width: '330px', height: '330px' },
  }),
);

const MobileDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    height: '100%',
    background: theme.palette.primary['900'],
    width: '100%',
    [theme.breakpoints.between('sm', 'md')]: { width: '400px' },
  },
  '& .MuiBox-root': {},
  '.info-details-container': {
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    padding: '0px 16px 32px 16px',
    color: theme.palette.primary['50'],
  },
  '.info-details-section': { display: 'flex', flexDirection: 'column', gap: '20px' },
  '.socials-container': { display: 'flex', gap: '12px' },
  '.card-main-content-container': { display: 'flex', flexDirection: 'column' },
  '.close-button-container': { textAlign: 'end', padding: '32px' },
  '.info-container': { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px', padding: '32px 16px' },
  '.speaker-info': { display: 'flex', flexDirection: 'column', gap: '12px', color: theme.palette.grey['50'] },
  '.talks-list': { display: 'flex', flexDirection: 'column', gap: '8px' },
  '.image-speaker': { maxWidth: '600px', maxWeight: '600px' },
}));

const toggleHandler = (setOpen: (v: boolean) => void) => (value: boolean) => (event?: unknown) => {
  const e = event as KeyboardEvent | undefined;
  if (e && e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) return;
  setOpen(value);
};

function TalksAndBio({ speaker, bioVariant, edition }: { speaker: SpeakerWithTalks; bioVariant: 'bodyXS' | 'bodyS'; edition: Edition }) {
  const baseTheme = getTheme(edition);
  return (
    <div className="info-details-container">
      {!!speaker.talks?.length && (
        <div className="talk-details-section">
          <div style={{ color: baseTheme.palette.primary['200'] }}>
            <Typography variant="h2">TALKS</Typography>
          </div>
          <div className="talks-list">
            {speaker.talks.map((talk, i) => (
              <MuiLink
                key={i}
                href={talk.href}
                {...(talk.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                underline="always"
                sx={{
                  textDecoration: 'underline',
                  textDecorationColor: baseTheme.palette.primary[50],
                  textDecorationThickness: '1px',
                  textUnderlineOffset: '2px',
                  '&:hover': { textDecorationColor: `${baseTheme.palette.primary[100]}  !important` },
                }}
              >
                <Typography
                  variant="bodyXSSemibold"
                  sx={{ color: baseTheme.palette.primary[50], '&:hover': { color: baseTheme.palette.primary[100] } }}
                >
                  {talk.title}
                </Typography>
              </MuiLink>
            ))}
          </div>
        </div>
      )}
      {speaker.biography && (
        <div className="info-details-section">
          <div style={{ color: baseTheme.palette.primary['200'] }}>
            <Typography variant="h2">BIO</Typography>
          </div>
          <div>
            <Typography variant={bioVariant}>{speaker.biography}</Typography>
          </div>
        </div>
      )}
    </div>
  );
}

function Socials({ speaker, lightMode }: { speaker: Speaker; lightMode?: boolean }) {
  return (
    <div className="socials-container">
      {speaker.linkedinUrl && <SocialButton lightMode={lightMode} socialMediaName="linkedin" socialMediaUrl={speaker.linkedinUrl} />}
      {speaker.githubUrl && <SocialButton lightMode={lightMode} socialMediaName="git" socialMediaUrl={speaker.githubUrl} />}
      {speaker.websiteUrl && <SocialButton lightMode={lightMode} socialMediaName="website" socialMediaUrl={speaker.websiteUrl} />}
    </div>
  );
}

function SpeakerDrawerDesktop({ open, setOpen, speaker, coverPhoto, edition, dividerGradient }: DrawerProps) {
  const toggle = toggleHandler(setOpen);
  return (
    <div>
      <DesktopDrawer
        dividerGradient={dividerGradient || DIVIDER_GRADIENTS[edition]}
        anchor="right"
        open={open}
        onClose={toggle(false)}
        onOpen={toggle(true)}
        slotProps={{ backdrop: { sx: { backgroundColor: 'rgba(11, 7, 26, 0.9)' } } }}
      >
        <Box role="presentation" onClick={toggle(false)} onKeyDown={toggle(false)}>
          <div className="card-main-content-container">
            <div className="image-speaker">
              <Image src={coverPhoto} alt="speaker image" sizes="100vw" height={0} width={0} style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="main-info">
              <div className="close-button-container">
                <IconButtonPrimary lightMode onClick={toggle(false)} icon={<Icon name="x-menu.svg" />} />
              </div>
              <div className="info-container">
                <div className="speaker-info">
                  <div>
                    <Typography variant="bodyLSemibold">{`${speaker.firstName} ${speaker.lastName}`}</Typography>
                  </div>
                  <div>
                    <Typography variant="bodyXSAlt">
                      {speaker.role && speaker.role}
                      <br />
                      {speaker.company && `@${speaker.company}`}
                    </Typography>
                  </div>
                </div>
                <Socials speaker={speaker} lightMode />
              </div>
            </div>
          </div>
          <Divider />
          <TalksAndBio speaker={speaker} bioVariant="bodyXS" edition={edition} />
        </Box>
      </DesktopDrawer>
    </div>
  );
}

function SpeakerDrawerMobile({ open, setOpen, speaker, coverPhoto, edition }: DrawerProps) {
  const toggle = toggleHandler(setOpen);
  return (
    <div>
      <MobileDrawer anchor="right" open={open} onClose={toggle(false)} onOpen={toggle(true)}>
        <Box role="presentation" onClick={toggle(false)} onKeyDown={toggle(false)}>
          <div className="card-main-content-container">
            <div className="close-button-container">
              <IconButtonPrimary onClick={toggle(false)} icon={<Icon name="x-menu.svg" />} />
            </div>
            <div className="image-speaker">
              <Image
                src={coverPhoto}
                alt="speaker image mobile"
                sizes="100vw"
                height={0}
                width={0}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="info-container">
              <div className="speaker-info">
                <div>
                  <Typography variant="bodyXXXL">{`${speaker.firstName} ${speaker.lastName}`}</Typography>
                </div>
                <div>
                  <Typography variant="bodyXSAlt">
                    {speaker.role && speaker.role}
                    <br />
                    {speaker.company && `@${speaker.company}`}
                  </Typography>
                </div>
              </div>
              <Socials speaker={speaker} />
            </div>
          </div>
          <TalksAndBio speaker={speaker} bioVariant="bodyS" edition={edition} />
        </Box>
      </MobileDrawer>
    </div>
  );
}

interface SpeakerCardWrapperProps {
  children: ReactNode;
  speaker: Speaker;
  coverPhoto: string;
  talkLinks?: TalkLink[];
  /** Palette used inside the drawer. */
  edition?: Edition;
}

/** Makes a speaker card clickable: opens a drawer with bio, socials and talks. */
export default function SpeakerCardWrapper({
  children,
  speaker,
  coverPhoto,
  talkLinks = [],
  edition = 'current',
}: SpeakerCardWrapperProps) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<SpeakerWithTalks>(speaker);
  const isMobile = useMediaQuery((t: Theme) => t.breakpoints.down('md'));

  return (
    <div
      onClick={() => {
        if (!open) {
          setOpen(true);
          setCurrent({ ...speaker, talks: talkLinks });
        }
      }}
      className="speaker-wrapper"
    >
      {children}
      {open &&
        (isMobile ? (
          <SpeakerDrawerMobile open={open} setOpen={setOpen} speaker={current} coverPhoto={coverPhoto} edition={edition} />
        ) : (
          <SpeakerDrawerDesktop open={open} setOpen={setOpen} speaker={current} coverPhoto={coverPhoto} edition={edition} />
        ))}
    </div>
  );
}
