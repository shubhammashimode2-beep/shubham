/**
 * AB Health and Fitness
 * Shared TypeScript Types & Interfaces
 */

export interface GymStat {
  value: number;
  suffix: string;
  label: string;
  id: string;
}

export interface GymService {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  iconName: string; // Used to lookup Lucide icons
}

export interface WhyFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatarUrl: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: "all" | "interior" | "weights" | "cardio" | "group";
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  glowColor?: string;
}

export interface ContactFormMessage {
  fullName: string;
  phoneNumber: string;
  email: string;
  selectedPlan: string;
  message: string;
}
