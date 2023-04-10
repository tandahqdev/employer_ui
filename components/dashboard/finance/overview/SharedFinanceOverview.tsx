import { ColumnFlex } from '@/components/shared';
import { DashBoardLayout } from '@/layout';
import { LayoutProps } from '@/models';
import { DEFAULT_STYLES, sharedGridStyles } from '@/styles';
import { getDay } from '@/utils';
import { Grid } from '@chakra-ui/react';
import { ProfileNavCard, PageSecondaryTitle } from '../../shared';

export const SharedFinanceOverview = ({ children }: LayoutProps) => {
  // const topbar = <Header>Hello!</Header>;

  return (
    <DashBoardLayout
      header={
        <ProfileNavCard
          showOnMobile
          title='Welcome back, John'
          desc={getDay('medium')}
        />
      }
    >
      <ColumnFlex gap='5' w='max-content'>
        <PageSecondaryTitle
          title='Financing overview'
          desc='A quick glance at the aggregated status of your financing products with tanda'
          textStyle='bodyText'
          color={DEFAULT_STYLES.primaryColor}
          opacity={0.4}
        />

        <Grid {...sharedGridStyles}>{children}</Grid>
      </ColumnFlex>
    </DashBoardLayout>
  );
};
