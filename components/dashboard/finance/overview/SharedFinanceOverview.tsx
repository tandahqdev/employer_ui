import { ColumnFlex } from '@/components/shared';
import { DashBoardLayout } from '@/layout';
import { LayoutProps } from '@/models';
import { sharedGridStyles } from '@/styles';
import { Grid } from '@chakra-ui/react';
import { WelcomeCard, PageSecondaryTitle } from '../../shared';

export const SharedFinanceOverview = ({ children }: LayoutProps) => {
  // const topbar = <Header>Hello!</Header>;

  return (
    <DashBoardLayout topBar={<WelcomeCard name='John' />}>
      <ColumnFlex gap='5'>
        <PageSecondaryTitle />

        <Grid {...sharedGridStyles}>{children}</Grid>
      </ColumnFlex>
    </DashBoardLayout>
  );
};