import { Header } from '@/components';
import { DashBoardLayout } from '@/layout';

const DashboardFAQ = () => {
  const topbar = <Header>FAQ</Header>;

  return (
    <DashBoardLayout topBar={topbar}>
      <h1>FAQ</h1>
    </DashBoardLayout>
  );
};

export default DashboardFAQ;
