import { CreateCard } from '@/models';
import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { supportedBrand, supportedTypes } from '../data';

const initialState: CreateCard = {
  id: nanoid(),
  supportedBrand: supportedBrand,
  supportedType: supportedTypes,
  type: undefined,
  brand: undefined,
  name: undefined,
  amount: undefined,
  account: undefined,
  currency: undefined,
  address: undefined,
};

interface Card extends CreateCard {
  reset: () => void;
}

export const useCardStore = create<Card>((set) => ({
  ...initialState,
  reset: () => set(() => ({ ...initialState, id: nanoid() })),
}));
