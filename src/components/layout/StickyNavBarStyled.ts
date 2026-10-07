'use client';

import { styled } from '@mui/material/styles';

export const StickyNavBarStyled = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  '.navbar-container': {
    flex: '1 0 0',
    background: theme.palette.grey[25],
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    boxShadow: '0 4px 10px 1px rgba(0, 81, 107, 0.16)',
    maxWidth: '1168px',
  },
  '.platmosphere-logo': {
    width: '281px',
    height: 'auto',
    margin: '-8px',
    [theme.breakpoints.down(450)]: { width: '100%' },
  },
  '.desktop-navbar': {
    display: 'flex',
    height: '46px',
    padding: '0px 20px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '4px',
    [theme.breakpoints.down('md')]: { display: 'none' },
  },
  '.desktop-navbar-button': { [theme.breakpoints.down('md')]: { display: 'none' } },
  '.mobile-navbar': { [theme.breakpoints.up('md')]: { display: 'none' } },
}));
