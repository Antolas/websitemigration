'use client';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import LinkButton from '@/components/buttons/LinkButton';
import SphereDivider from '@/components/common/SphereDivider';
import TextHighlighted from '@/components/common/TextHighlighted';
import { theme } from '@/theme/theme';

const ChapterSectionStyled = styled('div', { shouldForwardProp: (p) => p !== 'noOverlap' })<{ noOverlap?: boolean }>(
  ({ theme, noOverlap }) => ({
    background: theme.palette.grey[50],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: noOverlap ? '0px' : '-150px',
    '.title-container': { display: 'flex', flexDirection: 'column', gap: '8px' },
    '.supertitle-container': { color: theme.palette.grey[600] },
    [theme.breakpoints.down('sm')]: { marginBottom: noOverlap ? '0px' : '-60px' },
    '.container': {
      maxWidth: '1170px',
      gap: '60px',
      padding: '182px 182px 52px 182px',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('md')]: { padding: '64px 36px' },
      [theme.breakpoints.down('sm')]: { padding: '64px 36px 0px 36px' },
    },
    '.description-container': { alignSelf: 'flex-start' },
  }),
);

interface Word {
  word: string;
  highlighted: boolean;
}

/** Splits "text <TextHighlighted>marked</TextHighlighted> text" into words. */
function toWords(paragraph: string): Word[] {
  const words: Word[] = [];
  paragraph.split(/<TextHighlighted>(.*?)<\/TextHighlighted>/g).forEach((part, i) => {
    if (!part) return;
    const highlighted = i % 2 === 1;
    part
      .split(' ')
      .filter((w) => w !== '')
      .forEach((word) => words.push({ word, highlighted }));
  });
  return words;
}

interface ChapterSectionProps {
  eyebrow: string;
  title: string;
  /** Paragraphs; wrap words in <TextHighlighted>…</TextHighlighted> to mark them. */
  paragraphs: string[];
  noOverlap?: boolean;
}

/** "CHAPTER 2026 – Master the Vibe": words light up progressively while scrolling. */
export default function ChapterSection({ eyebrow, title, paragraphs, noOverlap = false }: ChapterSectionProps) {
  const router = useRouter();
  const words = useMemo(() => paragraphs.map(toWords), [paragraphs]);
  const [, setProgress] = useState(0);
  const [visibleWords, setVisibleWords] = useState<number[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(Math.max(0, (vh - rect.top) / (rect.height + vh)), 1) * paragraphs.length * 1.3;
      setProgress(p);
      setVisibleWords(words.map((w, i) => (p > i ? Math.min(Math.floor((p - i) * w.length), w.length) : 0)));
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [words, paragraphs.length]);

  const renderParagraph = (index: number, visible: number) =>
    words[index].map(({ word, highlighted }, i) => {
      const shown = i < visible;
      const style: CSSProperties = {
        color: shown ? (highlighted ? theme.palette.primary[800] : theme.palette.grey[800]) : theme.palette.grey[100],
        padding: highlighted ? '0px 4px' : '0px',
        fontWeight: highlighted ? 900 : undefined,
        transition: 'color 0.7s ease',
      };
      return highlighted ? (
        <Fragment key={i}>
          <TextHighlighted variant="bodyXLBlack" containerStyle={style} disableHighlight={!shown}>
            {word}
          </TextHighlighted>
        </Fragment>
      ) : (
        <span style={style} key={i}>
          {word}{' '}
        </span>
      );
    });

  return (
    <ChapterSectionStyled noOverlap={noOverlap}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Typography variant="h2" sx={{ color: theme.palette.grey[600] }}>
            {eyebrow}
          </Typography>
          <Typography variant="h3" sx={{ color: theme.palette.grey[900] }}>
            {title}
          </Typography>
        </div>
        <div className="description-container" ref={ref}>
          <Typography variant="bodyXLMedium">
            {paragraphs.map((_, i) => (
              <Fragment key={i}>
                {renderParagraph(i, visibleWords[i] || 0)}
                {i < paragraphs.length - 1 && <br />}
              </Fragment>
            ))}
          </Typography>
        </div>
        <LinkButton darkMode={false} onClick={() => router.push('/about')} icon="arrow-right.svg" height={20} width={20}>
          <Typography variant="bodyLBold">Read more</Typography>
        </LinkButton>
      </div>
      <SphereDivider />
    </ChapterSectionStyled>
  );
}
