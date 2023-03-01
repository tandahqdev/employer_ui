import { Header } from '@/components';
import { DashBoardLayout } from '@/layout';

const DashboardHelp = () => {
  const topbar = <Header>Help</Header>;

  return (
    <DashBoardLayout topBar={topbar}>
      <h1>Help</h1>
    </DashBoardLayout>
  );
};

export default DashboardHelp;
