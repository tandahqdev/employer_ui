import { Header } from 'components';
import { DashBoardLayout } from 'layout';

const BankPayments = () => {
  const topbar = <Header>Hello!</Header>;

  return (
    <DashBoardLayout header={topbar}>
      <h1>Bank Payments</h1>
    </DashBoardLayout>
  );
};

export default BankPayments;
