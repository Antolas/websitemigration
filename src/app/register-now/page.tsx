import Typography from '@mui/material/Typography';
import Image from 'next/image';
import HubSpotForm from '@/components/common/HubSpotForm';
import TextHighlighted from '@/components/common/TextHighlighted';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { RegisterStyled, RegisterTextSectionStyled, SecondaryDarkHeroStyled } from '@/components/register/RegisterStyled';
import LocationCard from '@/components/sections/LocationCard';
import page from '@content/pages/register-now.json';

export default function RegisterNowPage() {
  return (
    <RegisterStyled>
      <h2 style={{ display: 'none' }}>PLATMOSPHERE 2026</h2>
      <Header />
      <SecondaryDarkHeroStyled>
        <div className="supertitle">
          <Typography variant="h1">MASTER THE VIBE</Typography>
        </div>
        <div className="header">
          <div className="title">
            <Typography variant="h3">
              Join
              <br />
              Platmosphere
            </Typography>
          </div>
        </div>
        <div className="subtitle">
          <Typography variant="h1">CHAPTER 2026</Typography>
        </div>
        <div className="location-container">
          <LocationCard date="26th MAY 2026" city="Milan" venue="Talent Garden Calabiana" />
        </div>
      </SecondaryDarkHeroStyled>
      <div className="register-full-width-section">
        <div className="register-inner-container">
          <div className="register-content-container">
            <div className="register-text-section">
              <RegisterTextSectionStyled>
                <div className="introduction">
                  <div className="keywords">
                    {page.keywords.map((k) => (
                      <TextHighlighted key={k} variant="bodyM">
                        {k}
                      </TextHighlighted>
                    ))}
                  </div>
                  <div className="content">
                    <Typography variant="bodyM" sx={{ color: '#465155' }}>
                      {page.intro[0]}
                      <br />
                      {page.intro[1]}
                    </Typography>
                    <ul className="benefits-list">
                      {page.benefits.map((b) => (
                        <li key={b}>
                          <Typography variant="bodyM" sx={{ fontWeight: 700 }}>
                            {b}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="divider" />
                <div className="reasons">
                  <div className="title">
                    <TextHighlighted variant="bodyM">{page.reasonsTitle}</TextHighlighted>
                  </div>
                  <ul className="reasons-list">
                    {page.reasons.map((r) => (
                      <li key={r.title}>
                        <Typography variant="bodyM" sx={{ color: '#465155' }}>
                          <Typography component="span" variant="bodyM" sx={{ fontWeight: 700, color: '#00516B' }}>
                            {r.title}
                          </Typography>
                          {r.text}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="divider" />
                <div className="sponsors-section">
                  <div className="sponsors-main-title">
                    <Typography variant="bodyM">
                      {page.sponsorsTitle.split(' ').map((word, i) => (
                        <TextHighlighted key={i} variant="bodyM" containerStyle={{ padding: '0px 4px' }}>
                          {word}
                        </TextHighlighted>
                      ))}
                    </Typography>
                  </div>
                  <div className="sponsors-groups-container">
                    {page.sponsorGroups.map((group, i) => (
                      <div className="sponsor-group" key={i}>
                        {group.title && (
                          <div className="sponsor-group-title">
                            <Typography variant="h2" sx={{ color: '#465155' }}>
                              {group.title}
                            </Typography>
                          </div>
                        )}
                        <div className="sponsors-logos">
                          {group.logos.map((l) => (
                            <div className="logo" key={l.name}>
                              <Image
                                src={l.logo}
                                alt={l.name}
                                style={{ width: '70%', height: '70%', objectFit: 'contain' }}
                                sizes="100vw"
                                height={0}
                                width={0}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RegisterTextSectionStyled>
            </div>
            <div className="register-form">
              <HubSpotForm formId={page.hubspotFormId} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </RegisterStyled>
  );
}
