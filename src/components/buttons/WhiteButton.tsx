'use client';

import Button, { type ButtonProps } from '@mui/material/Button';
import { useEditionTheme } from '@/theme/useEditionTheme';

interface WhiteButtonProps extends ButtonProps {
  fitAvailable?: boolean;
}

/** White call-to-action used on dark/gradient backgrounds. */
export default function WhiteButton({ fitAvailable, children, ...props }: WhiteButtonProps) {
  const theme = useEditionTheme();
  return (
    <Button
      {...props}
      variant="contained"
      sx={{
        backgroundColor: '#FFFFFF',
        color: theme.palette.primary[800],
        border: 'none',
        boxShadow: 'none',
        width: fitAvailable ? '100%' : 'auto',
        '&:hover': { backgroundColor: theme.palette.primary[50], border: 'none', boxShadow: 'none' },
      }}
    >
      {children}
    </Button>
  );
}
