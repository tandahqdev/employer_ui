import { AccountModel } from '@/models';
import { nanoid } from 'nanoid';

export const accountItems: AccountModel[] = [
  {
    id: nanoid(12),
    accountNumber: '32364534832',
    name: 'Primary Account',
    amount: 'N32,990',
  },
  {
    id: nanoid(12),
    accountNumber: '32364534832',
    name: 'Subscriptions',
    amount: 'N32,990',
  },
  {
    id: nanoid(12),
    accountNumber: '32364534832',
    name: 'Marketing',
    amount: 'N32,990',
  },
  {
    id: nanoid(12),
    accountNumber: '32364534832',
    name: 'Business Checking',
    amount: 'N32,990',
  },
];
