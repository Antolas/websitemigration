import Typography, { type TypographyProps } from '@mui/material/Typography';
import Image from 'next/image';
import type { Speaker, TalkLink } from '@/lib/content';
import SpeakerCardWrapper from './SpeakerCardWrapper';
import { SpeakerCardStyled, type SpeakerCardStyledProps } from './SpeakerCardStyled';

interface SpeakerCardProps extends SpeakerCardStyledProps {
  speaker: Speaker;
  /** Talks listed in the drawer opened on click. */
  talkLinks?: TalkLink[];
  nameVariant?: TypographyProps['variant'];
  /** Render the static card only (no click-to-open drawer). */
  disableDrawer?: boolean;
}

/** Speaker portrait + name/role/company. Clicking opens the speaker drawer. */
export default function SpeakerCard({ speaker, talkLinks = [], layout, darkMode, nameVariant = 'bodyXSSemibold', disableDrawer }: SpeakerCardProps) {
  const card = (
    <SpeakerCardStyled layout={layout} darkMode={darkMode}>
      <div className="speaker-image">
        <Image src={speaker.photo || ''} alt="Speaker" sizes="100vw" height={0} width={0} style={{ width: 'auto', height: '100%' }} />
      </div>
      <div className="speaker-text">
        <div className="speaker">
          <Typography className="speakerName" variant={nameVariant}>
            {speaker.firstName} {speaker.lastName}
          </Typography>
        </div>
        <div>
          {speaker.role && (
            <div className="speaker-subtitle">
              <Typography variant="bodyXSAlt">{speaker.role}</Typography>
            </div>
          )}
          {speaker.company && (
            <div className="speaker-subtitle">
              <Typography variant="bodyXSAlt">@{speaker.company}</Typography>
            </div>
          )}
        </div>
      </div>
    </SpeakerCardStyled>
  );
  if (disableDrawer) return card;
  return (
    <SpeakerCardWrapper speaker={speaker} coverPhoto={speaker.photo || ''} talkLinks={talkLinks}>
      {card}
    </SpeakerCardWrapper>
  );
}
