import { Header } from '@/components';
import { DashBoardLayout } from '@/layout';

const BankAccounts = () => {
  const topbar = <Header>Hello!</Header>;

  return (
    <DashBoardLayout topBar={topbar}>
      <h1>Bank Accounts</h1>
    </DashBoardLayout>
  );
};

export default BankAccounts;
