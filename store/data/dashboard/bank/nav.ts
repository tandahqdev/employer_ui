import { DashRoutes } from '@/utils';
import { nanoid } from 'nanoid';

export const accountsNav = [
  { name: 'Accounts', path: DashRoutes.dashboardBankAccts, id: nanoid(12) },
  {
    name: 'Statements',
    path: DashRoutes.dashboardBankAcctsStatements,
    id: nanoid(12),
  },
];
