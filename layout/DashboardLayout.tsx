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
        ml='200px'
        width={DEFAULT_STYLES.fullWidth}
        align='center'
        position='relative'
      >
        <Topbar header={topBar} />

        <Flex
          w={DEFAULT_STYLES.containerWidth}
          mt='170px'
          mb='50px'
          justify='center'
        >
          {children}
        </Flex>
      </ColumnFlex>
    </Flex>
  );
};
