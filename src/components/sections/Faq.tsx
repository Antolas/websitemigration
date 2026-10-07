'use client';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Icon from '@/components/common/Icon';
import { theme } from '@/theme/theme';

const FaqStyled = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary[900],
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  '.faq-content-wrapper': {
    padding: '80px 140px',
    maxWidth: '1170px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '16px',
    [theme.breakpoints.down('md')]: { display: 'flex', flexDirection: 'column', padding: '80px 30px', alignItems: 'center' },
  },
  '.faq-left': {
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.primary[50],
    padding: '16px',
    borderRadius: '8px',
    [theme.breakpoints.down('md')]: { alignSelf: 'flex-start' },
  },
  '.faq-right': { backgroundColor: theme.palette.primary[900], display: 'flex', flexDirection: 'column', gap: '16px' },
  '.faq-item': {
    backgroundColor: theme.palette.primary[900],
    borderBottom: `2px solid ${theme.palette.primary[300]}`,
    borderRadius: 0,
    overflow: 'hidden',
  },
  '.faq-title': {
    padding: '12px 16px',
    cursor: 'pointer',
    backgroundColor: theme.palette.primary[900],
    color: theme.palette.secondary.contrastText,
    fontWeight: 'bold',
  },
  '.faq-content': {
    maxHeight: 0,
    opacity: 0,
    overflow: 'hidden',
    transition: 'max-height 0.3s ease, opacity 0.3s ease',
    backgroundColor: theme.palette.primary[900],
    padding: '16px 16px',
  },
  '.faq-content.open': { maxHeight: '200px', opacity: 1, padding: '12px 16px' },
}));

export interface FaqItem {
  title: string;
  description: string;
  order?: number;
}

const byOrder = (items: FaqItem[]) =>
  [...items].sort((a, b) => {
    const x = Number(a.order);
    const y = Number(b.order);
    const hx = !isNaN(x);
    const hy = !isNaN(y);
    return hx || hy ? (hx ? (hy ? x - y : -1) : 1) : 0;
  });

/** Accordion of frequently asked questions (anchor: #faq). */
export default function Faq({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen((cur) => (cur === i ? null : i));
  const height = (i: number) => {
    const el = document.getElementById(`faq-content-${i}`);
    return el ? `${el.scrollHeight}px` : '0px';
  };

  return (
    <FaqStyled id="faq" style={{ scrollMarginTop: 'var(--navbar-height, 0px)' }}>
      <div className="faq-content-wrapper">
        <div className="faq-left">
          <Typography variant="h3">
            Frequently
            <br />
            Asked
            <br />
            Questions
          </Typography>
        </div>
        <div className="faq-right">
          {faqs &&
            byOrder(faqs).map((faq, i) => (
              <div className="faq-item" key={i}>
                <div
                  className="faq-title"
                  onClick={() => toggle(i)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white' }}
                >
                  <Typography variant="bodyLSemibold">{faq.title}</Typography>
                  {open === i ? <Icon name="arrow-up.svg" /> : <Icon name="arrow-down.svg" />}
                </div>
                <div
                  id={`faq-content-${i}`}
                  className="faq-content"
                  style={{
                    maxHeight: open === i ? height(i) : '0px',
                    opacity: open === i ? 1 : 0,
                    transition: 'max-height 0.3s ease, opacity 0.3s ease',
                  }}
                >
                  <Typography variant="bodyXS" sx={{ color: theme.palette.primary[50] }}>
                    {faq.description}
                  </Typography>
                </div>
              </div>
            ))}
        </div>
      </div>
    </FaqStyled>
  );
}
