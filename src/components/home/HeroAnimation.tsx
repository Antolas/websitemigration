'use client';

import dynamic from 'next/dynamic';
import animationData from '@/animations/hero-sphere.json';
import { withBase } from '@/lib/base-path';

// Lottie resolves its images from `assets[].u`, so prefix them for sub-path deployments.
const animation = { ...animationData, assets: animationData.assets.map((a) => ('u' in a ? { ...a, u: withBase(a.u) } : a)) };

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

/** Floating sphere moving across the home hero. */
export default function HeroAnimation() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Lottie animationData={animation} loop autoplay />
    </div>
  );
}
