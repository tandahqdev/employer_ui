import { cardColorHandler, hidePin } from '@/utils';
import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';
import { CurrencyType } from './account';

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

export interface CardModel extends Address {
  type: CardType;
  brand: CardBrand;
  number: string;
  expDate: string;
  cvc: string;
  name: string;
  balance: number;
  id: string;
  currency: CurrencyType;
}

export class CardData implements CardModel {
  type: CardType;
  brand: CardBrand;
  number: string;
  expDate: string;
  cvc: string;
  name: string;
  balance: number;
  street?: string;
  suite?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  id: string;
  currency: CurrencyType;

  constructor(data: CardModel) {
    this.type = data.type;
    this.brand = data.brand;
    this.number = data.number;
    this.expDate = data.expDate;
    this.cvc = data.cvc;
    this.name = data.name;
    this.balance = data.balance;
    this.street = data.street;
    this.suite = data.suite;
    this.city = data.city;
    this.number = data.number;
    this.number = data.number;
    this.number = data.number;
    this.id = data.id;
    this.currency = data.currency;
  }

  get getCardColor(): string {
    return cardColorHandler(this.type);
  }

  get getPin(): string {
    return hidePin(this.number);
  }
}
