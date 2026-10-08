'use client';

import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect, useRef, useState } from 'react';
import animationData from '@/animations/sphere-divider.json';
import { withBase } from '@/lib/base-path';

// Lottie resolves its images from `assets[].u`, so prefix them for sub-path deployments.
const animation = { ...animationData, assets: animationData.assets.map((a) => ('u' in a ? { ...a, u: withBase(a.u) } : a)) };

/** Falling-sphere divider animation: replays each time it scrolls into view while scrolling down. */
export default function SphereDivider({ background }: { background?: string }) {
  const playerRef = useRef<Player>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollingDown(y > lastScrollY);
      setLastScrollY(y);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (inView && scrollingDown && playerRef.current) {
      playerRef.current.setSeeker(0);
      playerRef.current.play();
    }
  }, [inView, scrollingDown]);

  useEffect(() => {
    const el = sentinelRef.current;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.5 });
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div>
      <div ref={sentinelRef} />
      <Player
        loop={false}
        src={animation}
        style={{ height: '100%', width: '100%', backgroundColor: background, strokeWidth: 5, stroke: 'rgba(76, 43, 177, 0.00)' }}
        id="animation"
        className="player"
        ref={playerRef}
        keepLastFrame
      />
    </div>
  );
}
