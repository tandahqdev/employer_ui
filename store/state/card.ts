import { CreateCard } from '@/models';
import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { supportedBrands, supportedTypes } from '../data';

const initialState: CreateCard = {
  id: nanoid(),
  supportedBrands: supportedBrands,
  supportedTypes: supportedTypes,
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
