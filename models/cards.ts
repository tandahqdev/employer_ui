import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';

export interface CreateCard {
  supportedType: SupportedCardType[];
  supportedBrand: SupportedCardBrand[];
  type?: CardType;
  brand?: CardBrand;
  name?: string;
  account?: string;
  currency?: string;
  amount?: number;
  address?: Address;
  id: string;
}

export interface CardDetails {
  value: string;
  id: string;
}

export enum CardType {
  Physical = 'physical',
  Virtual = 'virtual',
}

export enum CardBrand {
  Verve = 'verve',
  Visa = 'visa',
  MasterCard = 'mastercard',
}

export interface Address {
  street?: string;
  suite?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

export interface SupportedCardType extends CardDetails {
  icon?: IconType;
}

export interface SupportedCardBrand extends CardDetails {
  image?: StaticImageData;
  text?: string;
}
