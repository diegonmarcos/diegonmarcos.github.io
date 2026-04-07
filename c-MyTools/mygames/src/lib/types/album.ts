// Photo Album Types
// Based on 01-spec.md specifications

export interface Photo {
  id: string;
  url: string;
  thumbnailUrl: string;
  caption?: string;
  location?: string;
  dateTaken: Date;
}

export interface Album {
  id: string;
  title: string;
  coverImage: string;
  imageCount: number;
  date: Date;
  category: 'travel' | 'events' | 'nature' | 'other';
  images: Photo[];
}
