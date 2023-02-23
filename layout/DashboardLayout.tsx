import { ColumnFlex, SideBar, Topbar } from '@/components';
import { LayoutProps } from '@/models';
import { DEFAULT_STYLES } from '@/styles';
import { Flex } from '@chakra-ui/react';

interface Props extends LayoutProps {}

export const DashBoardLayout = ({ children }: Props) => {
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
        <Topbar />
        <Flex w={DEFAULT_STYLES.containerWidth} pt='104px'>
          {children}
        </Flex>
      </ColumnFlex>
    </Flex>
  );
};
