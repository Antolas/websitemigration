'use client';

import { styled } from '@mui/material/styles';
import Image from '@/components/common/Image';

export const LogoCardStyled = styled('div')(({ theme }) => ({
  background: '#FFFFFF',
  width: '176px',
  height: '52px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': { backgroundColor: theme.palette.primary['50'], cursor: 'pointer' },
}));

export interface Logo {
  name: string;
  url: string;
  logo: string;
}

/** White tile with a partner logo linking to the partner website. */
export default function LogoCard({ name, url, logo }: Logo) {
  return (
    <LogoCardStyled>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Image src={logo} alt={name} style={{ width: 'auto', height: '44px', padding: '8px' }} sizes="100vw" height={0} width={0} />
      </a>
    </LogoCardStyled>
  );
}
