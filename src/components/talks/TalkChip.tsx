'use client';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const TalkChipStyled = styled('div')(({ theme }) => ({
  '.talk-chip-content': { display: 'flex', flexDirection: 'column', gap: '8px' },
  '.talk-chip-title': { color: theme.palette.primary[200] },
  '.talk-chip': {
    padding: '0px 8px',
    borderRadius: '30px',
    width: 'fit-content',
    background: theme.palette.grey[100],
    color: theme.palette.grey[800],
    textTransform: 'uppercase',
  },
}));

/** "LANGUAGE / English" style label + grey chip. */
export default function TalkChip({ title = '', subtitle = '' }: { title?: string; subtitle?: string }) {
  return (
    <TalkChipStyled>
      <div className="talk-chip-content">
        <div className="talk-chip-title">
          <Typography variant="bodyXSSemibold">{title}</Typography>
        </div>
        <div className="talk-chip">
          <Typography variant="bodyXSAlt">{subtitle}</Typography>
        </div>
      </div>
    </TalkChipStyled>
  );
}
