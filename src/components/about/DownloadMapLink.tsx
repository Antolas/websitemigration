'use client';

import Typography from '@mui/material/Typography';
import LinkButton from '@/components/buttons/LinkButton';

/** Downloads the venue map PDF instead of opening it. */
export default function DownloadMapLink({ mapURL = '' }: { mapURL?: string }) {
  const download = () => {
    fetch(mapURL).then((res) => {
      if (!res.ok) return;
      return res.blob().then((blob) => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.setAttribute('download', mapURL.split('/').pop() || 'map.pdf');
        a.click();
      });
    });
  };
  return (
    <LinkButton onClick={download} icon="download.svg" darkMode={false}>
      <Typography variant="bodySAlt">Download the Venue Map</Typography>
    </LinkButton>
  );
}
