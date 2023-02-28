import { Header } from '@/components';
import { DashBoardLayout } from '@/layout';

const DashboardSettings = () => {
  const topbar = <Header>Settings</Header>;

  return (
    <DashBoardLayout topBar={topbar}>
      <h1>Settings</h1>
    </DashBoardLayout>
  );
};

export default DashboardSettings;
