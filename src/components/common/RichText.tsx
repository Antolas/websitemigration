import { Fragment, type ReactNode } from 'react';

/**
 * Minimal inline markup for copy stored in /content JSON:
 *   <b>bold</b>   <hl>highlighted</hl>   <br/>
 * `renderHighlight` decides how <hl> fragments look (defaults to bold).
 */
export default function RichText({ text, renderHighlight }: { text: string; renderHighlight?: (t: string, key: number) => ReactNode }) {
  const parts = text.split(/(<b>[\s\S]*?<\/b>|<hl>[\s\S]*?<\/hl>|<br\s*\/?>)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        if (part.startsWith('<b>')) return <b key={i}>{part.slice(3, -4)}</b>;
        if (part.startsWith('<hl>')) {
          const inner = part.slice(4, -5);
          return renderHighlight ? <Fragment key={i}>{renderHighlight(inner, i)}</Fragment> : <b key={i}>{inner}</b>;
        }
        if (/^<br\s*\/?>$/.test(part)) return <br key={i} />;
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
