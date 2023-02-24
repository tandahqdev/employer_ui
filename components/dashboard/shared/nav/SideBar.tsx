import { AiTwotoneHome } from 'react-icons/ai';
import { ColumnFlex } from '@/components';
import { DEFAULT_STYLES } from '@/styles';
import { Logo } from './Logo';
import { NavItem } from './NavItem';
import { TandaDivider } from '../TandaDivider';
import { NavCard } from './NavCard';
import { bankingItems, financeItems } from '@/store';
import { FiSettings } from 'react-icons/fi';
import { BiLogOut } from 'react-icons/bi';
import { HelpCard } from './HelpCard';
import { DashRoutes } from '@/utils';


// TODO: Remove nextjs data collection
export const SideBar = () => {
  return (
    <ColumnFlex
      w='200px'
      h={DEFAULT_STYLES.fullHeight}
      position='fixed'
      bg={DEFAULT_STYLES.white}
      shadow='0px 1px 12px rgba(195, 203, 222, 0.58806)'
      zIndex={10}
      pt='40px'
      px='0.5'
      pb='30px'
    >
      <Logo />

      <ColumnFlex pt='35px' gap='1' flex='1'>
        <NavItem
          icon={AiTwotoneHome}
          title='Home'
          path={DashRoutes.dashboard}
        />

        <TandaDivider />

        <NavCard header='Finance' list={financeItems} />

        <TandaDivider />

        <NavCard header='Banking' list={bankingItems} />
      </ColumnFlex>

      <HelpCard />

      <NavItem
        icon={FiSettings}
        title='Settings'
        path={DashRoutes.dashboardSettings}
      />
      <NavItem icon={BiLogOut} title='Logout' />
    </ColumnFlex>
  );
};
