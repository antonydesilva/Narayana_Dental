export type PageView = 
  | 'home' 
  | 'about' 
  | 'doctors' 
  | 'services' 
  | 'gallery' 
  | 'reviews' 
  | 'contact' 
  | 'book';

export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  fellowships?: string;
  badge?: string;
  leadershipTag?: string;
  philosophyTitle: string;
  philosophyQuote: string;
  bio: string;
  clinicalFocus: {
    title: string;
    description: string;
    icon: string;
  }[];
  consultationHours: string;
  practiceLocation: string;
  sinceYear: number;
  experienceYears: number;
}

export interface Review {
  id: string;
  author: string;
  avatarInitials: string;
  rating: number;
  treatment: string;
  category: 'all' | 'implants' | 'root-canal' | 'ortho' | 'general';
  quote: string;
  location: string;
  treatmentVerified: boolean;
  date?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: 'all' | 'clinic' | 'treatments' | 'ortho' | 'patient-care' | 'before-after';
  tag: string;
  spaceTag: string;
  imageType: 'reception' | 'operatory' | 'sterilization' | 'aligners' | 'doctor-prakash' | 'doctor-madhura' | 'restorative' | 'smile';
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  doctorInCharge: string;
  duration: string;
  visits: string;
  description: string;
  highlights: string[];
  idealFor: string[];
  iconName: string;
}
