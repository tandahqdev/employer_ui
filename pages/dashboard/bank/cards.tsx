import { Header } from '@/components';
import { DashBoardLayout } from '@/layout';

const BankCards = () => {
  const topbar = <Header>Hello!</Header>;

  return (
    <DashBoardLayout topBar={topbar}>
      <h1>Bank Cards</h1>
    </DashBoardLayout>
  );
};

export default BankCards;