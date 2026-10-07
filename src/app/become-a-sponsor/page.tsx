import Typography from '@mui/material/Typography';
import HubSpotForm from '@/components/common/HubSpotForm';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import DarkHeroHeader from '@/components/sponsor/DarkHeroHeader';
import LogoTiles from '@/components/sponsor/LogoTiles';
import { SponsorsStyled, SponsorsTextSectionStyled } from '@/components/sponsor/SponsorStyled';
import page from '@content/pages/become-a-sponsor.json';

export default function BecomeASponsorPage() {
  return (
    <SponsorsStyled>
      <h2 style={{ display: 'none' }}>PLATMOSPHERE 2025</h2>
      <Header />
      <DarkHeroHeader eyebrow="SPONSOR" title="Become a sponsor" />
      <div className="sponsors-full-width-section">
        <div className="sponsors-inner-container">
          <div className="sponsors-content-container">
            <div className="sponsors-text-section">
              <SponsorsTextSectionStyled>
                <div className="text-info-sponsors">
                  <div style={{ color: '#465155' }}>
                    <Typography variant="h2">
                      <b>SPONSORSHIP 2026</b>
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h3" sx={{ color: '#001015', letterSpacing: '0.1em' }}>
                      Join the
                      <br /> Sponsors
                      <br /> Club
                    </Typography>
                  </div>
                  <div style={{ color: '#465155' }}>
                    <Typography variant="bodyM">
                      <b>26th MAY 2026</b>
                      {'· '}
                      {' Milan'}
                      {', '}
                      Talent Garden Calabiana
                    </Typography>
                  </div>
                </div>
                <div className="parteners-logos-container">
                  <LogoTiles title="SPONSORS" logos={page.sponsors} />
                  <LogoTiles title="MEDIA PARTNERS" logos={page.mediaPartners} />
                </div>
              </SponsorsTextSectionStyled>
            </div>
            <div className="sponsors-form">
              <HubSpotForm formId={page.hubspotFormId} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </SponsorsStyled>
  );
}
