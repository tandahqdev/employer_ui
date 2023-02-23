import {
  FormContainer,
  BasicInfoFormCard,
  EmployeeFormCard,
  CompensationFormCard,
} from '@/components';
import { DashBoardLayout } from '@/layout';

const Dashboard = () => {
  return (
    <DashBoardLayout>
      <FormContainer>
        <BasicInfoFormCard />
        <EmployeeFormCard />
        <CompensationFormCard />
      </FormContainer>
    </DashBoardLayout>
  );
};

export default Dashboard;
