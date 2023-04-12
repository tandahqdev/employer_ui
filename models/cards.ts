import {
  cardColorHandler,
  cardStatusColor,
  cardTableColorHandler,
  currencyMap,
  hidePin,
} from '@/utils';
import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';
import { CurrencyType } from './account';
import { ColorsModel } from './shared';

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

export enum CardStatus {
  Active = 'active',
  InActive = 'inactive',
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

export interface CardTransactions {
  time: Date;
  summary: string;
  type: TransactionType;
  amount: number;
  balance: number;
  id: string;
}

export enum TransactionType {
  Debit = 'debit',
  Credit = 'credit',
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
  account: string;
  status: CardStatus;
  createdOn: Date;
  transaction: CardTransactions[];
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
  account: string;
  status: CardStatus;
  createdOn: Date;
  transaction: CardTransactions[];

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
    this.postalCode = data.postalCode;
    this.state = data.state;
    this.country = data.country;
    this.id = data.id;
    this.currency = data.currency;
    this.account = data.account;
    this.status = data.status;
    this.createdOn = data.createdOn;
    this.transaction = data.transaction;
  }

  get getCardColor(): string {
    return cardColorHandler(this.type);
  }

  get tableTypeColor(): ColorsModel {
    return cardTableColorHandler(this.type);
  }

  get tableStatusColor(): ColorsModel {
    return cardStatusColor(this.status);
  }

  get getPin(): string {
    return hidePin(this.number);
  }
  get currentBalance(): string {
    return `${currencyMap[this.currency]} ${this.balance.toLocaleString()}`;
  }
}

export interface CardActionsModel {
  transfer: CardTransfer;
  pin?: string;
  block?: BlockCard;
}

export interface BlockCard {
  desc?: string;
  account?: string;
}

export interface CardTransfer extends BlockCard {
  amount?: number;
  currency?: string;
  status?: TransferStatus;
}

export enum TransferStatus {
  Fund = 'fund',
  WithDraw = 'withdraw',
}
