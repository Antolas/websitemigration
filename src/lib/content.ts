/**
 * Typed access to the JSON content in /content.
 * Order of entries in the JSON files is meaningful: it is the order used on the site.
 */
import contentHubJson from '@content/content-hub.json';
import speakersJson from '@content/speakers.json';
import talksJson from '@content/talks.json';
import tracksJson from '@content/tracks.json';

export interface Speaker {
  id: string;
  firstName: string;
  lastName: string;
  role?: string;
  company?: string;
  /** Lower numbers are shown first in speaker grids. */
  priority?: number;
  /** Path of the portrait in /public (e.g. /media/<file>.png). */
  photo?: string | null;
  linkedinUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  biography?: string;
}

export interface SpeakerRef {
  speakerId: string;
  position: number;
}

export interface Track {
  id: string;
  title: string;
  textColor: string;
  backgroundColor: string;
}

export interface Talk {
  id: string;
  /** URL slug: /talks/<readablePathId> */
  readablePathId: string;
  title: string;
  time?: string;
  room?: string;
  trackId?: string;
  format?: string;
  level?: string;
  language?: string;
  speakers?: SpeakerRef[];
  abstract?: string;
}

export interface Option {
  label: string;
  value: string;
}

export interface ContentHubItem {
  id: string;
  /** URL slug: /content-hub/<readablePathId> */
  readablePathId: string;
  title: string;
  subtitle?: string;
  edition?: Option;
  track?: Option;
  format?: Option[];
  topics?: Option[];
  industry?: Option[];
  photo?: string | null;
  /** YouTube video id */
  videoURL?: string;
  slideURL?: string;
  speakers?: SpeakerRef[];
  description?: string;
}

export const speakers = speakersJson as Speaker[];
export const talks = talksJson as Talk[];
export const tracks = tracksJson as Track[];
export const contentHub = contentHubJson as ContentHubItem[];

const speakerById = new Map(speakers.map((s) => [s.id, s]));

export const getSpeaker = (id: string) => speakerById.get(id);
export const getTrack = (id?: string) => tracks.find((t) => t.id === id);
export const getTalk = (slug: string) => talks.find((t) => t.readablePathId === slug);
export const getContentHubItem = (slug: string) => contentHub.find((c) => c.readablePathId === slug);

/** Speakers referenced by a talk/content item, sorted by their `position`. */
export function resolveSpeakers(refs: SpeakerRef[] = []): Speaker[] {
  return [...refs]
    .sort((a, b) => a.position - b.position)
    .map((r) => getSpeaker(r.speakerId))
    .filter((s): s is Speaker => !!s);
}

export interface TalkLink {
  title: string;
  href: string;
  /** Open in a new tab (used by the archive editions, which link to recordings). */
  external?: boolean;
}

/** "Track : Talk title" links shown in the speaker drawer. */
export function getSpeakerTalkLinks(speakerId: string): TalkLink[] {
  return talks
    .filter((t) => t.speakers?.some((s) => s.speakerId === speakerId))
    .map((t) => ({ title: `${getTrack(t.trackId)?.title || ''} : ${t.title || ''}`, href: `/talks/${t.readablePathId}` }));
}
