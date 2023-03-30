import visa from '@/assets/images/visa.png';
import verve from '@/assets/images/verve.png';
import master from '@/assets/images/master.png';
import {
  CardBrand,
  CardType,
  SupportedCardBrand,
  SupportedCardType,
} from '@/models';
import { nanoid } from 'nanoid';
import { AiFillCreditCard } from 'react-icons/ai';
import { MdPhoneAndroid } from 'react-icons/md';

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
