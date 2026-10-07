'use client';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SocialButton from '@/components/buttons/SocialButton';
import { useEditionTheme } from '@/theme/useEditionTheme';

const FooterStyled = styled('div')(({ theme }) => ({
  background: theme.palette.grey[900],
  color: '#FFFFFF',
  [theme.breakpoints.down('md')]: {
    padding: '50px 16px 0px 16px',
    flexDirection: 'column',
    gap: '16px',
  },
  '.image-plarmosphere': { width: '281px', height: 'auto', marginLeft: '-10px' },
  '.mia-platform-references': {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '52px 156px',
    [theme.breakpoints.down('md')]: { padding: '0px', flexDirection: 'column', gap: '36px' },
  },
  '.mia-platform-logo': { display: 'flex', gap: '8px', color: theme.palette.primary['200'], alignItems: 'end' },
  '.mia-platform-references-socials': {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    [theme.breakpoints.down('md')]: { gap: '16px', marginBottom: '32px' },
  },
  '.previous-editions-links': { display: 'flex', flexDirection: 'column', gap: '4px' },
  '.end-of-footer': {
    display: 'flex',
    gap: '10%',
    justifyContent: 'space-between',
    padding: '52px 156px',
    borderTop: `1px solid ${theme.palette.primary[950]}`,
    [theme.breakpoints.down('md')]: { borderTop: 'none', flexDirection: 'column', gap: '8px', padding: '0px 0px 52px 0px' },
  },
  '.social-media-container': {
    display: 'flex',
    gap: '8px',
    justifyContent: 'end',
    [theme.breakpoints.down('md')]: { justifyContent: 'start' },
  },
  '.copyright': { color: theme.palette.grey[200], [theme.breakpoints.down('md')]: { padding: '0px 0px 25px 0px' } },
}));

/** Opens the HubSpot cookie consent banner. */
function CookieSettingsButton() {
  return (
    <button
      style={{ background: 'transparent', color: 'white', textDecoration: 'underline', border: 'none', cursor: 'pointer', padding: 0 }}
      onClick={() => {
        const w = window as unknown as { _hsp?: unknown[][] };
        w._hsp = w._hsp || [];
        w._hsp.push(['showBanner']);
      }}
      type="button"
      id="hs_show_banner_button"
    >
      <Typography variant="bodyXS">Cookie settings</Typography>
    </button>
  );
}

const SOCIALS = [
  { name: 'x', url: 'https://twitter.com/MiaPlatform' },
  { name: 'linkedin', url: 'https://www.linkedin.com/company/mia-platform/' },
  { name: 'git', url: 'https://github.com/mia-platform' },
  { name: 'instagram', url: 'https://www.instagram.com/miaplatform/' },
  { name: 'youtube', url: 'https://www.youtube.com/channel/UCWEgCxRmFgHgCwV3ntZ2hvA' },
];

export default function Footer() {
  const router = useRouter();
  const theme = useEditionTheme();
  const [hover2024, setHover2024] = useState(false);
  const [hover2025, setHover2025] = useState(false);

  return (
    <FooterStyled>
      <div className="mia-platform-references">
        <div>
          <Image
            src="/assets/images/platmosphere-darkmode1.png"
            alt="Platmosphere logo"
            sizes="100vw"
            height={0}
            width={0}
            className="image-plarmosphere"
          />
        </div>
        <div className="previous-editions-links">
          <Typography variant="bodyXSAlt" sx={{ color: theme.palette.primary[200] }}>
            PREVIOUS EDITIONS
          </Typography>
          <Typography
            variant="bodyXS"
            sx={{ color: hover2024 ? '#FFF' : theme.palette.grey[300], cursor: 'pointer', transition: 'color 0.2s' }}
            onMouseEnter={() => setHover2024(true)}
            onMouseLeave={() => setHover2024(false)}
            onClick={() => router.push('/2024')}
          >
            Chapter 2024
          </Typography>
          <Typography
            variant="bodyXS"
            sx={{ color: hover2025 ? '#FFF' : theme.palette.grey[300], cursor: 'pointer', transition: 'color 0.2s' }}
            onMouseEnter={() => setHover2025(true)}
            onMouseLeave={() => setHover2025(false)}
            onClick={() => router.push('/2025')}
          >
            Chapter 2025
          </Typography>
        </div>
        <div className="mia-platform-references-socials">
          <div className="mia-platform-logo">
            <Typography variant="bodyXSAlt">AN EVENT BY</Typography>
            <Image
              src="/assets/images/logo-mia-platform.png"
              alt="logo mia platform"
              sizes="100vw"
              height={0}
              width={0}
              style={{ width: 'auto', height: '45px' }}
            />
          </div>
          <div className="social-media-container">
            {SOCIALS.map((s) => (
              <SocialButton key={s.name} socialMediaName={s.name} socialMediaUrl={s.url} />
            ))}
          </div>
        </div>
      </div>
      <div className="end-of-footer">
        <div className="copyright">
          <Typography variant="bodyXS">© Copyright 2025 MIA srl</Typography>
        </div>
        <div>
          <a
            href="/pdf/Privacy-Policy-Platmosphere.com_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline', color: 'white' }}
          >
            <Typography variant="bodyXS">Privacy policy</Typography>
          </a>
        </div>
        <div>
          <div>
            {' '}
            <CookieSettingsButton />
          </div>
        </div>
        <div>
          <a
            href="/pdf/Platmosphere-Terms-Conditions.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline', color: 'white' }}
          >
            <Typography variant="bodyXS">Code of conduct</Typography>
          </a>
        </div>
      </div>
    </FooterStyled>
  );
}
