export interface BeautyService {
  id: string;
  title: string;
  category: 'hair' | 'bridal' | 'facial' | 'skin' | 'nails' | 'spa';
  description: string;
  iconName: string;
  image: string;
  priceRange: string;
  duration: string;
  items: string[];
  popular?: boolean;
}

export interface BeautyPackage {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  popular?: boolean;
  tagline: string;
  features: string[];
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  service: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface BeautyExpert {
  id: string;
  name: string;
  title: string;
  experience: string;
  specialization: string;
  bio: string;
  image: string;
  rating: number;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Hair' | 'Skin' | 'Makeup' | 'Nails';
  beforeImage: string;
  afterImage: string;
  description: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Bridal' | 'Hair' | 'Skin' | 'Makeup' | 'Nails';
  image: string;
  likes: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Bridal' | 'Packages' | 'Services';
}

export interface AppointmentData {
  id?: string;
  name: string;
  mobile: string;
  email: string;
  service: string;
  package?: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  createdAt?: string;
}

export interface BeautyConsultationResponse {
  recommendation: string;
  suggestedServices: string[];
  suggestedPackage?: string;
  homeCareTips: string[];
}
