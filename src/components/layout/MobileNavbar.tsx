'use client';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { Fragment, useState, type KeyboardEvent, type MouseEvent } from 'react';
import IconButtonPrimary from '@/components/buttons/IconButtonPrimary';
import WhiteButton from '@/components/buttons/WhiteButton';
import Icon from '@/components/common/Icon';
import { getNavButton, type NavButton } from '@/lib/site';
import { useEditionTheme } from '@/theme/useEditionTheme';
import { withBase } from '@/lib/base-path';

const Drawer = styled(SwipeableDrawer)(({ theme }) => ({
  zIndex: 1400,
  '& .MuiPaper-root': {
    background: theme.palette.primary['900'],
    color: '#FFFFFF',
    [theme.breakpoints.down('sm')]: { width: '100%' },
  },
  '& .MuiBox-root': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  '& .MuiList-root': { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  '& .MuiListItemButton-root': { textAlign: 'center', padding: '32px 4px' },
  '& .MuiListItemButton-root.past-edition-suboption': { padding: '16px !important' },
  '& .MuiDivider-root': { background: theme.palette.primary['700'], width: '100%' },
  '.mia-platform-logo': {
    display: 'flex',
    gap: '16px 8px',
    color: theme.palette.primary['200'],
    alignItems: 'end',
    justifyContent: 'center',
    padding: '8px',
  },
  '.close-button-container': { display: 'flex', justifyContent: 'end', padding: '16px', margin: '16px' },
  '.close-button-border': {
    border: `2px solid ${theme.palette.primary['200']}`,
    width: 'min-content',
    borderRadius: '10px',
  },
}));

/** Hamburger button + full-height drawer used below the `md` breakpoint. */
export default function MobileNavbar(_props: { callForPapersUrl?: string }) {
  const [open, setOpen] = useState(false);
  const [pastOpen, setPastOpen] = useState(false);
  const router = useRouter();
  const theme = useEditionTheme();
  const items = ['navbar-1', 'navbar-2', 'navbar-3'].map((id) => getNavButton(id)).filter(Boolean) as NavButton[];
  const cta = getNavButton('navbar-right')!;

  const toggle = (value: boolean) => (event?: KeyboardEvent | MouseEvent | object) => {
    const e = event as KeyboardEvent | undefined;
    if (e && e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) return;
    setOpen(value);
  };

  const entryText = (text: string) => <Typography variant="bodyXLMedium">{text}</Typography>;

  const pastEditionEntry = (path: string, label: string) => (
    <ListItem disablePadding sx={{ width: '100%' }} key={path}>
      <ListItemButton
        className="past-edition-suboption"
        sx={{ padding: '16px !important', width: '100%' }}
        onClick={() => router.push(path)}
      >
        <ListItemText
          sx={{ textAlign: 'left' }}
          primary={
            <Typography variant="bodyM" sx={{ color: theme.palette.primary[50], fontWeight: 500 }}>
              {label}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );

  const content = (
    <Box role="presentation" onClick={toggle(false)} onKeyDown={toggle(false)}>
      <div
        className="main-content"
        style={{
          display: 'flex',
          padding: '0 16px 80px 16px',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flex: '1 0 0',
          alignSelf: 'stretch',
        }}
      >
        <div style={{ width: '100%' }}>
          <div className="close-button-container">
            <div className="close-button-border">
              <IconButtonPrimary onClick={toggle(false)} icon={<Icon name="x-menu.svg" />} />
            </div>
          </div>
          <List>
            <ListItem disablePadding key="home">
              <ListItemButton onClick={() => router.push('/')}>
                <ListItemText sx={{ textAlign: 'left' }} primary={entryText('Home')} />
              </ListItemButton>
            </ListItem>
            <Divider />
            {items.map((item) => (
              <Fragment key={item.identifier}>
                {item.type === 'past-editions' ? (
                  <>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={(e) => {
                          e.stopPropagation();
                          setPastOpen(!pastOpen);
                        }}
                      >
                        <ListItemText
                          sx={{ textAlign: 'left' }}
                          primary={
                            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              {entryText(item.text)}
                              <Icon name={pastOpen ? 'arrow-up.svg' : 'arrow-down.svg'} height={16} width={16} />
                            </div>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                    {!pastOpen && <Divider />}
                    <Collapse in={pastOpen} timeout="auto" unmountOnExit sx={{ width: '100%' }}>
                      <div>
                        <List component="div" disablePadding sx={{ width: '100%' }}>
                          {pastEditionEntry('/2025', 'Chapter 2025')}
                          <Divider sx={{ width: '100%' }} />
                          {pastEditionEntry('/2024', 'Chapter 2024')}
                        </List>
                      </div>
                    </Collapse>
                    {pastOpen && <Divider />}
                  </>
                ) : item.type === 'tab' ? (
                  <>
                    <ListItem disablePadding>
                      <ListItemButton onClick={() => window.open(withBase(item.link), '_blank')}>
                        <ListItemText
                          sx={{ textAlign: 'left' }}
                          primary={
                            <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '4px' }}>
                              {entryText(item.text)}
                              <Icon name="arrow-up-right.svg" height={16} width={17} />
                            </div>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </>
                ) : (
                  <>
                    <ListItem disablePadding>
                      <ListItemButton onClick={() => router.push(item.link!)}>
                        <ListItemText sx={{ textAlign: 'left' }} primary={entryText(item.text)} />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </>
                )}
              </Fragment>
            ))}
          </List>
        </div>
        <div className="register-button" style={{ width: '100%' }}>
          <WhiteButton
            onClick={() => (cta.type === 'tab' ? window.open(withBase(cta.link), '_blank') : router.push(cta.link!))}
            endIcon={<Icon name={cta.type === 'navigate' ? 'arrow-right.svg' : 'arrow-up-right.svg'} />}
            style={{ width: '100%' }}
          >
            {cta.text}
          </WhiteButton>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <IconButtonPrimary onClick={toggle(true)} icon={<Icon name="menu.svg" />} />
      <Drawer anchor="right" open={open} onClose={toggle(false)} onOpen={toggle(true)}>
        {content}
      </Drawer>
    </div>
  );
}
