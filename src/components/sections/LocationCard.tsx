'use client';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const LocationCardStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '580px',
  height: '110px',
  top: '350px',
  left: '740px',
  padding: '28px 40px',
  gap: '4px',
  borderRadius: '8px',
  background: '#FFFFFF66',
  opacity: 1,
  backdropFilter: 'blur(80px)',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: { width: '90%', alignSelf: 'center', fontSize: '16px', gap: '12px' },
  '.title-content': { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingBottom: '10px' },
  '.location-content': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: { flexDirection: 'column', alignItems: 'flex-end', gap: '8px' },
  },
}));

/** Frosted "WHEN & WHERE" card. */
export default function LocationCard({ date, city, venue }: { date: string; city: string; venue: string }) {
  return (
    <LocationCardStyled>
      <div className="title-content">
        <Typography variant="h2" sx={{ color: '#00202B', letterSpacing: '0.1em' }}>
          WHEN & WHERE
        </Typography>
      </div>
      <div className="location-content">
        <Typography variant="bodyS">
          <b>{date}</b>
        </Typography>
        <Typography variant="bodyS">
          {'·'}
          {` ${city}`}
          {', '}
          {venue}
        </Typography>
      </div>
    </LocationCardStyled>
  );
}
