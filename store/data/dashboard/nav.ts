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
    path: DashRoutes.financeOverview,
    id: nanoid(),
  },
  {
    icon: MdStackedLineChart,
    title: 'Grow',
    path: DashRoutes.financeGrow,
    id: nanoid(),
  },
  {
    icon: FiCheckCircle,
    title: 'Extend',
    path: DashRoutes.financeExtend,
    id: nanoid(),
  },
];

export const bankingItems: NavItemProps[] = [
  {
    icon: TfiMenuAlt,
    title: 'Overview',
    path: DashRoutes.bankOverview,
    id: nanoid(),
  },
  {
    icon: ImStack,
    title: 'Accounts',
    path: DashRoutes.bankAccts,
    id: nanoid(),
  },
  {
    icon: BsCreditCard,
    title: 'Cards',
    path: DashRoutes.bankCards,
    id: nanoid(),
  },
  {
    icon: BsCashStack,
    title: 'Payments',
    path: DashRoutes.bankPay,
    id: nanoid(),
  },
  {
    icon: HiOutlineUsers,
    title: 'Recipients',
    path: DashRoutes.bankRepts,
    id: nanoid(),
  },
];
