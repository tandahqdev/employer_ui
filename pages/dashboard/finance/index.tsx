import { Header } from '@/components';
import { DashBoardLayout } from '@/layout';

const FinanceOverview = () => {
  const topbar = <Header>Hello!</Header>;

  return (
    <DashBoardLayout topBar={topbar}>
      <h1>Finance Overview</h1>
    </DashBoardLayout>
  );
};

export default FinanceOverview;
