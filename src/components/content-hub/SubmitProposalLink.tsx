'use client';

import LinkButton from '@/components/buttons/LinkButton';
import Icon from '@/components/common/Icon';
import { withBase } from '@/lib/base-path';

export default function SubmitProposalLink({ url }: { url: string }) {
  return (
    <LinkButton onClick={() => window.open(withBase(url), '_blank')} endIcon={<Icon name="arrow-up-right.svg" />}>
      Submit your proposal
    </LinkButton>
  );
}
