'use client';

import { useEffect, type CSSProperties } from 'react';

const SCRIPT_SRC = '//js-eu1.hsforms.net/forms/embed/v2.js';
const PORTAL_ID = '5308597';

type HubSpotWindow = Window & {
  hbspt?: { forms: { create: (opts: Record<string, string>) => void } };
};

/** Embeds a HubSpot form (EU region) into a <div id={target}>. */
export default function HubSpotForm({ formId, target = 'hs-form', style }: { formId: string; target?: string; style?: CSSProperties }) {
  useEffect(() => {
    const create = () => {
      const w = window as HubSpotWindow;
      w.hbspt?.forms.create({ portalId: PORTAL_ID, formId, target: `#${target}`, region: 'eu1' });
    };
    if (document.querySelector(`script[src='${SCRIPT_SRC}']`)) create();
    else {
      const script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.charset = 'utf-8';
      script.async = true;
      script.onload = create;
      document.body.appendChild(script);
    }
    return () => {
      const el = document.getElementById(target);
      if (el) el.innerHTML = '';
    };
  }, [formId, target]);

  return <div id={target} style={style} />;
}
