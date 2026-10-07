'use client';

import { styled } from '@mui/material/styles';

export const JoinUsStyled = styled('div')(({ theme }) => ({
  '.join-us-full-width-section': {
    width: '100%',
    background: theme.palette.grey[50],
    display: 'flex',
    justifyContent: 'center',
    padding: '100px 0px',
    [theme.breakpoints.down('md')]: { padding: '0px' },
  },
  '.join-us-inner-container': {
    width: '1176px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: { width: '100%' },
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      padding: '64px 16px',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '64px',
      width: 'auto',
    },
  },
  '.join-us-text-section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    textAlign: 'start',
    width: '576px',
    [theme.breakpoints.down('md')]: { width: '100%', gap: '8px' },
  },
  '.join-us-form': {
    width: '488px',
    height: 'fit-content',
    padding: '32px 28px',
    display: 'flex',
    alignItems: 'flex-start',
    background: theme.palette.grey[25],
    [theme.breakpoints.down('md')]: { width: 'auto', justifyContent: 'center' },
  },
  '.join-us-content-container': {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('md')]: { flexDirection: 'column', justifyContent: 'flex-start', gap: '60px' },
  },
}));
