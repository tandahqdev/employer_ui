import { DrawStatus } from '@/models';
import { nanoid } from 'nanoid';

export const drawTab = [DrawStatus.Initialisation, DrawStatus.Conclusion];

export const drawTable = [
  {
    month: 'February 2023',
    draw: {
      amount: '+$250,000.00',
      month: 'Feb 17, 2023',
    },
    exist: '$0.00',
    total: '+$250,000.00',
    id: nanoid(),
  },
  {
    month: 'March 2023',
    draw: {
      amount: '+$22,000.00',
      month: 'Feb 17, 2023',
    },
    exist: '$0.00',
    total: '+$250,000.00',
    id: nanoid(),
  },
  {
    month: 'April 2023',
    draw: {
      amount: '+$250,000.00',
      month: 'Feb 17, 2023',
    },
    exist: '$0.00',
    total: '+$250,000.00',
    id: nanoid(),
  },
];
