'use client';

import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { SpeakersHeroStyled } from '@/components/speakers/SpeakersPageStyled';
import { theme } from '@/theme/theme';

/** Same hero layout as /speakers. Forces a reload when reached from the navbar (Sessionize needs a fresh page). */
export default function AgendaHero() {
  useEffect(() => {
    if (sessionStorage.getItem('refreshAgenda')) {
      sessionStorage.removeItem('refreshAgenda');
      window.location.reload();
    }
  }, []);
  return (
    <SpeakersHeroStyled>
      <div className="hero-container">
        <Typography variant="h1" sx={{ color: theme.palette.grey[600], letterSpacing: '0.1em' }}>
          {' AGENDA 2026'}
        </Typography>
        <Typography variant="h3" sx={{ letterSpacing: '0.1em' }}>
          {'Shaping the Future '}
          <span className="responsive-break">
            <br />
          </span>
          {'of Platforms '}
        </Typography>
      </div>
      <div className="hero-footer" />
    </SpeakersHeroStyled>
  );
}
