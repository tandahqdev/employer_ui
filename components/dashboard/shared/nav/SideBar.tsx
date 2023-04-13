import { AiTwotoneHome } from 'react-icons/ai';
import { ColumnFlex, IconBtn } from '@/components';
import { DEFAULT_STYLES } from '@/styles';
import { Logo } from './Logo';
import { NavItem } from './NavItem';
import { TandaHDivider } from '../TandaDivider';
import { NavCard } from './NavCard';
import { bankingItems, financeItems } from '@/store';
import { FiSettings } from 'react-icons/fi';
import { BiLogOut } from 'react-icons/bi';
import { HelpCard } from './HelpCard';
import { DashRoutes } from '@/utils';
import { useRouter } from 'next/router';
import { CloseIcon } from '@chakra-ui/icons';
import { useCustomMediaQuery } from '@/context';

// TODO: Remove nextjs data collection
// TODO: Change the stack in the admin side bar to be flex 1.

export const SideBar = () => {
  const { push } = useRouter();
  const { mediaQuery, upDateMediaQuery } = useCustomMediaQuery();

  return (
    <ColumnFlex
      w='200px'
      h={DEFAULT_STYLES.fullHeight}
      position='fixed'
      zIndex={10}
      bg={DEFAULT_STYLES.white}
      shadow='0px 1px 12px rgba(195, 203, 222, 0.58806)'
      px='0.5'
      pt='40px'
      transform={{
        base: `translate( ${mediaQuery ? '0px' : '-200px'})`,
        xl: `translate(0px)`,
      }}
      transition={DEFAULT_STYLES.transition}
    >
      <IconBtn
        aria-label='Close button'
        icon={<CloseIcon />}
        bgColor='transparent'
        display={{ base: 'flex', xl: 'none' }}
        position='absolute'
        right='5'
        top='4'
        onClick={() => {
          upDateMediaQuery(false);
        }}
      />
      <Logo />

      <ColumnFlex overflow='auto' gap='1' flex='1' pb='20px' mt='30px'>
        <ColumnFlex gap='1'>
          <NavItem
            icon={AiTwotoneHome}
            title='Home'
            path={DashRoutes.dashboard}
          />

          <TandaHDivider />

          <NavCard header='Financing' list={financeItems} />

          <TandaHDivider />

          <NavCard header='Banking' list={bankingItems} />
        </ColumnFlex>

        <HelpCard />

        <NavItem
          icon={FiSettings}
          title='Settings'
          path={DashRoutes.settings}
        />

        <NavItem
          icon={BiLogOut}
          title='Logout'
          onClick={() => {
            push(DashRoutes.home);
          }}
        />
      </ColumnFlex>
    </ColumnFlex>
  );
};
