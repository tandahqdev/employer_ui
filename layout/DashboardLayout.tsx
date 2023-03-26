import { ColumnFlex, SideBar, Topbar } from '@/components';
import { LayoutProps, TopBarProps } from '@/models';
import { DEFAULT_STYLES } from '@/styles';
import { Flex } from '@chakra-ui/react';

interface Props extends LayoutProps, TopBarProps {}

export const DashBoardLayout = ({ children, header, showBckBtn }: Props) => {
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
        <Topbar header={header} showBckBtn={showBckBtn} />

        <Flex
          w={DEFAULT_STYLES.containerWidth}
          maxW={DEFAULT_STYLES.fullWidth}
          mt={{ base: '120px', lg: '150px' }}
          mb={{ base: '35px', lg: '50px' }}
          justify='center'
        >
          {children}
        </Flex>
      </ColumnFlex>
    </Flex>
  );
};
