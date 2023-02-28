import { Header } from '@/components';
import { DashBoardLayout } from '@/layout';

const FinanceExtend = () => {
  const topbar = <Header>Finance Extend!</Header>;

  return (
    <DashBoardLayout topBar={topbar}>
      <h1>Finance Extend</h1>
    </DashBoardLayout>
  );
};

export default FinanceExtend;
