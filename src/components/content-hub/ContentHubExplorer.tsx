'use client';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Image from '@/components/common/Image';
import { useRouter } from 'next/navigation';
import { useEffect, useState, type Dispatch, type KeyboardEvent, type SetStateAction } from 'react';
import IconButtonPrimary from '@/components/buttons/IconButtonPrimary';
import LinkButton from '@/components/buttons/LinkButton';
import WhiteButton from '@/components/buttons/WhiteButton';
import Icon from '@/components/common/Icon';
import type { ContentHubItem, Option, Track } from '@/lib/content';
import { theme } from '@/theme/theme';

export interface ContentHubFilter {
  name: string;
  options: string[];
}

/* ---------- Filters ---------- */

const FiltersStyled = styled('div')(({ theme }) => ({
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: { width: '100%', padding: '0 12px' },
}));

function FilterChip({ name, selected, toggleSelected }: { name: string; selected: boolean; toggleSelected: () => void }) {
  return (
    <Button
      onClick={toggleSelected}
      sx={{
        color: selected ? theme.palette.grey[900] : theme.palette.grey[50],
        border: `2px solid ${theme.palette.grey[50]}`,
        borderRadius: '8px',
        margin: '4px',
        height: '36px',
        backgroundColor: selected ? theme.palette.grey[50] : 'transparent',
        '&:hover': { backgroundColor: 'rgba(241, 243, 243, 0.3)' },
      }}
    >
      <Stack direction="row" alignItems="center" gap="4px">
        <Typography variant="bodyXSAlt" sx={{ gap: '16px' }}>
          {name.toUpperCase()}
        </Typography>
        {selected && <Icon name="check.svg" />}
      </Stack>
    </Button>
  );
}

interface FiltersProps {
  filters: ContentHubFilter[];
  selectedFilters: string[];
  setSelectedFilters: Dispatch<SetStateAction<string[]>>;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

function Filters({ filters = [], selectedFilters = [], setSelectedFilters, searchQuery, setSearchQuery }: FiltersProps) {
  const toggle = (value: string) => setSelectedFilters((cur) => (cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value]));

  return (
    <FiltersStyled>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <LinkButton
          onClick={() => {
            setSelectedFilters([]);
            setSearchQuery('');
          }}
          darkMode
        >
          <Typography variant="bodySAlt">Clear filters</Typography>
        </LinkButton>
      </div>
      <TextField
        placeholder="Start a search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon name="search.svg" />
            </InputAdornment>
          ),
          endAdornment: searchQuery && (
            <InputAdornment position="end">
              <LinkButton style={{ margin: '0px' }} onClick={() => setSearchQuery('')}>
                <Icon name="x-light.svg" />
              </LinkButton>
            </InputAdornment>
          ),
        }}
        style={{
          backgroundColor: theme.palette.grey[25],
          marginBottom: '16px',
          color: theme.palette.grey[50],
          width: '100%',
          border: 'none',
        }}
        sx={{
          backgroundColor: theme.palette.grey[25],
          marginBottom: '16px',
          borderRadius: '30px',
          border: 'none',
          '& .MuiInputBase-input': { color: theme.palette.grey[600], fontFamily: theme.typography.fontFamily },
          '& .MuiInputBase-root': { borderRadius: '30px', '&:hover': { borderColor: 'none' } },
          '& .MuiOutlinedInput-root': {
            '&:hover': { borderColor: 'none' },
            '&.Mui-focused fieldset': { borderColor: theme.palette.primary[200], borderWidth: '2px', borderRadius: '30px' },
          },
        }}
      />
      {searchQuery && (
        <Typography variant="bodyXS" sx={{ color: theme.palette.grey[50], marginBottom: '16px' }}>
          {'Showing results for: '}
          <strong>{searchQuery}</strong>
        </Typography>
      )}
      {selectedFilters.length > 0 && (
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', marginBottom: '16px', gap: '8px' }}>
          {selectedFilters.map((f) => (
            <FilterChip name={f} selected toggleSelected={() => toggle(f)} key={f} />
          ))}
        </Stack>
      )}
      {filters.map((filter, i) => (
        <Accordion
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            borderTop: `2px solid ${theme.palette.primary[300]}`,
            borderBottom: i === filters.length - 1 ? `2px solid ${theme.palette.primary[300]}` : undefined,
            alignItems: 'center',
            boxShadow: 'none',
          }}
          key={filter.name}
        >
          <AccordionSummary
            expandIcon={
              <div style={{ color: 'white' }}>
                <Icon name="arrow-down.svg" />
              </div>
            }
            sx={{ padding: '16px 12px' }}
          >
            <Typography variant="bodyS" sx={{ gap: '16px' }}>
              {filter.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ boxShadow: 'none' }}>
            {filter.options.map((option) => (
              <FilterChip name={option} selected={selectedFilters.includes(option)} toggleSelected={() => toggle(option)} key={option} />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </FiltersStyled>
  );
}

/* ---------- Mobile filter drawer ---------- */

const FilterDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: theme.palette.primary['900'],
    color: '#FFFFFF',
    [theme.breakpoints.down('sm')]: { width: '100%' },
  },
  '& .MuiBox-root': { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' },
  '& .MuiList-root': { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  '& .MuiListItemButton-root': { textAlign: 'center', padding: '32px' },
  '& .MuiDivider-root': { background: theme.palette.primary['700'], width: '70%' },
  '.register-button': { padding: '16px' },
  '.mia-platform-logo': {
    display: 'flex',
    gap: '16px 8px',
    color: theme.palette.primary['200'],
    alignItems: 'end',
    justifyContent: 'center',
    padding: '8px',
  },
  '.close-button-container': { display: 'flex', justifyContent: 'end', padding: '16px', margin: '16px' },
  '.close-button-border': { border: `2px solid ${theme.palette.primary['200']}`, width: 'min-content', borderRadius: '10px' },
  '.filter-container': { display: 'flex', justifyContent: 'center' },
}));

const MobileFiltersStyled = styled('div')(() => ({ '.filter-button': { width: '100%' } }));

function MobileFilters(props: FiltersProps) {
  const [open, setOpen] = useState(false);
  const toggle = (value: boolean) => (event?: unknown) => {
    const e = event as KeyboardEvent | undefined;
    if (e && e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) return;
    setOpen(value);
  };
  return (
    <MobileFiltersStyled>
      <div className="filter-button">
        <WhiteButton onClick={toggle(true)} fitAvailable endIcon={<Icon name="filter.svg" />}>
          Filter
        </WhiteButton>
      </div>
      <FilterDrawer anchor="right" open={open} onClose={toggle(false)} onOpen={toggle(true)}>
        <Box role="presentation">
          <div className="main-content">
            <div className="close-button-container">
              <div className="close-button-border">
                <IconButtonPrimary onClick={toggle(false)} icon={<Icon name="x-menu.svg" />} />
              </div>
            </div>
            <div className="filter-container">
              <Filters {...props} setSearchQuery={(q) => props.setSearchQuery(q)} />
            </div>
          </div>
        </Box>
      </FilterDrawer>
    </MobileFiltersStyled>
  );
}

/* ---------- Cards grid ---------- */

const ContentCardStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  height: '490px',
  width: '300px',
  '&:hover': { background: 'rgba(234,254,243, 0.14)' },
  [theme.breakpoints.down('md')]: { flexDirection: 'row' },
  [theme.breakpoints.down('sm')]: { width: '100%' },
  '.container': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    height: '100%',
    padding: '12px',
    [theme.breakpoints.down('sm')]: { padding: '0px', width: '100%', '&:hover': { padding: '16px' } },
  },
  '.content-image': {
    width: '276px',
    height: '154px',
    [theme.breakpoints.down('sm')]: { display: 'flex', justifyContent: 'center', height: '100%' },
  },
  '.description': { color: theme.palette.grey[800] },
  '.title': { display: 'flex', flexDirection: 'column', height: '96px', gap: '0px', [theme.breakpoints.down('md')]: { gap: '16px' } },
  '.track-chip': { padding: '0px 8px', borderRadius: '30px', width: 'fit-content', textTransform: 'uppercase' },
  '.content-details': { display: 'flex', flexDirection: 'column', gap: '8px' },
  '.topics': { padding: '32px 0px', display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' },
}));

interface ContentCardProps {
  coverPhoto?: string | null;
  track?: Track;
  title: string;
  description?: string;
  topics?: Option[];
}

function ContentCard({ coverPhoto, track, title, description, topics }: ContentCardProps) {
  return (
    <ContentCardStyled>
      <div className="container">
        <div className="content-image">
          <Image src={coverPhoto || ''} alt="content" sizes="100vw" height={0} width={0} style={{ width: 'auto', height: '100%' }} />
        </div>
        <div className="content-data">
          <div className="content-details">
            <div className="track-chip" style={{ color: track?.textColor, background: track?.backgroundColor }}>
              <Typography variant="bodyXSAlt">{track?.title || ''}</Typography>
            </div>
            <div className="title">
              <Typography variant="bodyS" sx={{ color: 'rgba(255, 255, 255, 1)' }}>
                {title}
              </Typography>
            </div>
            <div className="description">
              <Typography
                variant="bodyXS"
                sx={{
                  color: theme.palette.grey[200],
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '3',
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {description}
              </Typography>
            </div>
          </div>
          <div className="topics">
            {topics?.map((topic, i) => (
              <div key={i} className="track-chip" style={{ color: theme.palette.grey[800], background: theme.palette.grey[100] }}>
                <Typography variant="bodyXSAlt">{topic.label || ''}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentCardStyled>
  );
}

const ContentGridStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderLeft: `1px solid ${theme.palette.primary[300]}`,
  [theme.breakpoints.down('sm')]: { borderLeft: 'none', width: 'auto' },
  '.grid-container': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    width: '100%',
    boxSizing: 'border-box',
    [theme.breakpoints.between('sm', 'md')]: { gridTemplateColumns: 'repeat(2, 1fr)' },
    [theme.breakpoints.down('sm')]: { gridTemplateColumns: 'repeat(1, 1fr)', borderLeft: 'none', width: '100%' },
  },
  '.content-container': {
    maxWidth: '900px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(300px, 1fr))',
    gap: '0px',
    width: '100%',
    [theme.breakpoints.between('sm', 'md')]: { gridTemplateColumns: 'repeat(2, minmax(300px, 1fr))' },
    [theme.breakpoints.down('sm')]: { gridTemplateColumns: 'repeat(1, minmax(300px, 1fr))' },
  },
  '.content-item': {
    position: 'relative',
    overflow: 'hidden',
    width: '300px',
    height: '100%',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.primary[300]}`,
    [theme.breakpoints.down('sm')]: { width: '100%', marginBottom: '90px' },
    '&:nth-last-child(-n + 3)': {
      borderBottom: 'none',
      [theme.breakpoints.down('sm')]: { borderBottom: `1px solid ${theme.palette.primary[300]}` },
    },
    '&:nth-last-child(-n + 2)': {
      borderBottom: 'none',
      [theme.breakpoints.down('sm')]: { borderBottom: `1px solid ${theme.palette.primary[300]}` },
    },
    '&:last-child': { borderBottom: 'none' },
  },
}));

const PAGE_SIZE = 9;

function ContentGrid({ items, tracks }: { items: ContentHubItem[]; tracks: Track[] }) {
  const router = useRouter();
  const [visible, setVisible] = useState(items.slice(0, PAGE_SIZE));
  const [hasMore, setHasMore] = useState(items.length > PAGE_SIZE);

  useEffect(() => {
    setVisible(items.slice(0, PAGE_SIZE));
    setHasMore(items.length > PAGE_SIZE);
  }, [items]);

  return (
    <ContentGridStyled>
      <div className="grid-container">
        {visible.map((item, i) => (
          <div className="content-item" onClick={() => router.push(`/content-hub/${item.readablePathId}`)} key={i}>
            <ContentCard
              coverPhoto={item.photo}
              track={tracks.find((t) => t.id === item.track?.value)}
              title={item.title}
              description={item.description}
              topics={item.topics}
            />
          </div>
        ))}
      </div>
      {hasMore && (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button
            style={{ margin: '32px' }}
            variant="contained"
            onClick={() => {
              setVisible(items);
              setHasMore(false);
            }}
            color="secondary"
          >
            Load more
          </Button>
        </div>
      )}
    </ContentGridStyled>
  );
}

/* ---------- Explorer ---------- */

const ExplorerStyled = styled('div')(({ theme }) => ({
  background: 'linear-gradient(123deg, #003140 19.13%, #001015 105.03%)',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  overflowY: 'auto',
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: { flexDirection: 'column', display: 'flex', alignItems: 'center' },
  '.content-menu-desktop': {
    position: 'sticky',
    top: 0,
    margin: '40px 0px 0px 40px',
    width: '300px',
    boxSizing: 'border-box',
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: { display: 'none' },
  },
  '.content-menu-mobile': {
    position: 'sticky',
    top: 0,
    margin: '40px 0px 0px 0px',
    padding: '0px 16px',
    boxSizing: 'border-box',
    width: '100%',
    flexShrink: 0,
    [theme.breakpoints.up('sm')]: { display: 'none' },
  },
  '.content-container': {
    flex: 1,
    padding: '16px',
    boxSizing: 'border-box',
    display: 'grid',
    maxWidth: '900px',
    [theme.breakpoints.down('sm')]: { paddingTop: '16px', width: '100%' },
  },
}));

function applyFilters(items: ContentHubItem[], selected: string[], query: string) {
  const q = query.toLowerCase();
  let result = items;
  if (q) result = items.filter((item) => JSON.stringify(item).toLowerCase().includes(q));
  if (selected.length === 0) return result;
  return result.filter((item) =>
    selected.some((filter) => {
      const f = filter.toLowerCase();
      return (
        item.track?.label?.toLowerCase().includes(f) ||
        item.topics?.some((t) => t.label?.toLowerCase().includes(f)) ||
        item.industry?.some((t) => t.label?.toLowerCase().includes(f)) ||
        item.edition?.label?.toLowerCase().includes(f) ||
        item.format?.some((t) => t.label?.toLowerCase().includes(f))
      );
    }),
  );
}

/** Searchable, filterable grid of all session recordings. */
export default function ContentHubExplorer({
  contentHub = [],
  tracks = [],
  filters = [],
}: {
  contentHub: ContentHubItem[];
  tracks: Track[];
  filters: ContentHubFilter[];
}) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filtered, setFiltered] = useState(contentHub);

  useEffect(() => {
    setFiltered(applyFilters(contentHub, selectedFilters, searchQuery));
  }, [selectedFilters, contentHub, searchQuery]);

  const filterProps = { filters, selectedFilters, setSelectedFilters, searchQuery, setSearchQuery };
  return (
    <ExplorerStyled id="content-hub">
      <div className="content-menu-desktop">
        <Filters {...filterProps} />
      </div>
      <div className="content-menu-mobile">
        <MobileFilters {...filterProps} />
      </div>
      <div className="content-container">
        <ContentGrid items={filtered} tracks={tracks} />
      </div>
    </ExplorerStyled>
  );
}
