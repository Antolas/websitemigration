'use client';

import dynamic from 'next/dynamic';

/**
 * lottie-web touches `document` at import time, so the player is only loaded in the browser.
 * The server-rendered placeholder has no height, exactly like the original markup before hydration.
 */
const SphereDivider = dynamic(() => import('./SphereDividerPlayer'), { ssr: false, loading: () => <div /> });

export default SphereDivider;
