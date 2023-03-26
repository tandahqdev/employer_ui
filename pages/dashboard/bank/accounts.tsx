import { Header } from '@/components';
import { DashBoardLayout } from '@/layout';
import { DEFAULT_STYLES } from '@/styles';

const BankAccounts = () => {
  const topbar = (
    <Header fontWeight={DEFAULT_STYLES.semibold}>Business Checking</Header>
  );

  return (
    <DashBoardLayout header={topbar} showBckBtn>
      <h1>Bank Accounts</h1>
    </DashBoardLayout>
  );
};

export default BankAccounts;
