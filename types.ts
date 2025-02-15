export interface ArtistMutation {
  name: string;
  photo: string | null;
  info: string | null;
}

export interface AlbumMutation {
  name: string;
  artist: string;
  year: number;
  photo: string | null;
}

export interface TrackMutation {
  name: string;
  album: string;
  duration: string;
}