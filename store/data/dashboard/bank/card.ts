import visa from '@/assets/images/visa.png';
import verve from '@/assets/images/verve.png';
import master from '@/assets/images/master.png';
import cardvisa from '@/assets/images/cardvisa.png';
import cardverve from '@/assets/images/cardverve.png';
import cardmaster from '@/assets/images/cardmaster.png';
import {
  CardBrand,
  CardData,
  CardStatus,
  CardType,
  CurrencyType,
  SupportedCardBrand,
  SupportedCardType,
  TransactionType,
} from '@/models';
import { nanoid } from 'nanoid';
import { AiFillCreditCard } from 'react-icons/ai';
import { MdPhoneAndroid } from 'react-icons/md';
import { StaticImageData } from 'next/image';

export const supportedBrands: SupportedCardBrand[] = [
  {
    id: nanoid(),
    value: CardBrand.Verve,
    image: verve,
  },
  {
    id: nanoid(),
    value: CardBrand.Visa,
    image: visa,
  },
  {
    id: nanoid(),
    value: CardBrand.MasterCard,
    image: master,
    text: CardBrand.MasterCard,
  },
];

export const supportedTypes: SupportedCardType[] = [
  {
    id: nanoid(),
    value: CardType.Physical,
    icon: AiFillCreditCard,
  },
  {
    id: nanoid(),
    value: CardType.Virtual,
    icon: MdPhoneAndroid,
  },
];

export const cardExamples: CardData[] = [
  new CardData({
    id: nanoid(5),
    balance: 20000,
    brand: CardBrand.Verve,
    currency: CurrencyType.NGN,
    cvc: '123',
    expDate: '123',
    name: 'Sam James',
    number: '1234567898762145',
    type: CardType.Physical,
    city: 'Enugu',
    country: 'Nigeria',
    postalCode: '400103',
    state: 'Enugu',
    street: '24 Lumumba streett',
    suite: 'my house',
    account: '12345678987',
    createdOn: new Date(),
    status: CardStatus.Active,
    transaction: [
      {
        amount: 300000,
        balance: 500000,
        summary: 'Purchase from Konga | Address: Lekki, LG | **5674',
        time: new Date(),
        type: TransactionType.Debit,
        id: nanoid(10),
      },
      {
        amount: 300000,
        balance: 500000,
        summary: 'Purchase from Konga | Address: Lekki, LG | **5674',
        time: new Date(),
        type: TransactionType.Debit,
        id: nanoid(10),
      },
      {
        amount: 300000,
        balance: 500000,
        summary: 'Purchase from Konga | Address: Lekki, LG | **5674',
        time: new Date(),
        type: TransactionType.Debit,
        id: nanoid(10),
      },
      {
        amount: 300000,
        balance: 500000,
        summary: 'Purchase from Konga | Address: Lekki, LG | **5674',
        time: new Date(),
        type: TransactionType.Debit,
        id: nanoid(10),
      },
    ],
  }),
  new CardData({
    id: nanoid(5),
    balance: 25000,
    brand: CardBrand.Visa,
    currency: CurrencyType.USD,
    cvc: '123',
    expDate: '123',
    name: 'Sam Johnn',
    number: '1234567898762905',
    type: CardType.Virtual,
    account: '12345678987',
    createdOn: new Date(),
    status: CardStatus.Active,
    transaction: [
      {
        amount: 300000,
        balance: 500000,
        summary: 'Purchase from Konga | Address: Lekki, LG | **5674',
        time: new Date(),
        type: TransactionType.Credit,
        id: nanoid(10),
      },
      {
        amount: 300000,
        balance: 500000,
        summary: 'Purchase from Konga | Address: Lekki, LG | **5674',
        time: new Date(),
        type: TransactionType.Debit,
        id: nanoid(10),
      },
      {
        amount: 300000,
        balance: 500000,
        summary: 'Purchase from Konga | Address: Lekki, LG | **5674',
        time: new Date(),
        type: TransactionType.Debit,
        id: nanoid(10),
      },
      {
        amount: 300000,
        balance: 500000,
        summary: 'Purchase from Konga | Address: Lekki, LG | **5674',
        time: new Date(),
        type: TransactionType.Debit,
        id: nanoid(10),
      },
    ],
  }),
  new CardData({
    id: nanoid(5),
    balance: 30000,
    brand: CardBrand.MasterCard,
    currency: CurrencyType.EUR,
    cvc: '123',
    expDate: '123',
    name: 'John London',
    number: '1234567898762138',
    type: CardType.Physical,
    city: 'Enugu',
    country: 'Nigeria',
    postalCode: '400103',
    state: 'Enugu',
    street: '24 Lumumba streett',
    suite: 'my house',
    account: '12345678987',
    createdOn: new Date(),
    status: CardStatus.InActive,
    transaction: [
      {
        amount: 300000,
        balance: 500000,
        summary: 'Purchase from Konga | Address: Lekki, LG | **5674',
        time: new Date(),
        type: TransactionType.Debit,
        id: nanoid(10),
      },
      {
        amount: 300000,
        balance: 500000,
        summary: 'Purchase from Konga | Address: Lekki, LG | **5674',
        time: new Date(),
        type: TransactionType.Debit,
        id: nanoid(10),
      },
      {
        amount: 300000,
        balance: 500000,
        summary: 'Purchase from Konga | Address: Lekki, LG | **5674',
        time: new Date(),
        type: TransactionType.Credit,
        id: nanoid(10),
      },
      {
        amount: 300000,
        balance: 500000,
        summary: 'Purchase from Konga | Address: Lekki, LG | **5674',
        time: new Date(),
        type: TransactionType.Credit,
        id: nanoid(10),
      },
    ],
  }),
];

export const cardImages: Record<string, StaticImageData> = {
  verve: cardverve,
  visa: cardvisa,
  mastercard: cardmaster,
};

export const cardPageTableHeaders = [
  'Card Nickname',
  'Account',
  'Card Type',
  'Expiry Date',
  'Status',
  'Created on',
];