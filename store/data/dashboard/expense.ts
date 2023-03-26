import { nanoid } from 'nanoid';

export const expenseTableBody = [
  {
    id: nanoid(),
    description: { name: 'Notion May, 2023', desc: 'Google ads' },
    date: { day: 'Feb 8, 2023', time: '8.00' },
    amount: '$70,000.00',
  },
  {
    id: nanoid(),
    description: { name: 'Notion May, 2023', desc: 'Google ads' },
    amount: '$70,000.00',
    date: { day: 'Feb 9, 2023', time: '8.00' },
  },
  {
    id: nanoid(),
    description: { name: 'Notion May, 2023', desc: 'Google ads' },
    amount: '$70,000.00',
    date: { day: 'Feb 10, 2023', time: '8.00' },
  },
  {
    id: nanoid(),
    description: { name: 'Notion May, 2023', desc: 'Google ads' },
    date: { day: 'Feb 11, 2023', time: '8.00' },
    amount: '$70,000.00',
  },
];
