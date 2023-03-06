import { ColumnFlex } from '@/components/shared';
import { LayoutProps } from '@/models';
import { DEFAULT_STYLES } from '@/styles';
import { GridItem } from '@chakra-ui/react';

export const SharedBannerContainer = ({ children }: LayoutProps) => {
  return (
    <GridItem colSpan={{ base: 1, lg: 2 }} display='flex' minH='221'>
      <ColumnFlex
        bg={DEFAULT_STYLES.white}
        border={DEFAULT_STYLES.border}
        rounded={DEFAULT_STYLES.borderRadius}
        flex='1'
        align='center'
        justify='center'
        pt='38px'
        pb='40px'
        px='2'
      >
        {children}
      </ColumnFlex>
    </GridItem>
  );
};
