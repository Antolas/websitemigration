'use client';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Image from '@/components/common/Image';
import Icon from '@/components/common/Icon';
import LayeredBackground from '@/components/common/LayeredBackground';
import { withBase } from '@/lib/base-path';

const SponsorshipLightBannerStyled = styled('div')(({ theme }) => ({
  background: theme.palette.grey[50],
  color: theme.palette.grey[900],
  '.title-sponsorship': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    padding: '100px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: { padding: '64px 16px' },
  },
  '.subtitle-sponsorship': { color: theme.palette.grey[600] },
  '.sponsorship-button-container': { display: 'flex', justifyContent: 'center', paddingTop: '24px' },
  '.image-sphere': {
    width: '30%',
    height: 'auto',
    [theme.breakpoints.down('md')]: { width: '40%' },
    [theme.breakpoints.down('sm')]: { width: '50%' },
  },
}));

/** Light "Sponsorship" call-to-action banner with hexagons and a sphere. */
export default function SponsorshipLightBanner() {
  return (
    <SponsorshipLightBannerStyled>
      <LayeredBackground
        backgroundContent={
          <LayeredBackground
            backgroundContent={
              <div style={{ display: 'flex', justifyContent: 'center', margin: '-15%' }}>
                <Image
                  alt="hexagons"
                  src="/assets/images/hexagons.png"
                  sizes="100vw"
                  height={0}
                  width={0}
                  style={{ width: '70%', height: '100%' }}
                />
              </div>
            }
          >
            <div style={{ width: '100%', display: 'flex', justifyContent: 'end', alignItems: 'end', height: '100%' }}>
              <Image alt="sphere" src="/lightbanner-sphere.png" sizes="100vw" height={0} width={0} className="image-sphere" />
            </div>
          </LayeredBackground>
        }
      >
        <div className="title-sponsorship">
          <Typography variant="h3">Sponsorship</Typography>
          <div className="subtitle-sponsorship">
            <Typography variant="bodyM">
              Showcase your brand and partner with us to amplify your impact <br />
              and drive meaningful connections.
            </Typography>
          </div>
          <div className="sponsorship-button-container">
            <Button
              variant="contained"
              color="primary"
              onClick={() => window.open(withBase('/become-a-sponsor'), '_blank')}
              endIcon={<Icon name="arrow-up-right.svg" />}
            >
              Become a Sponsor
            </Button>
          </div>
        </div>
      </LayeredBackground>
    </SponsorshipLightBannerStyled>
  );
}
