'use client';

import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import Icon from '@/components/common/Icon';
import { getNavButton } from '@/lib/site';
import { withBase } from '@/lib/base-path';

/** Main navbar call-to-action ("navbar-right" in content/site.json). */
export default function RegisterButton() {
  const router = useRouter();
  const button = getNavButton('navbar-right')!;
  const icon = button.type === 'navigate' ? 'arrow-right.svg' : 'arrow-up-right.svg';
  return (
    <Button
      onClick={() => (button.type === 'tab' ? window.open(withBase(button.link), '_blank') : router.push(button.link!))}
      variant="contained"
      color="primary"
      endIcon={<Icon name={icon} height={16} width={17} />}
    >
      {button.text}
    </Button>
  );
}
