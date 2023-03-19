import { DrawModel } from '@/models';
import { nanoid } from 'nanoid';
import { create } from 'zustand';

const initialState: DrawModel = {
  rate: 2,
  repay: 0,
  selectedIndexs: [0],
  terms: [
    { month: 1, price: 0, isChecked: false, id: nanoid() },
    { month: 2, price: 0, isChecked: false, id: nanoid() },
    { month: 3, price: 0, isChecked: false, id: nanoid() },
  ],
  total: 0,
  id: nanoid(),
};

interface Draw extends DrawModel {
  reset: () => void;
}

export const useDrawStore = create<Draw>((set) => ({
  ...initialState,
  reset: () => set(() => ({ ...initialState, id: nanoid() })),
}));
