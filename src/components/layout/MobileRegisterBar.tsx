'use client';

import { styled } from '@mui/material/styles';
import { usePathname } from 'next/navigation';
import { getNavButton } from '@/lib/site';
import RegisterButton from './RegisterButton';

const normalize = (url: string) => {
  try {
    return new URL(url).pathname.replace(/\/$/, '') || '/';
  } catch {
    return (url.startsWith('/') ? url : `/${url}`).replace(/\/$/, '') || '/';
  }
};

const Bar = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1e3,
    padding: '32px 16px',
    background: theme.palette.grey[50],
    borderTop: `1px solid ${theme.palette.grey[200]}`,
    boxShadow: '0 -4px 14px 0 rgba(0, 49, 64, 0.25)',
    '& button': { width: '100%' },
  },
}));

/** Sticky bottom call-to-action shown on phones (hidden on the CTA's own page). */
export default function MobileRegisterBar() {
  const pathname = usePathname();
  const link = getNavButton('navbar-right')?.link ?? '/register-now';
  if (((pathname ?? '/').replace(/\/$/, '') || '/') === normalize(link)) return null;
  return (
    <Bar>
      <RegisterButton />
    </Bar>
  );
}
