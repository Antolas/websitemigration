import Script from 'next/script';
import type { ReactNode } from 'react';

const HUBSPOT_PORTAL_ID = '5308597';
const GTM_ID = 'GTM-K44PSP5M';

/** HubSpot (analytics, forms, cookie banner) and Google Tag Manager, as on the original site. */
export default function Analytics({ children }: { children: ReactNode }) {
  const hs = {
    'data-loader': 'hs-scriptloader',
    'data-hsjs-portal': HUBSPOT_PORTAL_ID,
    'data-hsjs-env': 'prod',
    'data-hsjs-hublet': 'na1',
  };
  return (
    <>
      <Script
        src={`https://js.hs-analytics.net/analytics/1731319200000/${HUBSPOT_PORTAL_ID}.js`}
        strategy="afterInteractive"
        id="hs-analytics"
      />
      <Script
        src="https://js.hubspot.com/web-interactives-embed.js"
        strategy="lazyOnload"
        crossOrigin="anonymous"
        id="hubspot-web-interactives-loader"
        {...hs}
      />
      <Script
        src="https://js.hsadspixel.net/fb.js"
        strategy="lazyOnload"
        id={`hs-ads-pixel-${HUBSPOT_PORTAL_ID}`}
        data-ads-portal-id={HUBSPOT_PORTAL_ID}
        data-ads-env="prod"
        {...hs}
      />
      <Script
        src={`https://js.hs-banner.com/v2/${HUBSPOT_PORTAL_ID}/banner.js`}
        strategy="lazyOnload"
        id={`cookieBanner-${HUBSPOT_PORTAL_ID}`}
        data-cookieconsent="ignore"
        data-hs-ignore="true"
        {...hs}
      />
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      {children}
    </>
  );
}
