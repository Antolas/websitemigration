import Typography from '@mui/material/Typography';
import ContentHubExplorer from '@/components/content-hub/ContentHubExplorer';
import { CallForPaperUnbrandedStyled, ContentHubHeroStyled } from '@/components/content-hub/ContentHubStyled';
import SubmitProposalLink from '@/components/content-hub/SubmitProposalLink';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { contentHub, tracks } from '@/lib/content';
import page from '@content/pages/content-hub.json';

export default function ContentHubPage() {
  return (
    <div style={{ background: '#002029' }}>
      <Header />
      <ContentHubHeroStyled>
        <Typography variant="h1" sx={{ color: '#465155', letterSpacing: '0.1em' }}>
          {page.hero.eyebrow}
        </Typography>
        <Typography variant="h3" sx={{ letterSpacing: '0.1em' }}>
          {page.hero.title}
        </Typography>
        <Typography variant="bodyL" sx={{ color: '#17262A', letterSpacing: '0.1em' }}>
          {page.hero.subtitle[0]}
          <br />
          {page.hero.subtitle[1]}
        </Typography>
      </ContentHubHeroStyled>
      <ContentHubExplorer contentHub={contentHub} tracks={tracks} filters={page.filters} />
      <CallForPaperUnbrandedStyled>
        <div className="title-call-for-papers">
          <Typography variant="h2" style={{ color: '#465155' }}>
            CALL FOR PAPERS
          </Typography>
          <Typography variant="h3">Have insights to share?</Typography>
          <div className="subtitle-call-for-papers">
            <Typography variant="bodyM">
              Together, we create the future. Be part of the conversation shaping tomorrow&apos;s platform! <br />
              Submit your talk and join our lineup
              <br /> of Industry Leaders.
            </Typography>
          </div>
          <div className="call-for-paper-button-container">
            <SubmitProposalLink url={page.callForPapers.url} />
          </div>
        </div>
      </CallForPaperUnbrandedStyled>
      <Footer />
    </div>
  );
}
