import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  AboutEmotionalVideoStyled,
  AboutHeroStyled,
  AboutImpactStyled,
  AboutNumberReportStyled,
  AboutSustainabilityStyled,
  VenueSectionStyled,
} from '@/components/about/AboutStyled';
import DownloadMapLink from '@/components/about/DownloadMapLink';
import VenueMap from '@/components/about/VenueMap';
import { WatchRecapLink } from '@/components/buttons/ActionButtons';
import HighlightedInline from '@/components/common/HighlightedInline';
import Icon from '@/components/common/Icon';
import { NumberReportStyled } from '@/components/common/NumberReport';
import RichText from '@/components/common/RichText';
import SphereDivider from '@/components/common/SphereDivider';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Faq from '@/components/sections/Faq';
import LocationCard from '@/components/sections/LocationCard';
import SponsorshipLightBanner from '@/components/sections/SponsorshipLightBanner';
import about from '@content/pages/about.json';

export default function AboutPage() {
  const { hero, intro, video, venue, sustainability, impact, faqs } = about;
  return (
    <>
      <Header />
      <AboutHeroStyled>
        <Typography variant="h1" sx={{ color: '#465155', letterSpacing: '0.1em' }}>
          {hero.eyebrow}
        </Typography>
        <div className="header">
          <Typography variant="h3" sx={{ letterSpacing: '0.1em' }}>
            {hero.title}
          </Typography>
        </div>
        <div className="location-container">
          <LocationCard date={hero.date} city={hero.city} venue={hero.venue} />
        </div>
      </AboutHeroStyled>

      <AboutEmotionalVideoStyled>
        <div className="gallery-description">
          {intro.map((paragraph, i) => (
            <Typography key={i} variant="bodyM" sx={{ color: '#FFFFFF', ...(i < intro.length - 1 ? { marginBottom: '16px' } : {}) }}>
              <RichText text={paragraph} renderHighlight={(t) => <HighlightedInline>{t}</HighlightedInline>} />
            </Typography>
          ))}
        </div>
        <div
          className="video-container"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}
        >
          <div style={{ position: 'relative', width: '100%', margin: '0 auto', aspectRatio: '256/75', objectFit: 'cover' }}>
            <iframe
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', aspectRatio: '256/75' }}
              allow="fullscreen"
              allowFullScreen
              frameBorder="0"
              src={video.embedUrl}
              title="Teaser video"
              loading="lazy"
            />
          </div>
        </div>
        <div className="watch-recap-button-container">
          <WatchRecapLink href={video.recapUrl} label={video.recapLabel} />
        </div>
      </AboutEmotionalVideoStyled>

      <VenueSectionStyled>
        <div className="venue-container" style={{ color: '#465155' }}>
          <div className="text-container">
            <div className="title-container">
              <div className="title-group">
                <Typography variant="h2">VENUE</Typography>
                <Typography variant="h3" sx={{ color: '#001015' }}>
                  {venue.name[0]}
                  {'\n'}
                  {venue.name[1]}
                </Typography>
              </div>
              <div>
                <Typography variant="bodyM">{venue.address}</Typography>
              </div>
            </div>
            <div className="description-container">
              {venue.description.map((d, i) => (
                <Typography key={i} variant="bodyM">
                  <RichText text={d} />
                </Typography>
              ))}
            </div>
          </div>
          <div className="block-images-container">
            <div className="images-container">
              <div className="image-block">
                <img src={venue.image} alt="info rooms" />
              </div>
              <div className="image-block">
                <VenueMap src={venue.mapEmbedUrl} />
              </div>
            </div>
            <div className="icons-container">
              {venue.transports.map((t) => (
                <div className="icon-location-container" key={t.label}>
                  <div className="icon-location">
                    <Icon name={t.icon} width="100%" height="100%" />
                  </div>
                  <div className="icon-text-container">
                    <Typography variant="bodyXSAlt">{t.label}</Typography>
                    <Typography variant="bodyS" sx={{ color: '#17262A' }}>
                      {t.value}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <DownloadMapLink mapURL={venue.mapDownloadUrl} />
        </div>
      </VenueSectionStyled>

      <AboutSustainabilityStyled>
        <div className="title-sustainability">
          <Typography variant="h2" sx={{ color: '#465155', letterSpacing: '0.1em' }}>
            {sustainability.eyebrow}
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: '0.1em' }}>
            {sustainability.title[0]}
            <br />
            {sustainability.title[1]}
          </Typography>
        </div>
        <div className="sustainability-grid-container">
          <div className="sustainability-grid">
            <img src={sustainability.logo} alt="Sustainability Logo" style={{ width: '100%' }} />
          </div>
          <div className="sustainability-grid">
            {sustainability.paragraphs.map((p, i) => (
              <Typography key={i} variant="bodyM" sx={{ color: '#5A6163', width: 'fit-content' }}>
                <RichText text={p} />
              </Typography>
            ))}
          </div>
        </div>
      </AboutSustainabilityStyled>

      <AboutImpactStyled>
        <div className="title-impact">
          <Typography variant="h2" sx={{ color: '#465155', letterSpacing: '0.1em' }}>
            {impact.eyebrow}
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: '0.1em' }}>
            {impact.title}
          </Typography>
        </div>
        <AboutNumberReportStyled>
          {impact.numbers.map((n) => (
            <NumberReportStyled darkMode={false} key={n.label}>
              <div className="first-child">
                <Typography variant="bodyXXXL">{n.value}</Typography>
              </div>
              <div className="second-child">
                <Typography variant="bodyMBold">{n.label}</Typography>
              </div>
            </NumberReportStyled>
          ))}
        </AboutNumberReportStyled>
        <div className="impact-button">
          <Button href={impact.reportUrl} variant="contained" color="primary" endIcon={<Icon name="arrow-up-right.svg" />}>
            {impact.reportLabel}
          </Button>
        </div>
      </AboutImpactStyled>

      <div style={{ background: '#EEEFEF' }}>
        <SphereDivider />
      </div>
      <SponsorshipLightBanner />
      <Faq faqs={faqs} />
      <Footer />
    </>
  );
}
