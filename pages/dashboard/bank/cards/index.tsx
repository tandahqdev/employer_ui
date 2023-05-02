import Link from 'next/link';
import { CardPage, Header, NoCards } from 'components';
import { DashBoardLayout } from 'layout';
import { DEFAULT_STYLES } from 'styles';
import { DashRoutes } from 'utils';
import { AddIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

const BankCards = () => {
  const topbar = <Header>Cards</Header>;

  const otherBtn = (
    <Link href={DashRoutes.bankCardsCreate}>
      <Button
        size='smPadding'
        leftIcon={<AddIcon color={DEFAULT_STYLES.white} />}
      >
        Create card
      </Button>
    </Link>
  );

  const showCard = true;

  return (
    <DashBoardLayout header={topbar} otherBtn={otherBtn}>
      {showCard ? <CardPage /> : <NoCards />}
    </DashBoardLayout>
  );
};

export default BankCards;
