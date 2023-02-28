import { ColumnFlex } from '@/components';
import { DEFAULT_STYLES } from '@/styles';
import { Button, GridItem, Text } from '@chakra-ui/react';

export const NewBanner = () => {
  return (
    <GridItem colSpan={2} display='flex'>
      <ColumnFlex
        bg={DEFAULT_STYLES.white}
        border={`1px solid ${DEFAULT_STYLES.borderColor}`}
        rounded={16}
        flex='1'
        align='center'
      >
        <Text>Supercharge your growth</Text>
        <Text>
          In order to complete your account setup and receive your funding
          offer, please connect your bank account, accounting platform, and
          payment platform
        </Text>

        <Button>Connect your data</Button>
        <Button variant='textBtn'>Talk to our team</Button>
      </ColumnFlex>
    </GridItem>
  );
};
