import { Header, NoCards } from '@/components';
import { DashBoardLayout } from '@/layout';
import { DEFAULT_STYLES } from '@/styles';
import { AddIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

const BankCards = () => {
  const topbar = <Header>Cards</Header>;

  const otherBtn = (
    <Button
      size='smPadding'
      leftIcon={<AddIcon color={DEFAULT_STYLES.white} />}
    >
      Create card
    </Button>
  );

  return (
    <DashBoardLayout header={topbar} otherBtn={otherBtn}>
      <NoCards />
    </DashBoardLayout>
  );
};

export default BankCards;
