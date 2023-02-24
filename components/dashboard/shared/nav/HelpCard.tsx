import { ColumnFlex } from '@/components/shared';
import { Text } from '@chakra-ui/react';

export const HelpCard = () => {
  return (
    <ColumnFlex>
      <Text>Need help</Text>
      <Text>
        You can <span>get in touch</span> with one of our experts or visit our
        <span> FAQ</span>
      </Text>
    </ColumnFlex>
  );
};
