'use client';

import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

/** Counts up from 0 to `targetNumber` in `duration` ms. */
export default function NumberCounter({ targetNumber, duration = 2000 }: { targetNumber: number | string; duration?: number }) {
  const [value, setValue] = useState(0);
  const target = typeof targetNumber === 'number' ? targetNumber : parseInt(String(targetNumber).replace(/\D/g, ''));

  useEffect(() => {
    let frame: number;
    let start = 0;
    const step = (now: number) => {
      if (!start) start = now;
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return (
    <div>
      <Typography variant="bodyXXXL">{value}</Typography>
    </div>
  );
}
