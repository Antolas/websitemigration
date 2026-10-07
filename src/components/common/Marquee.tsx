'use client';

import FastMarquee, { type MarqueeProps } from 'react-fast-marquee';

/** Infinite horizontal ticker (react-fast-marquee, default speed). */
export default function Marquee(props: MarqueeProps) {
  return <FastMarquee {...props} />;
}
