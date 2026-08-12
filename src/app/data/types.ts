export type Lang = 'en' | 'es';

export type Localized = readonly [en: string, es: string];

export interface Song {
  id: number;
  albumId: number;
  name: Localized;
  image: string;
  duration: Localized;
  description: Localized;
}

export interface Album {
  id: number;
  image: string;
  title: Localized;
  subtitle?: Localized;
}

export interface Playlist {
  id: number;
  image: string;
  title: Localized;
  subtitle: Localized;
  spotifyId: string;
}

export interface ContactLink {
  id: string;
  href: string;
  name: Localized;
}
