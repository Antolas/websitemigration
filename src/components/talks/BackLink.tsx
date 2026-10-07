'use client';

import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import LinkButton from '@/components/buttons/LinkButton';

/** "← ALL SPEAKERS" style back link. */
export default function BackLink({ href, label }: { href: string; label: string }) {
  const router = useRouter();
  return (
    <LinkButton iconAtTheStart icon="arrow-left.svg" onClick={() => router.push(href)}>
      <Typography variant="bodyXSSemibold">{label}</Typography>
    </LinkButton>
  );
}
