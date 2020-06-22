export interface Song {
  id: number;
  name: string[];
  duration: string[];
  image: string;
  album: number;
  description: string[];
}

export interface Playlist {
  id: number;
  image: string;
  title: string[];
  subtitle: string[];
  embedded: string;
}

export interface Album {
  id: number;
  image: string;
  route: string;
  title: string[];
  subtitle: string[];
}
