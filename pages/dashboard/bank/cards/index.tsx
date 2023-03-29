import Link from 'next/link';
import { Header, NoCards } from '@/components';
import { DashBoardLayout } from '@/layout';
import { DEFAULT_STYLES } from '@/styles';
import { DashRoutes } from '@/utils';
import { AddIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

const BankCards = () => {
  const topbar = <Header>Cards</Header>;

  const otherBtn = (
    <Link href={DashRoutes.dashboardBankCardsCreate}>
      <Button
        size='smPadding'
        leftIcon={<AddIcon color={DEFAULT_STYLES.white} />}
      >
        Create card
      </Button>
    </Link>
  );

  return (
    <DashBoardLayout header={topbar} otherBtn={otherBtn}>
      <NoCards />
    </DashBoardLayout>
  );
};

export default BankCards;
