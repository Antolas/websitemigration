import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Fragment } from 'react';
import Marquee from '@/components/common/Marquee';
import {
  ExternalTextLink,
  SecondaryNavButton,
  WatchRecapLink,
  WhiteLinkButton,
  WhiteNavButton,
} from '@/components/buttons/ActionButtons';
import Icon from '@/components/common/Icon';
import LayeredBackground from '@/components/common/LayeredBackground';
import NumberReport, { type NumberItem } from '@/components/common/NumberReport';
import LogoCard, { type Logo } from '@/components/partners/LogoCard';
import { HomeSponsorsStyled } from '@/components/partners/HomeSponsorsStyled';
import SpeakerCard from '@/components/speakers/SpeakerCard';
import { getSpeakerTalkLinks, type Speaker } from '@/lib/content';
import type { SponsorGroup } from '@/lib/partners';
import HeroAnimation from './HeroAnimation';
import {
  DarkBannerStyled,
  HomeEmotionalVideoStyled,
  HomeGalleryStyled,
  HomeHeroStyled,
  HomeKeywordsStyled,
  HomeMediaPartnersStyled,
  HomeNumberComponentStyled,
  HomeNumberReportStyled,
  HomeSpeakersStyled,
  KeywordStyled,
} from './HomeStyled';

const lines = (parts: string[]) =>
  parts.map((p, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {p}
    </Fragment>
  ));

interface HeroProps {
  eyebrow: string;
  date: string;
  location: string;
  tagline: string;
  cta: { label: string; href: string };
  numbersTitle: string[];
  numbers: NumberItem[];
  keywords: string[];
  keywordsRepeat: number;
}

export function HomeHero({ eyebrow, date, location, tagline, cta, numbersTitle, numbers, keywords, keywordsRepeat }: HeroProps) {
  const marqueeItems = Array.from({ length: keywordsRepeat }, () => keywords).flat();
  return (
    <LayeredBackground background="linear-gradient(90deg, #A0FFA7 -7.63%, #20A393 29.18%, #002F5A 93.49%)" backgroundContent={<HeroAnimation />}>
      <div style={{ width: '100%' }}>
        <div style={{ paddingTop: 'var(--navbar-height, 0px)' }}>
          <HomeHeroStyled>
            <div className="container-hero" style={{ gap: '44px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '16px', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <Typography variant="bodyLAltBold">{eyebrow}</Typography>
                <Image
                  src="/assets/images/platmosphere-darkmode2.png"
                  alt="Platmosphere logo"
                  sizes="100vw"
                  height={250}
                  width={1178}
                  style={{ height: 'auto', maxWidth: '1176px', width: '100%' }}
                />
                <div style={{ display: 'flex', gap: '34px', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="text-date">
                    <Typography variant="bodyLSemibold">{date}</Typography>
                    <Typography variant="bodyL">{location}</Typography>
                  </div>
                  <Typography variant="bodyXLMedium" sx={{ color: '#D5FDE7' }}>
                    {tagline}
                  </Typography>
                </div>
              </div>
              <div>
                <WhiteNavButton href={cta.href}>{cta.label}</WhiteNavButton>
              </div>
            </div>
            <div className="text-container">
              <div className="text-info" />
            </div>
          </HomeHeroStyled>
          <HomeNumberReportStyled>
            <div>
              <Typography variant="bodyXXLBlack">{lines(numbersTitle)}</Typography>
            </div>
            <HomeNumberComponentStyled>
              {numbers.map((n) => (
                <NumberReport key={n.label} {...n} darkMode />
              ))}
            </HomeNumberComponentStyled>
          </HomeNumberReportStyled>
          <HomeKeywordsStyled>
            <Marquee>
              {marqueeItems.map((keyword, i) => (
                <KeywordStyled key={i}>
                  <Typography variant="h5">
                    {' '}
                    {keyword}
                  </Typography>
                  <Icon name="grey-circle.svg" />
                </KeywordStyled>
              ))}
            </Marquee>
          </HomeKeywordsStyled>
        </div>
      </div>
    </LayeredBackground>
  );
}

export function HomeEmotionalVideo({ title, embedUrl, recapLabel, recapUrl }: { title: string; embedUrl: string; recapLabel: string; recapUrl: string }) {
  return (
    <HomeEmotionalVideoStyled>
      <div className="title-emotional-video">
        <Typography variant="h3">{title}</Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <div style={{ position: 'relative', width: '100%', margin: '0 auto', aspectRatio: '256/75', objectFit: 'cover' }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', aspectRatio: '256/75' }}
            allow="fullscreen"
            allowFullScreen
            frameBorder="0"
            src={embedUrl}
            title="Teaser video"
            loading="lazy"
          />
        </div>
      </div>
      <div className="watch-recap-button-container">
        <WatchRecapLink href={recapUrl} label={recapLabel} />
      </div>
    </HomeEmotionalVideoStyled>
  );
}

export function HomeGallery({ title, buttonLabel, image }: { title: string[]; buttonLabel: string; image: string }) {
  return (
    <HomeGalleryStyled>
      <div className="title-gallery">
        <Typography variant="h3">{lines(title)}</Typography>
        <div className="gallery-button">
          <SecondaryNavButton href="/gallery">{buttonLabel}</SecondaryNavButton>
        </div>
      </div>
      <div>
        <Image src={image} alt="Gallery" sizes="100vw" height={0} width={0} style={{ width: '100%', height: 'auto' }} />
      </div>
    </HomeGalleryStyled>
  );
}

export function HomeSpeakers({ title, speakers }: { title: string[]; speakers: Speaker[] }) {
  return (
    <HomeSpeakersStyled>
      <div className="title-speakers">
        <Typography variant="h3">{lines(title)}</Typography>
        <div className="speakers-button">
          <SecondaryNavButton href="/speakers">Meet Our Speakers</SecondaryNavButton>
        </div>
      </div>
      <div className="speakers-grid-container">
        <div className="speakers-grid">
          {speakers.map((s) => (
            <SpeakerCard key={s.id} speaker={s} darkMode talkLinks={getSpeakerTalkLinks(s.id)} />
          ))}
        </div>
      </div>
    </HomeSpeakersStyled>
  );
}

export function HomeSponsors({ groups }: { groups: SponsorGroup[] }) {
  return (
    <HomeSponsorsStyled>
      <div className="sponsors-logos-container">
        <div className="sponsors-groups">
          <div className="sponsors-logos-title">
            <div style={{ color: '#465155' }}>
              <Typography variant="h2">PARTNER WITH PLATMOSPHERE</Typography>
            </div>
            <Typography variant="h3">Our Sponsors</Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ExternalTextLink href="/become-a-sponsor">Become a 2027 Sponsor</ExternalTextLink>
            </div>
          </div>
          {groups.map((group) => (
            <div className="sponsor-group" key={group.title}>
              <Typography variant="h2">{group.title}</Typography>
              <div className={group.size === 'big' ? 'sponsors-logos-big' : 'sponsors-logos-standard'}>
                {group.logos.map((logo) => (
                  <LogoCard key={logo.name} {...logo} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </HomeSponsorsStyled>
  );
}

export function HomeMediaPartners({ logos }: { logos: Logo[] }) {
  return (
    <HomeMediaPartnersStyled>
      <div className="title-media-partners">
        <div>
          <Typography variant="h2" sx={{ color: '#465155' }}>
            MEDIA PARTNERS 2026
          </Typography>
          <Typography variant="h3">Our Media Partners</Typography>
        </div>
        <div className="media-partners-container">
          <ExternalTextLink href="/become-a-sponsor">Become a Media partner</ExternalTextLink>
        </div>
      </div>
      <div className="media-partners-logos-container">
        <div className="media-partners-logos">
          {logos.map((logo) => (
            <LogoCard key={logo.name} {...logo} />
          ))}
        </div>
      </div>
    </HomeMediaPartnersStyled>
  );
}

interface DarkBannerProps {
  eyebrow: string;
  title: string[];
  subtitle: string;
  cta: { label: string; href: string };
}

/** Gradient "Join the Platmosphere Community" banner with hexagons and sphere. */
export function DarkBanner({ eyebrow, title, subtitle, cta }: DarkBannerProps) {
  return (
    <DarkBannerStyled>
      <LayeredBackground
        backgroundContent={
          <LayeredBackground
            backgroundContent={
              <div style={{ display: 'flex', justifyContent: 'center', margin: '-15%' }}>
                <Image src="/assets/images/hexagons-white-min.png" alt="hexagon" sizes="100vw" height={0} width={0} style={{ width: '70%', height: '100%' }} />
              </div>
            }
          >
            <div style={{ width: '100%', display: 'flex', justifyContent: 'start', height: '100%', alignItems: 'start' }}>
              <Image src="/Sphere2026-top-left.png" alt="sphere" sizes="100vw" height={0} width={0} className="dark-banner-sphere" />
            </div>
          </LayeredBackground>
        }
      >
        <div className="dark-banner-content">
          <div className="dark-banner-text">
            <Typography variant="h2" sx={{ color: '#EAFEF3' }}>
              {eyebrow}
            </Typography>
            <Typography variant="h3">
              <div>{lines(title)}</div>
            </Typography>
            <div className="dark-banner-subtitle">
              <Typography variant="bodyM">{subtitle}</Typography>
            </div>
          </div>
          <div>
            <WhiteLinkButton label={cta.label} href={cta.href} iconName="arrow-up-right.svg" target="_blank" />
          </div>
        </div>
      </LayeredBackground>
    </DarkBannerStyled>
  );
}
