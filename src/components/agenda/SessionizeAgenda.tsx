'use client';

import { styled } from '@mui/material/styles';
import { useEffect, useRef } from 'react';

const SESSIONIZE_URL = 'https://sessionize.com/api/v2/z6tdnoan/view/GridSmart';

const AgendaStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: '80px 0px',
  padding: '32px 60px',
  backgroundColor: theme.palette.grey[50],
  position: 'sticky',
  zIndex: 1300,
  [theme.breakpoints.down('sm')]: { padding: '60px 8px', position: 'relative', zIndex: 1300 },
}));

/** Embeds the Sessionize grid (the script uses document.write, which is redirected into our container). */
export default function SessionizeAgenda() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    container.innerHTML = '';
    const originalWrite = document.write.bind(document);
    document.write = (html: string) => {
      const tmp = document.createElement('div');
      for (tmp.innerHTML = html; tmp.firstChild; ) container.appendChild(tmp.firstChild);
    };
    const script = document.createElement('script');
    script.src = `${SESSIONIZE_URL}?t=${Date.now()}`;
    script.onload = () => {
      document.write = originalWrite;
      (window as unknown as { sessionize?: { loader?: () => void } }).sessionize?.loader?.();
    };
    script.onerror = () => {
      document.write = originalWrite;
    };
    container.appendChild(script);
    return () => {
      document.write = originalWrite;
    };
  }, []);

  return (
    <AgendaStyled className="agenda-script">
      <div ref={ref} />
    </AgendaStyled>
  );
}
