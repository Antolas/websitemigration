import Typography from '@mui/material/Typography';
import HubSpotForm from '@/components/common/HubSpotForm';
import TextHighlighted from '@/components/common/TextHighlighted';
import { JoinUsStyled } from '@/components/join-us/JoinUsStyled';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import DarkHeroHeader from '@/components/sponsor/DarkHeroHeader';

const HUBSPOT_FORM_ID = 'd3230b94-aaab-4a5d-9780-accfc36ff8ae';

export default function JoinUsPage() {
  return (
    <JoinUsStyled>
      <h2 style={{ display: 'none' }}>PLATMOSPHERE 2026</h2>
      <Header />
      <DarkHeroHeader
        eyebrow="KEEP IN TOUCH"
        title={
          <>
            Join the Community of <br />
            Platform Builders
          </>
        }
      />
      <div className="join-us-full-width-section">
        <div className="join-us-inner-container">
          <div className="join-us-content-container">
            <div className="join-us-text-section">
              <div>
                <Typography variant="h3">Sign up</Typography>
              </div>
              <div style={{ color: '#001015' }}>
                <Typography variant="bodyL">
                  <TextHighlighted variant="bodyLSemibold" containerStyle={{ marginLeft: '8px', color: '#00516B' }}>
                    Platmosphere 2026
                  </TextHighlighted>{' '}
                  was just the beginning.
                </Typography>
              </div>
              <div style={{ color: '#465155' }}>
                <Typography variant="bodyM">
                  Join our growing community of Platform Builders and stay connected with the people, ideas, and innovations driving the
                  future of Platform Engineering and AI.
                </Typography>
              </div>
              <div style={{ color: '#465155' }}>
                <Typography variant="bodyM">
                  Sign up for exclusive content, event updates, curated reads - and be the first to know what’s coming next.
                </Typography>
              </div>
              <Typography variant="bodyL">Let’s Keep Building. Together.</Typography>
            </div>
            <div className="join-us-form">
              <HubSpotForm formId={HUBSPOT_FORM_ID} style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </JoinUsStyled>
  );
}
