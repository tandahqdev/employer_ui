import { FaRegUserCircle } from 'react-icons/fa';
import { TbHome } from 'react-icons/tb';
import { LinkItemProps } from '@/models';
import { FiSettings } from 'react-icons/fi';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { DashRoutes } from '@/utils';

export const navLinkItems: Array<LinkItemProps> = [
  { name: 'Overview', icon: TbHome, route: DashRoutes.dashboard },
  {
    name: 'Employees',
    icon: FaRegUserCircle,
    children: [
      {
        name: 'Directory',
        route: '#',
      },
      {
        name: 'All Tasks',
        route: '#',
      },
      {
        name: 'Offers',
        route: '#',
      },
    ],
  },
  {
    name: 'Payrolls',
    icon: FaRegUserCircle,
    children: [
      {
        name: 'Directory',
        route: '#',
      },
      {
        name: 'All Tasks',
        route: '#',
      },
      {
        name: 'Offers',
        route: '#',
      },
    ],
  },
  {
    name: 'Leave',
    icon: FaRegUserCircle,
    children: [
      {
        name: 'Directory',
        route: '#',
      },
      {
        name: 'All Tasks',
        route: '#',
      },
      {
        name: 'Offers',
        route: '#',
      },
    ],
  },
  { name: 'Settings', icon: FiSettings, route: DashRoutes.dashboardSettings },
];

export const helpItems = {
  icon: IoIosHelpCircleOutline,
  text: 'Help & Support',
  route: DashRoutes.dashboardHelp,
};

export const logoutItem = {
  icon: BiLogOut,
  text: 'Log Out',
};