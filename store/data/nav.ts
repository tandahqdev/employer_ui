import { NavItemProps } from '@/models';
import { DashRoutes } from '@/utils';
import { TfiMenuAlt } from 'react-icons/tfi';
import { ImStack } from 'react-icons/im';
import { MdStackedLineChart } from 'react-icons/md';
import { FiCheckCircle } from 'react-icons/fi';
import { HiOutlineUsers } from 'react-icons/hi';
import { BsCreditCard, BsCashStack } from 'react-icons/bs';
import { nanoid } from 'nanoid';


export const financeItems: NavItemProps[] = [
  {
    icon: TfiMenuAlt,
    title: 'Overview',
    path: DashRoutes.dashboardFinanceOverview,
    id: nanoid(),
  },
  {
    icon: MdStackedLineChart,
    title: 'Grow',
    path: DashRoutes.dashboardFinanceGrow,
    id: nanoid(),
  },
  {
    icon: FiCheckCircle,
    title: 'Extend',
    path: DashRoutes.dashboardFinanceExtend,
    id: nanoid(),
  },
];

export const bankingItems: NavItemProps[] = [
  {
    icon: TfiMenuAlt,
    title: 'Overview',
    path: DashRoutes.dashboardBankOverview,
    id: nanoid(),
  },
  {
    icon: ImStack,
    title: 'Accounts',
    path: DashRoutes.dashboardBankAccts,
    id: nanoid(),
  },
  {
    icon: BsCreditCard,
    title: 'Cards',
    path: DashRoutes.dashboardFinanceExtend,
    id: nanoid(),
  },
  {
    icon: BsCashStack,
    title: 'Payments',
    path: DashRoutes.dashboardFinanceExtend,
    id: nanoid(),
  },
  {
    icon: HiOutlineUsers,
    title: 'Recipients',
    path: DashRoutes.dashboardFinanceExtend,
    id: nanoid(),
  },
];
