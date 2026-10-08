'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Icon from '@/components/common/Icon';
import { siteConfig } from '@/lib/site';
import { useEditionTheme } from '@/theme/useEditionTheme';
import { withBase } from '@/lib/base-path';

const withProtocol = (url?: string) =>
  !url || url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/') ? url : `https://${url}`;

/** Thin announcement bar shown above the navbar (configured in content/site.json → banner). */
export default function AnnouncementBanner({ onClose }: { onClose: () => void }) {
  const theme = useEditionTheme();
  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [closeHovered, setCloseHovered] = useState(false);
  const [closePressed, setClosePressed] = useState(false);

  const banner = siteConfig.banner;
  if (!banner) return null;

  const hasLink = !!banner.linkButton;
  const textColor = hasLink && hovered && !pressed ? `${theme.palette.primary[900]}CC` : theme.palette.primary[900];
  const linkColor = hasLink
    ? pressed
      ? theme.palette.primary[700]
      : hovered
        ? `${theme.palette.primary[500]}CC`
        : theme.palette.primary[500]
    : theme.palette.primary[500];
  const closeColor = closePressed ? theme.palette.primary[700] : closeHovered ? theme.palette.primary[900] : theme.palette.primary[700];

  const content = (
    <>
      <Typography variant="bodySAlt" sx={{ flex: '0 1 auto', color: textColor }}>
        {banner.text}
      </Typography>
      {banner.buttonText && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', color: linkColor }}>
          <Typography variant="bodySAlt">{banner.buttonText}</Typography>
          <Icon name="arrow-up-right.svg" width={16} height={16} />
        </Box>
      )}
    </>
  );

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary[50],
        color: 'white',
        padding: '12px 48px 12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: { xs: 'flex-start', sm: 'center' },
        flexWrap: 'wrap',
        position: 'relative',
      }}
    >
      {hasLink ? (
        <Box
          onClick={() => window.open(withBase(withProtocol(banner.linkButton)), '_blank')}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => {
            setHovered(false);
            setPressed(false);
          }}
          sx={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: { xs: 'flex-start', sm: 'center' },
            cursor: 'pointer',
          }}
        >
          {content}
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: { xs: 'flex-start', md: 'center' },
          }}
        >
          {content}
        </Box>
      )}
      <button
        onClick={onClose}
        onMouseDown={() => setClosePressed(true)}
        onMouseUp={() => setClosePressed(false)}
        onMouseEnter={() => setCloseHovered(true)}
        onMouseLeave={() => {
          setCloseHovered(false);
          setClosePressed(false);
        }}
        style={{
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'transparent',
          border: 'none',
          color: closeColor,
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
        }}
        aria-label="close banner"
      >
        <Icon name="x-menu.svg" width={24} height={24} />
      </button>
    </Box>
  );
}
