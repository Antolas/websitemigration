'use client';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Icon from '@/components/common/Icon';
import { theme } from '@/theme/theme';

export interface GalleryImage {
  orientation: 'horizontal' | 'vertical' | string;
  /** Path in /public, e.g. /media/<file>.webp */
  image: string;
  /** File name used when downloading. */
  name: string;
}

const GalleryStyled = styled('div')(({ theme }) => ({
  background:
    "url('/PatternHexagons.png') center center / 100% no-repeat,\n      linear-gradient(123deg, #003140 19.13%, #001015 105.03%)",
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  padding: '40px',
  justifyItems: 'center',
  '& .infinite-scroll-component__outerdiv': { [theme.breakpoints.down('sm')]: { width: '100%' } },
  '.gallery-container': {
    maxWidth: '1200px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(300px, 1fr))',
    gap: '0px',
    width: '100%',
    [theme.breakpoints.between('sm', 'md')]: { gridTemplateColumns: 'repeat(2, minmax(300px, 1fr))' },
    [theme.breakpoints.down('sm')]: { gridTemplateColumns: 'repeat(1, minmax(300px, 1fr))' },
  },
  '.galleryItem': {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': { background: 'rgba(234,254,243, 0.14)' },
  },
  '.innerImageWrapper': {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: 'calc(100% - 10px)',
    height: 'calc(100% - 10px)',
    overflow: 'hidden',
    borderRadius: '8px',
  },
  '.vertical': { gridRow: 'span 2', height: '420px' },
  '.horizontal': { height: '210px' },
}));

const ModalContentStyled = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette.primary[950],
  borderRadius: '8px',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  [theme.breakpoints.up('sm')]: { width: '800px', height: '600px', borderRadius: '10px' },
  '.close-modal': {
    display: 'flex',
    alignSelf: 'flex-end',
    top: '20px',
    right: '20px',
    cursor: 'pointer',
    background: 'transparent',
    border: `2px solid ${theme.palette.primary[200]}`,
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '20px',
    transition: 'border-color 0.3s ease',
    margin: '60px 20px 0px 0px',
    '&:hover': { backgroundColor: 'rgba(234, 254, 243, 0.24)', boxShadow: 'none', cursor: 'pointer' },
    [theme.breakpoints.up('sm')]: {
      top: '20px',
      right: '30px',
      width: '56px',
      height: '56px',
      fontSize: '32px',
      marginRight: '-200px',
      marginTop: '-20px',
    },
  },
  '.image-wrapper': {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '8px',
    [theme.breakpoints.up('sm')]: { padding: '16px' },
  },
  '.controller-wrapper': {
    position: 'absolute',
    bottom: '20px',
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '55px',
    [theme.breakpoints.up('sm')]: { padding: '8px' },
  },
  '.nav-button': {
    cursor: 'pointer',
    background: 'transparent',
    border: `2px solid ${theme.palette.primary[200]}`,
    width: '45px',
    height: '45px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '20px',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box',
    '&:hover': { backgroundColor: 'rgba(234, 254, 243, 0.24)', boxShadow: 'none', cursor: 'pointer' },
    [theme.breakpoints.up('sm')]: { width: '56px', height: '56px', fontSize: '32px' },
  },
  '.download-button': {
    display: 'none',
    gap: '8px',
    alignItems: 'center',
    cursor: 'pointer',
    zIndex: 1e3,
    '&:hover': { boxShadow: 'none', cursor: 'pointer' },
    [theme.breakpoints.up('sm')]: { display: 'flex' },
  },
  '.download-button-mobile': {
    display: 'flex',
    cursor: 'pointer',
    background: 'transparent',
    border: `2px solid ${theme.palette.primary[200]}`,
    width: '41px',
    height: '41px',
    borderRadius: '8px',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'border-color 0.3s ease',
    '&:hover': { backgroundColor: 'rgba(234, 254, 243, 0.24)', boxShadow: 'none', cursor: 'pointer' },
    [theme.breakpoints.up('sm')]: { display: 'none' },
  },
}));

interface LightboxProps {
  open: boolean;
  closeModal: () => void;
  images: GalleryImage[];
  currentIndex: number;
  prevImage: () => void;
  nextImage: () => void;
  handleFileDownload: () => void;
}

function Lightbox({ open, closeModal, images, currentIndex, prevImage, nextImage, handleFileDownload }: LightboxProps) {
  const current = images[currentIndex];
  return (
    <Modal open={open} onClose={closeModal} slotProps={{ backdrop: { sx: { backgroundColor: 'rgba(11, 7, 26, 0.9)' } } }}>
      <ModalContentStyled>
        <Box className="close-modal" onClick={closeModal}>
          <Icon name="x-menu.svg" />
        </Box>
        <div className="image-wrapper">
          <img
            src={current.image}
            alt={`Image ${currentIndex + 1}`}
            height="450px"
            style={{
              objectFit: 'contain',
              borderRadius: '4px',
              width: current?.orientation === 'horizontal' ? '100%' : 'auto',
              height: current?.orientation === 'horizontal' ? '400px' : 'revert-layer',
              maxHeight: '100%',
            }}
          />
        </div>
        <div className="controller-wrapper">
          <Box className="nav-button" onClick={prevImage}>
            <Icon name="caret-left.svg" />
          </Box>
          <Box className="download-button" onClick={handleFileDownload}>
            <Typography variant="bodySAlt" sx={{ color: theme.palette.primary[200], letterSpacing: '0.1em' }}>
              Download
            </Typography>
            <div style={{ color: theme.palette.primary[200] }}>
              <Icon name="download.svg" />
            </div>
          </Box>
          <Box className="download-button-mobile" style={{ color: 'white' }} onClick={handleFileDownload}>
            <Icon name="download.svg" />
          </Box>
          <Box className="nav-button" onClick={nextImage}>
            <Icon name="caret-right.svg" />
          </Box>
        </div>
      </ModalContentStyled>
    </Modal>
  );
}

/** Masonry-like photo grid with infinite scroll (20 photos, then 12 at a time) and a lightbox. */
export default function GalleryGrid({ gallery }: { gallery: GalleryImage[] }) {
  const [visible, setVisible] = useState(gallery.length > 20 ? gallery.slice(0, 20) : gallery);
  const [open, setOpen] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(0);

  const loadMore = () => {
    if (gallery.length >= visible.length + 12) setVisible(gallery.slice(0, visible.length + 12));
    else {
      if (gallery.length !== visible.length) setVisible(gallery);
      setHasMore(false);
    }
  };

  const download = () => {
    fetch(gallery[index].image).then((res) => {
      if (!res.ok) return;
      return res.blob().then((blob) => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.setAttribute('download', gallery[index].name);
        a.click();
      });
    });
  };

  return (
    <>
      <GalleryStyled>
        <InfiniteScroll dataLength={visible.length ?? 0} next={loadMore} hasMore={hasMore} loader={<></>} className="gallery-container">
          {visible.map((item, i) => (
            <div
              className={`galleryItem ${item.orientation === 'vertical' ? 'vertical' : 'horizontal'}`}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              key={i}
            >
              <div className="innerImageWrapper">
                <img src={item.image} alt={`Image ${i + 1}`} width="300px" className="galleryImage" />
              </div>
            </div>
          ))}
        </InfiniteScroll>
      </GalleryStyled>
      {open && (
        <div>
          <Lightbox
            open={open}
            closeModal={() => setOpen(false)}
            images={gallery}
            currentIndex={index}
            prevImage={() => setIndex((i) => (i - 1 + gallery.length) % gallery.length)}
            nextImage={() => setIndex((i) => (i + 1) % gallery.length)}
            handleFileDownload={download}
          />
        </div>
      )}
    </>
  );
}
