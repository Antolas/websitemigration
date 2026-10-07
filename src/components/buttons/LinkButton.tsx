'use client';

import Button, { type ButtonProps } from '@mui/material/Button';
import Icon from '@/components/common/Icon';
import { useEditionTheme } from '@/theme/useEditionTheme';

interface LinkButtonProps extends Omit<ButtonProps, 'color'> {
  /** Icon file name in /public/icons. */
  icon?: string;
  iconAtTheStart?: boolean;
  darkMode?: boolean;
  /** Kept for parity with the original API: the icon itself is always 16×16. */
  height?: number;
  width?: number;
}

/** Underlined text button ("Read more →", "Become a Sponsor ↗"). */
export default function LinkButton({ icon, iconAtTheStart, darkMode, children, height: _h, width: _w, ...props }: LinkButtonProps) {
  const theme = useEditionTheme();
  return (
    <Button
      {...props}
      variant="contained"
      sx={{
        backgroundColor: 'transparent',
        color: darkMode ? theme.palette.primary[200] : theme.palette.primary[700],
        border: 'none',
        boxShadow: 'none',
        textDecoration: 'underline',
        padding: '0px !important',
        '&:hover': {
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          color: darkMode ? theme.palette.primary[300] : theme.palette.primary[900],
        },
      }}
    >
      {icon && iconAtTheStart && <Icon name={icon} />}
      <div style={{ marginRight: iconAtTheStart ? '0px' : '8px', marginLeft: iconAtTheStart ? '8px' : '0px' }}>
        {children}
      </div>
      {icon && !iconAtTheStart && <Icon name={icon} />}
    </Button>
  );
}
