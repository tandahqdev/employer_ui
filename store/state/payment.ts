import { PaymentModel, Reset } from 'models';
import { nanoid } from 'nanoid';
import { create } from 'zustand';

const initialState: PaymentModel = {
  rate: 2,
  repay: 0,
  selectedIndexs: [0],
  terms: [
    { month: 1, price: 0, id: nanoid().toLowerCase() },
    { month: 2, price: 0, id: nanoid().toLowerCase() },
    { month: 3, price: 0, id: nanoid().toLowerCase() },
  ],
  total: 0,
  id: nanoid(),
};

interface Payment extends PaymentModel, Reset {}

export const usePaymentStore = create<Payment>((set) => ({
  ...initialState,
  selectedTerms: initialState.terms[0],
  reset: () => set(() => ({ ...initialState, id: nanoid() })),
}));
