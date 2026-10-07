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
  ContactBanner2025Styled,
  EmotionalVideo2025Styled,
  Gallery2025Styled,
  Hero2025Styled,
  Impact2025Styled,
  ImpactNumbers2025Styled,
  MediaPartners2025Styled,
  NumberComponent2025Styled,
  NumberReport2025ItemStyled,
  NumberReport2025Styled,
  Speakers2025Styled,
  Sponsors2025Styled,
  Sustainability2025Styled,
  Tracks2025Styled,
} from '@/components/archive/Edition2025Styled';
import EditionThemeProvider from '@/components/archive/EditionThemeProvider';
import { TextHighlightedStyled } from '@/components/common/TextHighlighted';
import Icon from '@/components/common/Icon';
import Marquee from '@/components/common/Marquee';
import { NumberReportStyled } from '@/components/common/NumberReport';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import LogoCard from '@/components/partners/LogoCard';
import archiveData from '@content/archive/2025.json';

const archive = archiveData as {
  speakers: ArchiveSpeaker[];
  sponsors: { name: string; url: string; logo: string }[];
  mediaPartners: { name: string; url: string; logo: string }[];
};

/** Archive of Platmosphere 2025. */
export default function Edition2025Page() {
  return (
    <EditionThemeProvider edition="2025">
      <Header />
      <h1 style={{ display: 'none' }}>PLATMOSPHERE 2025</h1>
      <div
        style={{
          width: '100%',
          minHeight: '100vh',
          background: 'linear-gradient(108deg, #002F5A -37.53%, #082D74 24.86%, #392085 89.57%)',
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
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              width: '100%',
              height: '100%',
            }}
          >
            <Image
              src={'/images/editions/hero-background-2025.png'}
              alt="Platmosphere 2025 Background"
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
              <Hero2025Styled>
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
                    <Typography variant="bodyLAltBold" sx={{ color: '#FFF' }}>
                      CHAPTER 2025
                    </Typography>
                    <div
                      style={{
                        display: 'flex',
                        gap: '34px',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <div className="tagline-text">
                        <TextHighlightedStyled variant="bodyXXXLAltBlack" highlightColor="#9F86EB" containerStyle={{ color: '#FFF' }}>
                          <div className="text-highlighted-text">
                            <Typography variant="bodyXXXLAltBlack">Unleash the Invisible</Typography>
                          </div>
                          <div className="text-highlighted-line" />
                        </TextHighlightedStyled>
                      </div>
                      <div className="tagline-text-mobile">
                        <TextHighlightedStyled variant="bodyXXXLAltBlack" highlightColor="#9F86EB" containerStyle={{ color: '#FFF' }}>
                          <div className="text-highlighted-text">
                            <Typography variant="bodyXXXLAltBlack">Unleash the</Typography>
                          </div>
                          <div className="text-highlighted-line" />
                        </TextHighlightedStyled>
                        <TextHighlightedStyled variant="bodyXXXLAltBlack" highlightColor="#9F86EB" containerStyle={{ color: '#FFF' }}>
                          <div className="text-highlighted-text">
                            <Typography variant="bodyXXXLAltBlack">Invisible</Typography>
                          </div>
                          <div className="text-highlighted-line" />
                        </TextHighlightedStyled>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-container">
                  <div className="text-info" />
                </div>
              </Hero2025Styled>
              <NumberReport2025Styled>
                <div>
                  <Typography variant="bodyXXLBlack" sx={{ color: '#FFF' }}>
                    {'The in-person conference '}
                    <br />
                    for the platform enthusiasts
                  </Typography>
                </div>
                <NumberComponent2025Styled>
                  <NumberReport2025ItemStyled>
                    <div className="first-child">
                      <Typography variant="bodyXXXL">
                        400
                        {''}
                      </Typography>
                    </div>
                    <div className="second-child">
                      <Typography variant="bodyMBold">Attendees</Typography>
                    </div>
                  </NumberReport2025ItemStyled>
                  <NumberReport2025ItemStyled>
                    <div className="first-child">
                      <Typography variant="bodyXXXL">
                        25
                        {''}
                      </Typography>
                    </div>
                    <div className="second-child">
                      <Typography variant="bodyMBold">Countries represented by attendees</Typography>
                    </div>
                  </NumberReport2025ItemStyled>
                  <NumberReport2025ItemStyled>
                    <div className="first-child">
                      <Typography variant="bodyXXXL">
                        40
                        {''}
                      </Typography>
                    </div>
                    <div className="second-child">
                      <Typography variant="bodyMBold">International speakers</Typography>
                    </div>
                  </NumberReport2025ItemStyled>
                  <NumberReport2025ItemStyled>
                    <div className="first-child">
                      <Typography variant="bodyXXXL">
                        150
                        {''}
                      </Typography>
                    </div>
                    <div className="second-child">
                      <Typography variant="bodyMBold">Companies</Typography>
                    </div>
                  </NumberReport2025ItemStyled>
                </NumberComponent2025Styled>
              </NumberReport2025Styled>
            </div>
          </div>
        </div>
      </div>
      <Gallery2025Styled>
        <div className="gallery-description">
          <Typography variant="bodyM" sx={{ color: '#252132', marginBottom: '16px' }}>
            <TextHighlightedStyled
              variant="bodyM"
              highlightColor="#D2C4F4"
              containerStyle={{
                '& .MuiTypography-root': { fontWeight: 'bold' },
              }}
            >
              <div className="text-highlighted-text">
                <Typography variant="bodyM">Modern</Typography>
              </div>
              <div className="text-highlighted-line" />
            </TextHighlightedStyled>
            <TextHighlightedStyled
              variant="bodyM"
              highlightColor="#D2C4F4"
              containerStyle={{
                '& .MuiTypography-root': {
                  fontWeight: 'bold',
                  paddingLeft: '4px',
                },
              }}
            >
              <div className="text-highlighted-text">
                <Typography variant="bodyM">software</Typography>
              </div>
              <div className="text-highlighted-line" />
            </TextHighlightedStyled>
            <TextHighlightedStyled
              variant="bodyM"
              highlightColor="#D2C4F4"
              containerStyle={{
                '& .MuiTypography-root': {
                  fontWeight: 'bold',
                  paddingLeft: '4px',
                },
              }}
            >
              <div className="text-highlighted-text">
                <Typography variant="bodyM">engineering</Typography>
              </div>
              <div className="text-highlighted-line" />
            </TextHighlightedStyled>
            <TextHighlightedStyled
              variant="bodyM"
              highlightColor="#D2C4F4"
              containerStyle={{
                '& .MuiTypography-root': {
                  fontWeight: 'bold',
                  paddingLeft: '4px',
                },
              }}
            >
              <div className="text-highlighted-text">
                <Typography variant="bodyM">is</Typography>
              </div>
              <div className="text-highlighted-line" />
            </TextHighlightedStyled>
            <TextHighlightedStyled
              variant="bodyM"
              highlightColor="#D2C4F4"
              containerStyle={{
                '& .MuiTypography-root': {
                  fontWeight: 'bold',
                  paddingLeft: '4px',
                },
              }}
            >
              <div className="text-highlighted-text">
                <Typography variant="bodyM">quickly</Typography>
              </div>
              <div className="text-highlighted-line" />
            </TextHighlightedStyled>
            <TextHighlightedStyled
              variant="bodyM"
              highlightColor="#D2C4F4"
              containerStyle={{
                '& .MuiTypography-root': {
                  fontWeight: 'bold',
                  paddingLeft: '4px',
                },
              }}
            >
              <div className="text-highlighted-text">
                <Typography variant="bodyM">becoming</Typography>
              </div>
              <div className="text-highlighted-line" />
            </TextHighlightedStyled>
            <TextHighlightedStyled
              variant="bodyM"
              highlightColor="#D2C4F4"
              containerStyle={{
                '& .MuiTypography-root': {
                  fontWeight: 'bold',
                  paddingLeft: '4px',
                },
              }}
            >
              <div className="text-highlighted-text">
                <Typography variant="bodyM">unsustainable.</Typography>
              </div>
              <div className="text-highlighted-line" />
            </TextHighlightedStyled>
            {
              ' We embraced cloud native architectures to gain business agility, but the complexity of distributed systems, modular architectures, parallel roadmaps, and atomic organizations is rapidly taking over.'
            }
          </Typography>
          <Typography variant="bodyM" sx={{ color: '#252132', marginBottom: '16px' }}>
            {
              "We are slowing down again, while costs rapidly rise and governance becomes more difficult by the day. It's not a matter of assets or talent: we have all the resources that we need, but they are hidden, invisible, often impossible to discover, untangle and capitalize. Our path is right: we just need to shed the light on it."
            }
          </Typography>
          <Typography variant="bodyM" sx={{ color: '#252132', marginBottom: '16px' }}>
            {'In this chapter, "Unleash the Invisible," we will uncover how Platforms, empowered by '}
            <TextHighlightedStyled
              variant="bodyM"
              highlightColor="#D2C4F4"
              containerStyle={{
                '& .MuiTypography-root': { fontWeight: 'bold' },
              }}
            >
              <div className="text-highlighted-text">
                <Typography variant="bodyM">AI</Typography>
              </div>
              <div className="text-highlighted-line" />
            </TextHighlightedStyled>
            {', can help reveal the hidden treasures within our systems. By describing '}
            <TextHighlightedStyled
              variant="bodyM"
              highlightColor="#D2C4F4"
              containerStyle={{
                '& .MuiTypography-root': { fontWeight: 'bold' },
              }}
            >
              <div className="text-highlighted-text">
                <Typography variant="bodyM">Everything as Code,</Typography>
              </div>
              <div className="text-highlighted-line" />
            </TextHighlightedStyled>
            {
              ' these platforms give us a live, actionable map of resources and provide the AI context necessary to supercharge our productivity.'
            }
          </Typography>
          <Typography variant="bodyM" sx={{ color: '#252132' }}>
            Mark your calendar and join the community of Platform Builders.
          </Typography>
        </div>
        <Marquee>
          <Image
            width={0}
            height={0}
            sizes="100wv"
            src="/media/626c4da8-6373-436f-a4bb-feed0d3c7184.webp"
            alt="image [1]"
            className="image-down"
          />
          <Image
            width={0}
            height={0}
            sizes="100wv"
            src="/media/28ef3164-903c-47ec-889a-a48f5a185f4b.webp"
            alt="image [2]"
            className="image-up"
          />
          <Image
            width={0}
            height={0}
            sizes="100wv"
            src="/media/2a6aae53-409b-41e4-a9ab-8f314fbd342a.webp"
            alt="image [3]"
            className="image-down"
          />
          <Image
            width={0}
            height={0}
            sizes="100wv"
            src="/media/062172e9-599d-4aec-929b-169bfb7fd9b9.webp"
            alt="image [4]"
            className="image-up"
          />
          <Image
            width={0}
            height={0}
            sizes="100wv"
            src="/media/90fbdf89-2f21-4e32-bf75-37cc26036601.webp"
            alt="image [5]"
            className="image-down"
          />
          <Image
            width={0}
            height={0}
            sizes="100wv"
            src="/media/1152eb6a-d6b9-4f0b-b049-a20f0d0d3f49.webp"
            alt="image [6]"
            className="image-up"
          />
          <Image
            width={0}
            height={0}
            sizes="100wv"
            src="/media/eccb05c6-77c6-472b-8afe-404eb39d018b.webp"
            alt="image [7]"
            className="image-down"
          />
          <Image
            width={0}
            height={0}
            sizes="100wv"
            src="/media/476f760b-d6a7-4d9e-ad90-a3e4dd99de23.webp"
            alt="image [8]"
            className="image-up"
          />
        </Marquee>
      </Gallery2025Styled>
      <EmotionalVideo2025Styled>
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
              src="https://player.vimeo.com/video/1087060630"
              title="Teaser video"
              loading="lazy"
            />
          </div>
        </div>
        <div className="watch-recap-button-container">
          <RecapLink recapVideoUrl="https://www.youtube.com/watch?v=LWgo7t1Y0Hs" label="Watch 2025 video recap" />
        </div>
      </EmotionalVideo2025Styled>
      <Speakers2025Styled>
        <div className="title-speakers">
          <Typography variant="h3">
            Inspiring Voices from
            <br />
            our 2025 Edition
          </Typography>
        </div>
        <div className="speakers-grid-container">
          <div className="speakers-grid">
            {archive.speakers.map((speaker, i) => (
              <ArchiveSpeakerCard key={i} speaker={speaker} edition="2025" />
            ))}
          </div>
        </div>
      </Speakers2025Styled>
      <Tracks2025Styled>
        <div className="title-tracks">
          <div style={{ color: '#585662' }}>
            <Typography variant="h2">{'TRACKS & AGENDA'}</Typography>
          </div>
          <Typography variant="h3" sx={{ color: '#0B071A' }}>
            What we talked about
          </Typography>
        </div>
        <div className="tracks-grid-container">
          <div className="tracks-grid">
            <TrackCard
              image={
                <Image
                  src={'/images/editions/tracksCard-Business2025.png'}
                  alt="track"
                  style={{ width: '100%', height: '100%' }}
                  sizes="100vw"
                  height={0}
                  width={0}
                />
              }
              backgroundColor="linear-gradient(147deg, #002F5A 26.05%, #00968D 93.56%, #DCED77 104.01%)"
            >
              <div className="tracks-title">
                <TextHighlightedStyled variant="h4" highlightColor="#0092B2">
                  <div className="text-highlighted-text">
                    <Typography variant="h4">{'Platform '}</Typography>
                  </div>
                  <div className="text-highlighted-line" />
                </TextHighlightedStyled>
                <TextHighlightedStyled variant="h4" highlightColor="#0092B2">
                  <div className="text-highlighted-text">
                    <Typography variant="h4">{' Business'}</Typography>
                  </div>
                  <div className="text-highlighted-line" />
                </TextHighlightedStyled>
              </div>
              <div>
                <Typography variant="bodyS">
                  Explore how Platform Engineering can boost your business growth by accelerating your innovation processes, improving
                  scalability and flexibility of your platforms.
                </Typography>
              </div>
            </TrackCard>
            <TrackCard
              image={
                <Image
                  src={'/images/editions/tracksCard-Stories2025.png'}
                  alt="track"
                  style={{ width: '100%', height: '100%' }}
                  sizes="100vw"
                  height={0}
                  width={0}
                />
              }
              backgroundColor="linear-gradient(112deg, #392085 5.6%, #77005F 61.39%, #881337 114.29%)"
            >
              <div className="tracks-title">
                <TextHighlightedStyled variant="h4" highlightColor="#F799C8">
                  <div className="text-highlighted-text">
                    <Typography variant="h4">{'Platform '}</Typography>
                  </div>
                  <div className="text-highlighted-line" />
                </TextHighlightedStyled>
                <TextHighlightedStyled variant="h4" highlightColor="#F799C8">
                  <div className="text-highlighted-text">
                    <Typography variant="h4">{' Stories'}</Typography>
                  </div>
                  <div className="text-highlighted-line" />
                </TextHighlightedStyled>
              </div>
              <div>
                <Typography variant="bodyS">
                  Explore how Platform Engineering can boost your business growth by accelerating your innovation processes, improving
                  scalability and flexibility of your platforms.
                </Typography>
              </div>
            </TrackCard>
            <TrackCard
              image={
                <Image
                  src={'/images/editions/tracksCard-Tech2025.png'}
                  alt="track"
                  style={{ width: '100%', height: '100%' }}
                  sizes="100vw"
                  height={0}
                  width={0}
                />
              }
              backgroundColor="linear-gradient(55deg, #FFD166 -6.05%, #DC4A6F 22.9%, #392085 74.2%)"
            >
              <div className="tracks-title">
                <TextHighlightedStyled variant="h4" highlightColor="#FFB947">
                  <div className="text-highlighted-text">
                    <Typography variant="h4">{'Platform '}</Typography>
                  </div>
                  <div className="text-highlighted-line" />
                </TextHighlightedStyled>
                <TextHighlightedStyled variant="h4" highlightColor="#FFB947">
                  <div className="text-highlighted-text">
                    <Typography variant="h4">{' Tech & Hacks'}</Typography>
                  </div>
                  <div className="text-highlighted-line" />
                </TextHighlightedStyled>
              </div>
              <div>
                <Typography variant="bodyS">
                  Explore how Platform Engineering can boost your business growth by accelerating your innovation processes, improving
                  scalability and flexibility of your platforms.
                </Typography>
              </div>
            </TrackCard>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <AgendaPdfLink href="/pdf/agenda2025.pdf" />
        </div>
      </Tracks2025Styled>
      <Sustainability2025Styled>
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
            <img src="/images/editions/sustainability2025.png" alt="Sustainability Logo" style={{ width: '100%' }} />
          </div>
          <div className="sustainability-grid">
            <Typography variant="bodyM" sx={{ color: '#5A6163' }} width="fit-content">
              {'Thanks to our collaboration with '}
              <a
                href="https://brands.u2y.io/mia-platform?language=en"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#4C2BB1', textDecoration: 'underline' }}
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
      </Sustainability2025Styled>
      <Impact2025Styled>
        <div className="title-impact">
          <Typography variant="h2" sx={{ color: '#585662', letterSpacing: '0.1em' }}>
            REDUCING THE IMPACT OF PLATMOSPHERE 2025
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: '0.1em' }}>
            Key Numbers
          </Typography>
        </div>
        <ImpactNumbers2025Styled>
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
        </ImpactNumbers2025Styled>
        <div className="impact-button">
          <Button
            href="/pdf/Report_sustainability2025.pdf"
            variant="contained"
            color="primary"
            endIcon={<Icon name="arrow-up-right.svg" />}
            component="a"
            target="_blank"
          >
            Read the Report 2025
          </Button>
        </div>
      </Impact2025Styled>
      <Sponsors2025Styled>
        <div className="title-sponsors">
          <div>
            <Typography variant="h2" sx={{ color: '#585662', letterSpacing: '0.1em' }}>
              SPONSORSHIP 2025
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
      </Sponsors2025Styled>
      <MediaPartners2025Styled>
        <div className="title-media-partners">
          <div>
            <Typography variant="h2" sx={{ color: '#585662', letterSpacing: '0.1em' }}>
              MEDIA PARTNERS 2025
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
      </MediaPartners2025Styled>
      <ContactBanner2025Styled>
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
                  <Image alt="sphere" src={'/images/editions/sphere2025.png'} sizes="100vw" height={0} width={0} className="image-sphere" />
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', zIndex: 1, height: 'inherit' }}>
            <div className="title-contact-banner">
              <div style={{ color: '#EFEBFC' }}>
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
                    {" we'll get back to you as soon as possible."}
                  </Typography>
                </div>
              </div>
              <div>
                <ContactUsButton />
              </div>
            </div>
          </div>
        </div>
      </ContactBanner2025Styled>
      <Footer />
    </EditionThemeProvider>
  );
}
