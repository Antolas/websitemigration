'use client';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import NumberCounter from './NumberCounter';

export const NumberReportStyled = styled('div', { shouldForwardProp: (p) => p !== 'darkMode' })<{ darkMode?: boolean }>(
  ({ theme, darkMode }) => ({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'flex-start',
    gap: '10px',
    width: '250px',
    [theme.breakpoints.down('md')]: { width: '150px' },
    '.first-child': { color: darkMode ? '#FFFFFF' : theme.palette.primary['700'] },
    '.second-child': { color: darkMode ? theme.palette.primary['200'] : theme.palette.grey['600'] },
  }),
);

export interface NumberItem {
  value: number;
  suffix?: string;
  label: string;
}

/** Animated "450+ Attendees" style figure. */
export default function NumberReport({ value, suffix, label, darkMode }: NumberItem & { darkMode?: boolean }) {
  return (
    <NumberReportStyled darkMode={darkMode}>
      <div className="first-child">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
          <NumberCounter targetNumber={value} duration={2000} />
          {suffix && (
            <Typography variant="bodyXXXL" component="span">
              {suffix}
            </Typography>
          )}
        </div>
      </div>
      <div className="second-child">
        <Typography variant="bodyMBold">{label}</Typography>
      </div>
    </NumberReportStyled>
  );
}
