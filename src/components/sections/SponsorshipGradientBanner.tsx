'use client';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Image from '@/components/common/Image';
import { WhiteLinkButton } from '@/components/buttons/ActionButtons';
import LayeredBackground from '@/components/common/LayeredBackground';

const SponsorshipStyled = styled('div')(({ theme }) => ({
  background: 'linear-gradient(90deg, #A0FFA7 -7.63%, #20A393 29.18%, #002F5A 93.49%)',
  color: '#FFFFFF',
  '.title-sponsorship': {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '60px 152px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: { padding: '64px 16px', gap: '4px' },
  },
  '.sponsorship-content-text': { display: 'flex', flexDirection: 'column', gap: '16px' },
  '.subtitle-sponsorship': { color: theme.palette.primary['100'] },
  '.image-sphere': { width: '400px', height: 'auto', [theme.breakpoints.down('md')]: { width: '300px' } },
}));

/** Gradient "Sponsorship" banner with a white "Become a sponsor" button. */
export default function SponsorshipGradientBanner() {
  return (
    <SponsorshipStyled>
      <LayeredBackground
        backgroundContent={
          <LayeredBackground
            backgroundContent={
              <div style={{ display: 'flex', justifyContent: 'center', margin: '-15%' }}>
                <Image
                  src="/assets/images/hexagons-white-min.png"
                  alt="hexagon"
                  sizes="100vw"
                  height={0}
                  width={0}
                  style={{ width: '70%', height: '100%' }}
                />
              </div>
            }
          >
            <div style={{ width: '100%', display: 'flex', justifyContent: 'start', height: '100%', alignItems: 'start' }}>
              <Image src="/Sphere2026-top-left.png" alt="sphere" sizes="100vw" height={0} width={0} className="image-sphere" />
            </div>
          </LayeredBackground>
        }
      >
        <div className="title-sponsorship">
          <div className="sponsorship-content-text">
            <Typography variant="h3">Sponsorship</Typography>
            <div className="subtitle-sponsorship">
              <Typography variant="bodyM">
                Showcase your brand and partner with us to amplify your impact <br />
                and drive meaningful connections.
              </Typography>
            </div>
          </div>
          <div>
            <WhiteLinkButton label="Become a sponsor" href="/become-a-sponsor" />
          </div>
        </div>
      </LayeredBackground>
    </SponsorshipStyled>
  );
}
