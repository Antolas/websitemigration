import ChapterSection from '@/components/home/ChapterSection';
import {
  DarkBanner,
  HomeEmotionalVideo,
  HomeGallery,
  HomeHero,
  HomeMediaPartners,
  HomeSpeakers,
  HomeSponsors,
} from '@/components/home/HomeSections';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { getSpeaker, type Speaker } from '@/lib/content';
import { partners } from '@/lib/partners';
import home from '@content/pages/home.json';

export default function HomePage() {
  const featured = home.speakers.featuredSpeakerIds.map(getSpeaker).filter(Boolean) as Speaker[];
  return (
    <>
      <Header />
      <h1 style={{ display: 'none' }}>PLATMOSPHERE 2026: MASTER THE VIBE</h1>
      <HomeHero
        {...home.hero}
        numbersTitle={home.numbersTitle}
        numbers={home.numbers}
        keywords={home.keywords}
        keywordsRepeat={home.keywordsRepeat}
      />
      <ChapterSection {...home.chapter} />
      <HomeEmotionalVideo {...home.video} />
      <HomeGallery {...home.gallery} />
      <HomeSpeakers title={home.speakers.title} speakers={featured} />
      <HomeSponsors groups={partners.sponsors2026} />
      <HomeMediaPartners logos={partners.mediaPartners2026} />
      <DarkBanner {...home.darkBanner} />
      <Footer />
    </>
  );
}
