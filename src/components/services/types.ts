export type ServiceTabId =
  | 'marketing'
  | 'creative'
  | 'digital'
  | 'logistics'
  | 'facility'
  | 'manpower'
  | 'financial';

export type ServiceMediaType = 'image' | 'video' | 'placeholder';

export interface LocalizedText {
  en: string;
  ar: string;
}

export interface ServiceMediaAsset {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt: LocalizedText;
}

export interface ServiceItemData {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  mediaType: ServiceMediaType;
  media?: string;
  poster?: string;
  gallery?: ServiceMediaAsset[];
}

export interface ServiceGroupData {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  columns?: 1 | 2;
  items: ServiceItemData[];
}

export interface ServiceCategoryData {
  id: ServiceTabId;
  label: LocalizedText;
  eyebrow: LocalizedText;
  intro: LocalizedText;
  layout: 'split' | 'wide' | 'compact' | 'balanced';
  groups: ServiceGroupData[];
}
