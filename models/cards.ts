import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';

export interface CreateCard {
  supportedTypes: SupportedCardType[];
  supportedBrands: SupportedCardBrand[];
  type?: CardType;
  brand?: CardBrand;
  name?: string;
  account?: string;
  currency?: string;
  amount?: number;
  address?: Address;
  id: string;
}

export interface CardDetails<T> {
  value: T;
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

export interface SupportedCardType extends CardDetails<CardType> {
  icon?: IconType;
}

export interface SupportedCardBrand extends CardDetails<CardBrand> {
  image: StaticImageData;
  text?: string;
}
