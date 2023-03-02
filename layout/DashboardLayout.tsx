import { ColumnFlex, SideBar, Topbar } from '@/components';
import { LayoutProps } from '@/models';
import { DEFAULT_STYLES } from '@/styles';
import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props extends LayoutProps {
  topBar?: ReactNode;
}

export const DashBoardLayout = ({ children, topBar }: Props) => {
  return (
    <Flex
      width={DEFAULT_STYLES.fullWidth}
      minH={DEFAULT_STYLES.fullHeight}
      bg={DEFAULT_STYLES.bgColor}
      position='relative'
    >
      <SideBar />

      <ColumnFlex
        ml={{ base: '0', xl: '200px' }}
        width={DEFAULT_STYLES.fullWidth}
        align='center'
        position='relative'
      >
        <Topbar header={topBar} />

        <Flex
          minW={DEFAULT_STYLES.containerWidth}
          maxW={DEFAULT_STYLES.fullWidth}
          mt={{ base: '120px', lg: '170px' }}
          mb={{ base: '35px', lg: '50px' }}
          justify='center'
        >
          {children}
        </Flex>
      </ColumnFlex>
    </Flex>
  );
};
