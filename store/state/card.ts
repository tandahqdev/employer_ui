import { CardActionsModel, CreateCard, Reset } from '@/models';
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

interface Card extends CreateCard, Reset {}
// For creating cards
export const useCardStore = create<Card>((set) => ({
  ...initialState,
  reset: () => set(() => ({ ...initialState, id: nanoid() })),
}));

const initialCardActionState: CardActionsModel = {
  transfer: undefined,
  block: undefined,
  pin: undefined,
};

// For single card actions
interface Actions extends CardActionsModel, Reset {}

export const useCardActions = create<Actions>((set) => ({
  ...initialCardActionState,
  reset: () => set(() => ({ ...initialCardActionState })),
}));
