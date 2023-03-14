import { Header } from '@/components';
import { DashBoardLayout } from '@/layout';

// I can move styles to the globalStyles object and share them

const BankRecipients = () => {
  const topbar = <Header>Hello!</Header>;

  return (
    <DashBoardLayout topBar={topbar}>
      <h1>Bank Recipients</h1>
    </DashBoardLayout>
  );
};

export default BankRecipients;
