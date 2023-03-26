import { ColumnFlex } from '@/components';
import { DashBoardLayout } from '@/layout';
import { LayoutProps, TopBarProps } from '@/models';
import { DEFAULT_STYLES } from '@/styles';
import { Grid } from '@chakra-ui/react';
import { PageSecondaryTitle, TandaHDivider } from '../shared';
import { AcctNav } from './AcctNav';

interface Props extends LayoutProps, TopBarProps {}

export const AccountPageContainer = ({
  children,
  header,
  otherBtn,
  showBckBtn,
}: Props) => {
  return (
    <DashBoardLayout
      header={header}
      otherBtn={otherBtn}
      showBckBtn={showBckBtn}
    >
      <ColumnFlex gap='5' w='full' px={DEFAULT_STYLES.mobilePx}>
        <PageSecondaryTitle
          title='Total balance'
          desc='N 5,459.00'
          fontSize='2.25rem'
          color={DEFAULT_STYLES.lightPurple}
          fontWeight={DEFAULT_STYLES.mediumbold}
          opacity={0.8}
        />

        <Grid
          w={DEFAULT_STYLES.fullWidth}
          px={DEFAULT_STYLES.mobilePx}
          minH='400px'
          layerStyle='card'
          alignContent='flex-start'
        >
          <AcctNav />
          <TandaHDivider />

          {children}
        </Grid>
      </ColumnFlex>
    </DashBoardLayout>
  );
};
