
export interface PricingCard {
  title: string;
  price: string;
  description: string;
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
