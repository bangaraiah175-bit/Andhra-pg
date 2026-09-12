export type StayTier = 'premium' | 'budget';

export interface RoomType {
  id: string;
  name: string;
  tier: StayTier;
  category: 'single' | 'double' | 'triple';
  title: string;
  sharingCount: number;
  tagline: string;
  description: string;
  startingPriceEstimate?: string;
  sizeSqFt: number;
  hasAC: boolean;
  images: string[];
  features: string[];
  keyAmenities: string[];
  badge?: string;
}

export interface AmenityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  url: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  stayTier?: StayTier;
  roomType: 'single' | 'double' | 'triple' | 'any';
  acPreference: 'ac' | 'non-ac';
  moveInDate: string;
  message: string;
}
