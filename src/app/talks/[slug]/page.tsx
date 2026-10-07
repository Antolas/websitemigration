import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { notFound } from 'next/navigation';
import SocialButton from '@/components/buttons/SocialButton';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import SpeakerCard from '@/components/speakers/SpeakerCard';
import BackLink from '@/components/talks/BackLink';
import TalkChip from '@/components/talks/TalkChip';
import { InsideTheTalkBannerStyled, MainContentContainerStyled } from '@/components/talks/TalkStyled';
import { getSpeakerTalkLinks, getTalk, getTrack, resolveSpeakers, talks } from '@/lib/content';

export const dynamicParams = false;

export function generateStaticParams() {
  return talks.map((t) => ({ slug: t.readablePathId }));
}

export default function TalkPage({ params }: { params: { slug: string } }) {
  const talk = getTalk(decodeURIComponent(params.slug));
  if (!talk) notFound();
  const track = getTrack(talk.trackId);
  const speakers = resolveSpeakers(talk.speakers);

  return (
    <>
      <Header />
      <InsideTheTalkBannerStyled>
        <div className="go-back-button">
          <BackLink href="/speakers" label="ALL SPEAKERS" />
        </div>
        <div className="hero-container">
          <div className="hero-grid-container">
            <div className="info-event-container" style={{ gridArea: 'info-event' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ color: '#465155' }}>
                  <Typography variant="bodyXSSemibold">{talk.time}</Typography>
                </div>
                <div style={{ color: '#17262A' }}>
                  <Typography variant="bodyXSSemibold">{talk.room}</Typography>
                </div>
                {track && (
                  <div className="track-chip" style={{ color: track.textColor, background: track.backgroundColor }}>
                    <Typography variant="bodyXSSemibold">{track.title}</Typography>
                  </div>
                )}
              </div>
              <div>
                <SocialButton lightMode socialMediaName="share" copyUrlOfPage />
              </div>
            </div>
            <div style={{ gridArea: 'title-container' }} className="title-container">
              <div style={{ color: '#465155' }}>
                <Typography variant="h1">INSIDE THE TALK</Typography>
              </div>
              <div style={{ color: '#17262A' }}>
                <Typography variant="h4">{talk.title}</Typography>
              </div>
            </div>
          </div>
        </div>
      </InsideTheTalkBannerStyled>
      <Divider sx={{ background: 'linear-gradient(90deg, #71D9BA 0%, #EAFEF3 100%)', height: '8px' }} />
      <MainContentContainerStyled>
        <div className="main-content-text-grid">
          <div style={{ gridArea: 'abstract' }} className="main-content-text">
            <div className="talk-abstract">
              <Typography variant="bodyM">{talk.abstract}</Typography>
            </div>
            <div className="talk-chip-container">
              {talk.language && <TalkChip title="LANGUAGE" subtitle={talk.language} />}
              {talk.level && <TalkChip title="LEVEL" subtitle={talk.level} />}
              {talk.format && <TalkChip title="FORMAT" subtitle={talk.format} />}
            </div>
            <div style={{ marginBottom: '24px' }}>
              <Typography variant="h2">SPEAKERS</Typography>
            </div>
          </div>
        </div>
        <div className="speakers-talks-container">
          <div className="speakers-talks">
            {speakers.map((s) => (
              <SpeakerCard key={s.id} speaker={s} layout="vertical" darkMode talkLinks={getSpeakerTalkLinks(s.id)} />
            ))}
          </div>
        </div>
      </MainContentContainerStyled>
      <Footer />
    </>
  );
}
