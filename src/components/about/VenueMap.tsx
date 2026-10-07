'use client';

import dynamic from 'next/dynamic';

/** Google Maps embed, rendered client-side only (as on the original site). */
const VenueMap = dynamic(
  () =>
    Promise.resolve(function VenueMapFrame({ src }: { src: string }) {
      return (
        <iframe
          src={src}
          style={{ width: '100%', height: '100%', minHeight: '200px', borderRadius: '8px', border: 'none' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      );
    }),
  { ssr: false },
);

export default VenueMap;
