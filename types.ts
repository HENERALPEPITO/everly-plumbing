export enum ServiceId {
  DRAIN_CLEANING = 'DRAIN_CLEANING',
  TOILET_REPLACEMENT = 'TOILET_REPLACEMENT',
  WATER_HEATER_FLUSH = 'WATER_HEATER_FLUSH',
  TANKLESS_DESCALING = 'TANKLESS_DESCALING',
  WATER_HEATER_REPLACEMENT = 'WATER_HEATER_REPLACEMENT',
  TANKLESS_WATER_HEATER_REPLACEMENT = 'TANKLESS_WATER_HEATER_REPLACEMENT',
  CAMERA_INSPECTION = 'CAMERA_INSPECTION',
  PRV_REPLACEMENT = 'PRV_REPLACEMENT'
}

export interface PricingCard {
  id: ServiceId;
  title: string;
  price?: string;
  description: string;
  imageUrl?: string;
}

export interface ServiceDetail extends ServiceStage {
  benefits: string[];
  longDescription: string;
  category: 'Residential' | 'Commercial' | 'Builder';
}

export interface ServiceStage {
  title: string;
  description: string;
  imageUrl: string;
}

export interface OrgRole {
  role: string;
  name: string;
  subordinates?: OrgRole[];
}

export type FormContextType = 'general' | 'service' | 'builder' | 'sitewalk' | 'detail';

export interface FormState {
  type: FormContextType;
  serviceName?: string;
  price?: string;
  projectType?: string;
}
