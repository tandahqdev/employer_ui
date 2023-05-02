import { Header } from 'components';
import { DashBoardLayout } from 'layout';

const BankRecipients = () => {
  const topbar = <Header>Hello!</Header>;

  return (
    <DashBoardLayout header={topbar}>
      <h1>Bank Recipients</h1>
    </DashBoardLayout>
  );
};

export default BankRecipients;
