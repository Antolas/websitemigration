#!/usr/bin/env node
/**
 * Sanity checks for /content: run with `npm run validate:content` (also runs in CI).
 * - every referenced speaker / track exists
 * - slugs are unique and URL-safe
 * - every image path under /public exists
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const read = (p) => JSON.parse(fs.readFileSync(path.join(root, 'content', p), 'utf8'));
const errors = [];
const fail = (msg) => errors.push(msg);

const speakers = read('speakers.json');
const talks = read('talks.json');
const tracks = read('tracks.json');
const contentHub = read('content-hub.json');

const speakerIds = new Set(speakers.map((s) => s.id));
const trackIds = new Set(tracks.map((t) => t.id));

const checkUnique = (items, key, label) => {
  const seen = new Set();
  for (const it of items) {
    if (seen.has(it[key])) fail(`${label}: duplicate ${key} "${it[key]}"`);
    seen.add(it[key]);
  }
};
checkUnique(speakers, 'id', 'speakers.json');
checkUnique(talks, 'readablePathId', 'talks.json');
checkUnique(contentHub, 'readablePathId', 'content-hub.json');

for (const t of talks) {
  if (!/^[A-Za-z0-9._-]+$/.test(t.readablePathId)) fail(`talks.json: invalid slug "${t.readablePathId}"`);
  if (t.trackId && !trackIds.has(t.trackId)) fail(`talks.json: "${t.readablePathId}" references unknown track ${t.trackId}`);
  for (const r of t.speakers || [])
    if (!speakerIds.has(r.speakerId)) fail(`talks.json: "${t.readablePathId}" references unknown speaker ${r.speakerId}`);
}
for (const c of contentHub) {
  if (!/^[A-Za-z0-9._-]+$/.test(c.readablePathId)) fail(`content-hub.json: invalid slug "${c.readablePathId}"`);
  if (c.track && !trackIds.has(c.track.value)) fail(`content-hub.json: "${c.readablePathId}" references unknown track ${c.track.value}`);
  for (const r of c.speakers || [])
    if (!speakerIds.has(r.speakerId)) fail(`content-hub.json: "${c.readablePathId}" references unknown speaker ${r.speakerId}`);
}
for (const page of ['pages/home.json', 'pages/speakers.json']) {
  const data = read(page);
  const ids = data.speakerIds || data.speakers?.featuredSpeakerIds || [];
  for (const id of ids) if (!speakerIds.has(id)) fail(`${page}: unknown speaker ${id}`);
}

// Every "/something.ext" string that looks like a public asset must exist.
const assetRe = /^\/(?:media|assets|images|icons|pdf|animation)\/.+\.[a-z0-9]+$|^\/[A-Za-z0-9_-]+\.(?:png|jpe?g|svg|webp|gif|pdf)$/i;
const walk = (value, where) => {
  if (typeof value === 'string') {
    if (assetRe.test(value) && !fs.existsSync(path.join(root, 'public', value))) fail(`${where}: missing file public${value}`);
  } else if (Array.isArray(value)) value.forEach((v) => walk(v, where));
  else if (value && typeof value === 'object') Object.values(value).forEach((v) => walk(v, where));
};
const listJson = (dir) =>
  fs
    .readdirSync(path.join(root, 'content', dir), { withFileTypes: true })
    .flatMap((d) => (d.isDirectory() ? listJson(path.join(dir, d.name)) : d.name.endsWith('.json') ? [path.join(dir, d.name)] : []));
for (const file of listJson('.')) walk(read(file), `content/${file}`);

if (errors.length) {
  console.error(`✖ ${errors.length} content problem(s):\n` + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}
console.log(`✔ content OK (${speakers.length} speakers, ${talks.length} talks, ${contentHub.length} content hub items)`);
