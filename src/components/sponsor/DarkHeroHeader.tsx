import Typography from '@mui/material/Typography';
import Image from '@/components/common/Image';
import type { ReactNode } from 'react';
import LayeredBackground from '@/components/common/LayeredBackground';
import { DarkHeroHeaderStyled } from './SponsorStyled';

/** Gradient hero: small eyebrow + big white title, sphere in the background. */
export default function DarkHeroHeader({ eyebrow, title, extra }: { eyebrow: string; title: ReactNode; extra?: ReactNode }) {
  return (
    <DarkHeroHeaderStyled>
      <LayeredBackground
        backgroundContent={
          <div style={{ width: '100%' }}>
            <Image alt="sphere" src="/assets/images/Sphere2026.png" sizes="100vw" height={0} width={0} className="image-sphere" />
          </div>
        }
      >
        <div className="content-wrapper">
          <div className="supertitle-header">
            <Typography variant="h1">{eyebrow}</Typography>
            <div className="title-header">
              <Typography variant="h3">
                <div>{title}</div>
              </Typography>
            </div>
            <div>{extra}</div>
          </div>
        </div>
      </LayeredBackground>
    </DarkHeroHeaderStyled>
  );
}
