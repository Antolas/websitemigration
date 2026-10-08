'use client';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Icon from '@/components/common/Icon';
import { theme as baseTheme } from '@/theme/theme';
import { useEditionTheme } from '@/theme/useEditionTheme';
import { withBase } from '@/lib/base-path';

interface SocialButtonProps {
  /** Icon name in /public/icons/social-media-icons (x, linkedin, git, instagram, youtube, website, share). */
  socialMediaName: string;
  socialMediaUrl?: string;
  lightMode?: boolean;
  handleLinkedInShare?: boolean;
  copyUrlOfPage?: boolean;
}

/** Round outlined social icon button. */
export default function SocialButton({
  socialMediaName,
  socialMediaUrl,
  lightMode,
  handleLinkedInShare,
  copyUrlOfPage,
}: SocialButtonProps) {
  const theme = useEditionTheme();
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    if (handleLinkedInShare) {
      const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
      window.open(withBase(url), '_blank');
    } else if (copyUrlOfPage) {
      await navigator.clipboard.writeText(location.href);
      setCopied(true);
    } else {
      window.open(withBase(socialMediaUrl), '_blank');
    }
  };

  return (
    <Button
      variant="contained"
      sx={{
        width: '38px',
        height: '38px',
        backgroundColor: copied ? theme.palette.primary[50] : 'transparent',
        borderRadius: '19px',
        border: `1.5px solid ${theme.palette.primary[200]}`,
        padding: '7px',
        minWidth: 'auto',
        boxShadow: 'none',
        color: lightMode ? theme.palette.grey[800] : 'white',
        '&:hover': {
          backgroundColor: lightMode ? theme.palette.primary[50] : 'rgba(234, 254, 243, 0.24)',
          border: `3px solid ${theme.palette.primary[200]}`,
        },
        '@media (max-width:1200px)': { padding: '7px' },
      }}
      onClick={handleClick}
      onBlur={() => setCopied(false)}
    >
      <Icon name={`/social-media-icons/${socialMediaName}.svg`} style={{ width: '100%', height: '100%' }} width={24} height={24} />
      {copied && (
        <div style={{ position: 'absolute', marginLeft: '132px', color: baseTheme.palette.primary[800] }}>
          <Typography variant="bodyXSAlt">COPIED!</Typography>
        </div>
      )}
    </Button>
  );
}
