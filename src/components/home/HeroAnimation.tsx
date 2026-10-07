'use client';

import dynamic from 'next/dynamic';
import animation from '@/animations/hero-sphere.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

/** Floating sphere moving across the home hero. */
export default function HeroAnimation() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Lottie animationData={animation} loop autoplay />
    </div>
  );
}
