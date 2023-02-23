import { DashSideBar, TandaBreadCrumb, Topbar } from '@/components';
import { LayoutProps } from '@/models';
import { helpItems, logoutItem, navLinkItems } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { Flex } from '@chakra-ui/react';

interface Props extends LayoutProps {}

const DashBoardLayout = ({ children }: Props) => {
  return (
    <Flex
      w={DEFAULT_STYLES.fullWidth}
      minH='100vh'
      position='relative'
      bg='#F6F6F6'
    >
      <DashSideBar
        linkItems={navLinkItems}
        bottomItem={helpItems}
        bottomItem2={logoutItem}
      />

      <Flex
        direction='column'
        flex={1}
        ml={{ base: 0, xl: '351px' }}
        mr={{ base: 0, xl: '50px' }}
        bg={DEFAULT_STYLES.white}
        alignItems='center'
        py={{ base: 0, xl: 5 }}
        overflowX='auto'
        position='relative'
      >
        <Topbar />
        <TandaBreadCrumb />
        <Flex w='full' justify='center' mt={{ base: '70px', xl: 0 }}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashBoardLayout;
