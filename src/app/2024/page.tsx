import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from '@/components/common/Image';
import {
  AgendaPdfLink,
  ArchiveSpeakerCard,
  BecomeMediaPartnerLink,
  BecomeSponsorLink,
  ContactUsButton,
  RecapLink,
  TrackCard,
  type ArchiveSpeaker,
} from '@/components/archive/ArchiveComponents';
import {
  ContactBanner2024Styled,
  EmotionalVideo2024Styled,
  Gallery2024Styled,
  Hero2024Styled,
  Impact2024Styled,
  ImpactNumbers2024Styled,
  MediaPartners2024Styled,
  NumberComponent2024Styled,
  NumberReport2024ItemStyled,
  NumberReport2024Styled,
  Speakers2024Styled,
  Sponsors2024Styled,
  Sustainability2024Styled,
  Tracks2024Styled,
} from '@/components/archive/Edition2024Styled';
import EditionThemeProvider from '@/components/archive/EditionThemeProvider';
import Icon from '@/components/common/Icon';
import Marquee from '@/components/common/Marquee';
import { NumberReportStyled } from '@/components/common/NumberReport';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import LogoCard from '@/components/partners/LogoCard';
import archiveData from '@content/archive/2024.json';

const archive = archiveData as {
  speakers: ArchiveSpeaker[];
  sponsors: { name: string; url: string; logo: string }[];
  mediaPartners: { name: string; url: string; logo: string }[];
};

/** Archive of Platmosphere 2024. */
export default function Edition2024Page() {
  return (
    <EditionThemeProvider edition="2024">
      <Header />
      <h1 style={{ display: 'none' }}>PLATMOSPHERE 2024</h1>
      <div
        style={{
          width: '100%',
          minHeight: '100vh',
          background: 'linear-gradient(77deg, #F0F7C4 3.1%, #8EEAE1 22.31%, #8EC7FF 97.94%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              width: '100%',
              height: '100%',
            }}
          >
            <Image
              src={'/images/editions/hero-background-2024.png'}
              alt="Platmosphere 2024 Background"
              width={657}
              height={657}
              style={{
                width: '100%',
                maxWidth: '657px',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
        <div style={{ position: 'relative', zIndex: 1, height: 'inherit' }}>
          <div style={{ width: '100%' }}>
            <div style={{ paddingTop: 'var(--navbar-height, 0px)' }}>
              <Hero2024Styled>
                <div
                  className="container-hero"
                  style={{
                    gap: '44px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '16px',
                      flexDirection: 'column',
                      alignItems: 'center',
                      width: '100%',
                    }}
                  >
                    <Image
                      src="/assets/images/platmosphere-darkmode2.png"
                      alt="Platmosphere logo"
                      sizes="100vw"
                      height={250}
                      width={1178}
                      style={{
                        height: 'auto',
                        maxWidth: '1176px',
                        width: '100%',
                      }}
                    />
                    <Typography variant="bodyLSemibold" sx={{ color: '#162039' }}>
                      CHAPTER 2024
                    </Typography>
                    <div
                      style={{
                        display: 'flex',
                        gap: '34px',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <Typography variant="bodyXXLBlack" sx={{ color: '#162039' }}>
                        Compose your future
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="text-container">
                  <div className="text-info" />
                </div>
              </Hero2024Styled>
              <NumberReport2024Styled>
                <div>
                  <Typography variant="bodyXXLBlack" sx={{ color: '#162039' }}>
                    {'The in-person conference '}
                    <br />
                    for the platform enthusiasts
                  </Typography>
                </div>
                <NumberComponent2024Styled>
                  <NumberReport2024ItemStyled>
                    <div className="first-child">
                      <Typography variant="bodyXXXL">
                        400
                        {''}
                      </Typography>
                    </div>
                    <div className="second-child">
                      <Typography variant="bodyMBold">Attendees</Typography>
                    </div>
                  </NumberReport2024ItemStyled>
                  <NumberReport2024ItemStyled>
                    <div className="first-child">
                      <Typography variant="bodyXXXL">
                        13
                        {''}
                      </Typography>
                    </div>
                    <div className="second-child">
                      <Typography variant="bodyMBold">Countries represented by attendees</Typography>
                    </div>
                  </NumberReport2024ItemStyled>
                  <NumberReport2024ItemStyled>
                    <div className="first-child">
                      <Typography variant="bodyXXXL">
                        41
                        {''}
                      </Typography>
                    </div>
                    <div className="second-child">
                      <Typography variant="bodyMBold">{' International speakers'}</Typography>
                    </div>
                  </NumberReport2024ItemStyled>
                  <NumberReport2024ItemStyled>
                    <div className="first-child">
                      <Typography variant="bodyXXXL">
                        200
                        {''}
                      </Typography>
                    </div>
                    <div className="second-child">
                      <Typography variant="bodyMBold">Companies</Typography>
                    </div>
                  </NumberReport2024ItemStyled>
                </NumberComponent2024Styled>
              </NumberReport2024Styled>
            </div>
          </div>
        </div>
      </div>
      <Gallery2024Styled>
        <div className="gallery-description">
          <Typography variant="bodyM" sx={{ color: '#252132' }}>
            {"Platmosphere is more than just an event. It's a convergence of minds and ideas, igniting change and uniting "}
            <b>platform enthusiasts</b>
            {' for constructive discussions on '}
            <b>Platform Engineering</b>
            {' and '}
            <b>Composability.</b>
            {' The 2024 chapter "'}
            <b>Compose Your Future</b>
            {'", delved into how the synergy between '}
            <b>Platform Engineering</b>
            {' and Composability enables organizations to construct resilient, future-proof platforms that foster continuous '}
            <b>innovation</b>
            {' and '}
            <b>growth.</b>
            {' Through leveraging composability principles like '}
            <b>modularity</b>
            {' and '}
            <b>reuse,</b>
            {' platform engineers can create adaptable and '}
            <b>responsive platforms</b>
            {' to meet evolving business dynamics and market demands.'}
          </Typography>
        </div>
        <Marquee>
          <Image
            width={0}
            height={0}
            sizes="100wv"
            src="/media/ccf5dd72-163c-4d1c-b771-604e6a844796.png"
            alt="image [1]"
            className="image-down"
          />
          <Image
            width={0}
            height={0}
            sizes="100wv"
            src="/media/1d0e302b-38f3-4737-9fe3-93497cb4dd4e.png"
            alt="image [2]"
            className="image-up"
          />
          <Image
            width={0}
            height={0}
            sizes="100wv"
            src="/media/298747ff-828c-4b98-8109-0db6e6a27493.png"
            alt="image [3]"
            className="image-down"
          />
          <Image
            width={0}
            height={0}
            sizes="100wv"
            src="/media/24bb8f04-c221-46d6-8e2d-3dc3b24f126a.png"
            alt="image [4]"
            className="image-up"
          />
          <Image
            width={0}
            height={0}
            sizes="100wv"
            src="/media/164ca1db-642e-4f51-923f-44af262b91b3.png"
            alt="image [5]"
            className="image-down"
          />
          <Image
            width={0}
            height={0}
            sizes="100wv"
            src="/media/ae15a5ff-4a07-4cc8-9f2e-2ac8eba7ddc2.png"
            alt="image [6]"
            className="image-up"
          />
          <Image
            width={0}
            height={0}
            sizes="100wv"
            src="/media/767ff8f5-7042-42a7-a478-4d5d456151d2.png"
            alt="image [7]"
            className="image-down"
          />
          <Image
            width={0}
            height={0}
            sizes="100wv"
            src="/media/0a7f34d2-965a-48c5-9077-10a9e3392afa.png"
            alt="image [8]"
            className="image-up"
          />
          <Image
            width={0}
            height={0}
            sizes="100wv"
            src="/media/d3b60d78-f565-4c29-8eb4-93108f7fdcdf.png"
            alt="image [9]"
            className="image-down"
          />
        </Marquee>
      </Gallery2024Styled>
      <EmotionalVideo2024Styled>
        <div className="title-emotional-video">
          <Typography variant="h3">Feel the Platmosphere</Typography>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              margin: '0 auto',
              aspectRatio: '256/75',
              objectFit: 'cover',
            }}
          >
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                aspectRatio: '256/75',
              }}
              allow="fullscreen"
              allowFullScreen
              frameBorder="0"
              src="https://player.vimeo.com/video/1026557133"
              title="Teaser video"
              loading="lazy"
            />
          </div>
        </div>
        <div className="watch-recap-button-container">
          <RecapLink recapVideoUrl="https://www.youtube.com/watch?v=gJZTqwh327c" label="Watch 2024 video recap" />
        </div>
      </EmotionalVideo2024Styled>
      <Speakers2024Styled>
        <div className="title-speakers">
          <Typography variant="h3">
            Inspiring Voices from
            <br />
            our 2024 Edition
          </Typography>
        </div>
        <div className="speakers-grid-container">
          <div className="speakers-grid">
            {archive.speakers.map((speaker, i) => (
              <ArchiveSpeakerCard key={i} speaker={speaker} edition="2024" />
            ))}
          </div>
        </div>
      </Speakers2024Styled>
      <Tracks2024Styled>
        <div className="title-tracks">
          <div style={{ color: '#585662' }}>
            <Typography variant="h2">{'TRACKS & AGENDA'}</Typography>
          </div>
          <Typography variant="h3" sx={{ color: '#252132' }}>
            What we talked about
          </Typography>
        </div>
        <div className="tracks-grid-container">
          <div className="tracks-grid">
            <TrackCard
              image={
                <Image
                  src={'/images/editions/tracksCard-Business2024.png'}
                  alt="track"
                  style={{ width: '100%', height: '100%' }}
                  sizes="100vw"
                  height={0}
                  width={0}
                />
              }
              backgroundColor="linear-gradient(115deg, rgba(210, 196, 244, 0.45) 0%, rgba(188, 197, 252, 0.45) 51.93%, rgba(142, 199, 255, 0.45) 98.91%)"
            >
              <div className="tracks-title">
                <Typography variant="h4" style={{ color: '#252132' }}>
                  {'Platform '}
                </Typography>
                <Typography variant="h4" style={{ color: '#252132' }}>
                  {' Business'}
                </Typography>
              </div>
              <div>
                <Typography variant="bodyS" sx={{ color: '#252132' }}>
                  Explore how Platform Engineering can boost your business growth by accelerating your innovation processes, improving
                  scalability and flexibility of your platforms.
                </Typography>
              </div>
            </TrackCard>
            <TrackCard
              image={
                <Image
                  src={'/images/editions/tracksCard-Stories2024.png'}
                  alt="track"
                  style={{ width: '100%', height: '100%' }}
                  sizes="100vw"
                  height={0}
                  width={0}
                />
              }
              backgroundColor="linear-gradient(115deg, rgba(142, 199, 255, 0.45) 0%, rgba(142, 234, 225, 0.45) 51.93%, rgba(240, 247, 196, 0.45) 98.91%)"
            >
              <div className="tracks-title">
                <Typography variant="h4" style={{ color: '#252132' }}>
                  {'Platform '}
                </Typography>
                <Typography variant="h4" style={{ color: '#252132' }}>
                  {' Stories'}
                </Typography>
              </div>
              <div>
                <Typography variant="bodyS" sx={{ color: '#252132' }}>
                  Hear firsthand experiences from industry leaders and pioneers, gaining insights into the challenges, lessons, and pivotal
                  moments in their platform journeys.
                </Typography>
              </div>
            </TrackCard>
            <TrackCard
              image={
                <Image
                  src={'/images/editions/tracksCard-Tech2024.png'}
                  alt="track"
                  style={{ width: '100%', height: '100%' }}
                  sizes="100vw"
                  height={0}
                  width={0}
                />
              }
              backgroundColor="linear-gradient(115deg, rgba(210, 196, 244, 0.45) 0%, rgba(226, 175, 229, 0.45) 54.4%, rgba(247, 153, 200, 0.45) 98.91%)"
            >
              <div className="tracks-title">
                <Typography variant="h4" style={{ color: '#252132' }}>
                  {'Platform '}
                </Typography>
                <Typography variant="h4" style={{ color: '#252132' }}>
                  {' Tech & Hacks'}
                </Typography>
              </div>
              <div>
                <Typography variant="bodyS" sx={{ color: '#252132' }}>
                  Join Tech Workshops and explore cutting-edge technologies, best practices, and hands-on demonstrations for developers,
                  engineers, and technical enthusiasts.
                </Typography>
              </div>
            </TrackCard>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <AgendaPdfLink href="/pdf/agenda2024.pdf" />
        </div>
      </Tracks2024Styled>
      <Sustainability2024Styled>
        <div className="title-sustainability">
          <Typography variant="h2" sx={{ color: '#585662', letterSpacing: '0.1em' }}>
            FOR A SUSTAINABLE DEVELOPMENT
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: '0.1em' }}>
            This is a
            <br />
            Carbon Neutral Event!
          </Typography>
        </div>
        <div className="sustainability-grid-container">
          <div className="sustainability-grid">
            <img src="/images/editions/sustainability2024.png" alt="Sustainability Logo" style={{ width: '100%' }} />
          </div>
          <div className="sustainability-grid">
            <Typography variant="bodyM" sx={{ color: '#5A6163' }} width="fit-content">
              {'Thanks to our collaboration with '}
              <a
                href="https://brands.u2y.io/mia-platform?language=en"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#206FDC', textDecoration: 'underline' }}
              >
                Up2You
              </a>
              , we effectively counterbalance its CO₂ emissions through certified international projects.
            </Typography>
            <Typography variant="bodyM" sx={{ color: '#5A6163' }} width="fit-content">
              Annually, we contribute to capture or avoid 7,471,795 tonnes of CO2 equivalent. Additionally, we support the protection of
              4,322 animal species and generate 1,371,304 megawatt-hours of renewable energy.
            </Typography>
          </div>
        </div>
      </Sustainability2024Styled>
      <Impact2024Styled>
        <div className="title-impact">
          <Typography variant="h2" sx={{ color: '#585662', letterSpacing: '0.1em' }}>
            REDUCING THE IMPACT OF PLATMOSPHERE 2024
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: '0.1em' }}>
            Key Numbers
          </Typography>
        </div>
        <ImpactNumbers2024Styled>
          <NumberReportStyled darkMode={false}>
            <div className="first-child">
              <Typography variant="bodyXXXL">
                7.4M Ton
                {''}
              </Typography>
            </div>
            <div className="second-child">
              <Typography variant="bodyMBold">CO2 captured annually</Typography>
            </div>
          </NumberReportStyled>
          <NumberReportStyled darkMode={false}>
            <div className="first-child">
              <Typography variant="bodyXXXL">
                4.32K
                {''}
              </Typography>
            </div>
            <div className="second-child">
              <Typography variant="bodyMBold">Protected animal species</Typography>
            </div>
          </NumberReportStyled>
          <NumberReportStyled darkMode={false}>
            <div className="first-child">
              <Typography variant="bodyXXXL">
                1.37M
                {''}
              </Typography>
            </div>
            <div className="second-child">
              <Typography variant="bodyMBold">MWh Renewable energy produced</Typography>
            </div>
          </NumberReportStyled>
          <NumberReportStyled darkMode={false}>
            <div className="first-child">
              <Typography variant="bodyXXXL">
                1.62M
                {''}
              </Typography>
            </div>
            <div className="second-child">
              <Typography variant="bodyMBold">Total hectares saved</Typography>
            </div>
          </NumberReportStyled>
          <NumberReportStyled darkMode={false}>
            <div className="first-child">
              <Typography variant="bodyXXXL">
                75.1K
                {''}
              </Typography>
            </div>
            <div className="second-child">
              <Typography variant="bodyMBold">Plant species preserved</Typography>
            </div>
          </NumberReportStyled>
        </ImpactNumbers2024Styled>
        <div className="impact-button">
          <Button
            href="/pdf/Report_sustainability2024.pdf"
            variant="contained"
            color="primary"
            endIcon={<Icon name="arrow-up-right.svg" />}
            component="a"
            target="_blank"
          >
            Read the Report 2024
          </Button>
        </div>
      </Impact2024Styled>
      <Sponsors2024Styled>
        <div className="title-sponsors">
          <div>
            <Typography variant="h2" sx={{ color: '#585662', letterSpacing: '0.1em' }}>
              SPONSORSHIP 2024
            </Typography>
            <Typography variant="h3">Meet our Sponsors</Typography>
          </div>
          <div className="sponsors-container">
            <BecomeSponsorLink />
          </div>
        </div>
        <div className="sponsors-logos-container">
          <div className="sponsors-logos">
            {archive.sponsors.map((logo) => (
              <LogoCard key={logo.name} {...logo} />
            ))}
          </div>
        </div>
      </Sponsors2024Styled>
      <MediaPartners2024Styled>
        <div className="title-media-partners">
          <div>
            <Typography variant="h2" sx={{ color: '#585662', letterSpacing: '0.1em' }}>
              MEDIA PARTNERS 2024
            </Typography>
            <Typography variant="h3">Our Media Partners</Typography>
          </div>
          <div className="media-partners-container">
            <BecomeMediaPartnerLink />
          </div>
        </div>
        <div className="media-partners-logos-container">
          <div className="media-partners-logos">
            {archive.mediaPartners.map((logo) => (
              <LogoCard key={logo.name} {...logo} />
            ))}
          </div>
        </div>
      </MediaPartners2024Styled>
      <ContactBanner2024Styled>
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 0,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '-15%',
                  }}
                >
                  <Image
                    alt="hexagons"
                    src="/assets/images/hexagons.png"
                    sizes="100vw"
                    height={0}
                    width={0}
                    style={{ width: '70%', height: '100%' }}
                  />
                </div>
              </div>
              <div style={{ position: 'relative', zIndex: 1, height: 'inherit' }}>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    height: '100%',
                  }}
                >
                  <Image alt="sphere" src={'/images/editions/sphere2024.png'} sizes="100vw" height={0} width={0} className="image-sphere" />
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', zIndex: 1, height: 'inherit' }}>
            <div className="title-contact-banner">
              <div style={{ color: '#E9F5FF' }}>
                <Typography variant="h2">CONTACTS</Typography>
              </div>
              <div className="contact-banner-content-text">
                <Typography variant="h3">
                  {"Can't find "}
                  <br />
                  {" what you're looking for?"}
                </Typography>
                <div className="subtitle-contact-banner">
                  <Typography variant="bodyM">
                    {'Let us help you! Reach out for more information and '}
                    <br />
                    {"we'll get back to you as soon as possible."}
                  </Typography>
                </div>
              </div>
              <div>
                <ContactUsButton />
              </div>
            </div>
          </div>
        </div>
      </ContactBanner2024Styled>
      <Footer />
    </EditionThemeProvider>
  );
}
