import Typography from '@mui/material/Typography';
import GalleryGrid, { type GalleryImage } from '@/components/gallery/GalleryGrid';
import { GalleryHeroStyled } from '@/components/gallery/GalleryHeroStyled';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import galleries from '@content/gallery.json';

export default function GalleryPage() {
  return (
    <div style={{ background: '#002029' }}>
      <Header />
      <GalleryHeroStyled>
        <Typography variant="h1" sx={{ color: '#465155', letterSpacing: '0.1em' }}>
          {' GALLERY'}
        </Typography>
        <Typography variant="h3" sx={{ letterSpacing: '0.1em' }}>
          Live the{' '}
          <span className="responsive-break">
            <br />
          </span>
          Platmosphere{' '}
        </Typography>
      </GalleryHeroStyled>
      <GalleryGrid gallery={galleries.gallery2026 as GalleryImage[]} />
      <Footer />
    </div>
  );
}
