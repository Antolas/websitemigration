'use client';

import Button, { type ButtonProps } from '@mui/material/Button';
import type { ReactNode } from 'react';
import { useEditionTheme } from '@/theme/useEditionTheme';

interface IconButtonPrimaryProps extends Omit<ButtonProps, 'children'> {
  icon: ReactNode;
  lightMode?: boolean;
}

/** Square button containing a single icon (close, menu, carousel arrows). */
export default function IconButtonPrimary({ icon, lightMode, ...props }: IconButtonPrimaryProps) {
  const theme = useEditionTheme();
  return (
    <Button
      {...props}
      variant="contained"
      sx={{
        backgroundColor: lightMode ? '#FFF' : theme.palette.primary[900],
        padding: '8px 20px !important',
        minWidth: 'auto',
        '&:hover': {
          backgroundColor: lightMode ? theme.palette.primary[50] : theme.palette.primary[700],
          boxShadow: 'none',
        },
        color: lightMode ? theme.palette.primary[900] : '#FFF',
        boxShadow: 'none',
      }}
    >
      {icon}
    </Button>
  );
}
