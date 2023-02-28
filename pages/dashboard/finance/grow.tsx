import { Header } from '@/components';
import { DashBoardLayout } from '@/layout';
import React from 'react';

const FinanceGrow = () => {
  const topbar = <Header>Finance Grow</Header>;

  return (
    <DashBoardLayout topBar={topbar}>
      <h1>Finance Grow</h1>
    </DashBoardLayout>
  );
};

export default FinanceGrow;
