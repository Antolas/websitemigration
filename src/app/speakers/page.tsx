import Typography from '@mui/material/Typography';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import LocationCard from '@/components/sections/LocationCard';
import SponsorshipGradientBanner from '@/components/sections/SponsorshipGradientBanner';
import SpeakerCard from '@/components/speakers/SpeakerCard';
import { SpeakersHeroStyled, SpeakersSpeakersStyled } from '@/components/speakers/SpeakersPageStyled';
import { getSpeaker, getSpeakerTalkLinks, type Speaker } from '@/lib/content';
import page from '@content/pages/speakers.json';

export default function SpeakersPage() {
  const list = page.speakerIds.map(getSpeaker).filter(Boolean) as Speaker[];
  return (
    <>
      <Header />
      <SpeakersHeroStyled>
        <div className="hero-container">
          <Typography variant="h1" sx={{ color: '#465155', letterSpacing: '0.1em' }}>
            {page.hero.eyebrow}
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: '0.1em' }}>
            {page.hero.title[0]}
            <br />
            {page.hero.title[1]}
          </Typography>
          <div className="location-container">
            <LocationCard date={page.hero.date} city={page.hero.city} venue={page.hero.venue} />
          </div>
        </div>
        <div className="hero-footer" />
      </SpeakersHeroStyled>
      <SpeakersSpeakersStyled>
        <div className="speakers-grid-container">
          <div className="speakers-grid">
            {list.map((s) => (
              <SpeakerCard
                key={s.id}
                speaker={s}
                layout="horizontal"
                darkMode={false}
                nameVariant="bodyLSemibold"
                talkLinks={getSpeakerTalkLinks(s.id)}
              />
            ))}
          </div>
        </div>
      </SpeakersSpeakersStyled>
      <SponsorshipGradientBanner />
      <Footer />
    </>
  );
}
