'use client';

import Button, { type ButtonProps } from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, type MouseEvent } from 'react';
import Icon from '@/components/common/Icon';
import TextHighlighted from '@/components/common/TextHighlighted';
import { getNavButton } from '@/lib/site';
import { theme as baseTheme } from '@/theme/theme';
import { useEditionTheme } from '@/theme/useEditionTheme';

function NavButtonBase({ sx, children, ...props }: ButtonProps) {
  const theme = useEditionTheme();
  return (
    <Button
      {...props}
      variant="contained"
      sx={{
        backgroundColor: 'transparent',
        color: theme.palette.grey['600'],
        border: 'none',
        boxShadow: 'none',
        padding: '8px 20px',
        '&:hover': {
          backgroundColor: theme.palette.primary['50'],
          color: theme.palette.grey['600'],
          border: 'none',
          boxShadow: 'none',
        },
        ...(sx as object),
      }}
    >
      {children}
    </Button>
  );
}

interface NavLinkItemProps {
  route?: string;
  text: string;
  selected: boolean;
  externalRoute?: boolean;
  icon?: string;
}

function NavLinkItem({ route = '', text, selected, externalRoute = false, icon }: NavLinkItemProps) {
  const router = useRouter();

  useEffect(() => {
    // The original site forces a full reload on browser back/forward navigation.
    const reload = () => window.location.reload();
    window.addEventListener('popstate', reload);
    return () => window.removeEventListener('popstate', reload);
  }, []);

  const navigate = () => {
    if (route === '/agenda') sessionStorage.setItem('refreshAgenda', 'true');
    router.push(route);
  };

  return (
    <NavButtonBase onClick={() => (externalRoute ? window.open(route, '_blank') : navigate())}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: baseTheme.palette.grey[900] }}>
        <TextHighlighted variant={selected ? 'bodyStickyNavBarSelected' : 'bodyStickyNavBar'} disableHighlight={!selected}>
          {text}
        </TextHighlighted>
        {icon && <Icon name={icon} height={16} width={17} />}
      </div>
    </NavButtonBase>
  );
}

function PastEditionsMenu({ selected, text = 'Past Editions' }: { selected: boolean; text?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useEditionTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = !!anchorEl;
  const close = () => setAnchorEl(null);
  const go = (path: string) => {
    router.push(path);
    close();
  };

  const item = (path: string, label: string) => (
    <MenuItem onClick={() => go(path)} sx={{ padding: '12px 16px', '&:hover': { backgroundColor: '#F5F5F5' } }}>
      <Typography
        variant={pathname === path ? 'bodyXSSemibold' : 'bodyXS'}
        sx={{ color: pathname === path ? theme.palette.primary[800] : theme.palette.grey[600] }}
      >
        {label}
      </Typography>
    </MenuItem>
  );

  return (
    <>
      <NavButtonBase
        onClick={(e: MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget)}
        sx={{
          backgroundColor: open ? theme.palette.primary[50] : 'transparent',
          boxShadow: 'none',
          '&:hover': { backgroundColor: theme.palette.primary[50], boxShadow: 'none' },
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: theme.palette.grey[900] }}>
          <TextHighlighted
            variant={selected ? 'bodyStickyNavBarSelected' : 'bodyStickyNavBar'}
            disableHighlight={!selected}
            highlightColor={theme.palette.primary[100]}
          >
            {text}
          </TextHighlighted>
          <Icon name={open ? 'arrow-up.svg' : 'arrow-down.svg'} height={16} width={16} />
        </div>
      </NavButtonBase>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={close}
        MenuListProps={{ 'aria-labelledby': 'past-editions-button' }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        sx={{ '& .MuiPaper-root': { marginTop: '8px', minWidth: '180px', borderRadius: '8px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)' } }}
      >
        {item('/2025', 'Chapter 2025')}
        {item('/2024', 'Chapter 2024')}
      </Menu>
    </>
  );
}

/** One of the desktop navbar entries, configured in content/site.json → navigation. */
export default function NavbarButton({ identifier }: { identifier: string; selectedKey?: string }) {
  const pathname = usePathname();
  const button = getNavButton(identifier);
  if (!button) return null;

  const selected = button.type === 'past-editions' ? pathname === '/2024' || pathname === '/2025' : pathname === button.link;

  switch (button.type) {
    case 'navigate':
      return <NavLinkItem route={button.link} selected={selected} text={button.text} />;
    case 'past-editions':
      return <PastEditionsMenu selected={selected} text={button.text} />;
    case 'tab':
      return <NavLinkItem route={button.link} externalRoute selected={selected} text={button.text} icon="arrow-up-right.svg" />;
    default:
      return null;
  }
}
