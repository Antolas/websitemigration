import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { notFound } from 'next/navigation';
import ContentHubDetailHero from '@/components/content-hub/ContentHubDetailHero';
import { ContentHubDetailVideo, DownloadSlidesButton } from '@/components/content-hub/ContentHubDetailVideo';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import SpeakerCard from '@/components/speakers/SpeakerCard';
import { MainContentContainerStyled } from '@/components/talks/TalkStyled';
import { contentHub, getContentHubItem, getTrack, resolveSpeakers } from '@/lib/content';

export const dynamicParams = false;

export function generateStaticParams() {
  return contentHub.map((c) => ({ slug: c.readablePathId }));
}

export default function ContentHubItemPage({ params }: { params: { slug: string } }) {
  const item = getContentHubItem(decodeURIComponent(params.slug));
  if (!item) notFound();
  const track = getTrack(item.track?.value);
  const speakers = resolveSpeakers(item.speakers);

  return (
    <>
      <Header />
      <ContentHubDetailHero track={track} edition={item.edition} title={item.title} subtitle={item.subtitle} />
      <Divider sx={{ background: 'linear-gradient(90deg, #71D9BA 0%, #EAFEF3 100%)', height: '8px' }} />
      <MainContentContainerStyled>
        <div className="main-content-text-grid">
          <div style={{ gridArea: 'abstract' }} className="main-content-text">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40, justifyContent: 'center', alignItems: 'center' }}>
              {item.videoURL && <ContentHubDetailVideo videoId={item.videoURL} />}
              {item.slideURL && <DownloadSlidesButton slideURL={item.slideURL} />}
            </div>
            <div className="talk-abstract">
              <Typography variant="bodyM">{item.description}</Typography>
            </div>
            <div className="topics">
              {item.topics?.map((topic) => (
                <div key={topic.value} className="track-chip" style={{ color: '#17262A', background: '#D1D4D4' }}>
                  <Typography variant="bodyXSAlt">{topic.label}</Typography>
                </div>
              ))}
            </div>
            <div style={{ marginBottom: '24px' }}>
              <Typography variant="h2">SPEAKERS</Typography>
            </div>
          </div>
        </div>
        <div className="speakers-talks-container">
          <div className="speakers-talks">
            {speakers.map((s) => (
              <SpeakerCard key={s.id} speaker={s} layout="vertical" darkMode />
            ))}
          </div>
        </div>
      </MainContentContainerStyled>
      <Footer />
    </>
  );
}
