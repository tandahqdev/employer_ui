import { DashRoutes } from '@/utils';
import { nanoid } from 'nanoid';

export const accountsNav = [
  { name: 'Accounts', path: DashRoutes.bankAccts, id: nanoid(12) },
  {
    name: 'Statements',
    path: DashRoutes.bankAcctsStatements,
    id: nanoid(12),
  },
];
