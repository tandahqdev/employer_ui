import { Header } from '@/components';
import { DashBoardLayout } from '@/layout';

const DashboardDraw = () => {
  const topbar = <Header>FAQ</Header>;

  return (
    <DashBoardLayout topBar={topbar}>
      <h1>Draw screen</h1>
    </DashBoardLayout>
  );
};

export default DashboardDraw;
