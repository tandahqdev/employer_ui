import { Header } from '@/components';
import { DashBoardLayout } from '@/layout';

const BankOverview = () => {
  const topbar = <Header>Hello!</Header>;

  return (
    <DashBoardLayout topBar={topbar}>
      <h1>Bank Overview</h1>
    </DashBoardLayout>
  );
};

export default BankOverview;
