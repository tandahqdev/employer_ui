import { ColumnFlex } from '@/components/shared';
import { sharedGridStyles } from '@/styles';
import { Checkbox, Grid, Stack, Text } from '@chakra-ui/react';

export const ShippingAdd = () => {
  return (
    <Stack gap='8'>
      <ColumnFlex>
        <Text textStyle='header'>Shipping address</Text>

        <Checkbox variant='dark'>Use Business’ Address on file</Checkbox>
      </ColumnFlex>

      <Grid
        w='full'
        templateColumns={sharedGridStyles.gridTemplateColumns}
        gap={{ base: '30px', lg: '75px' }}
      ></Grid>
    </Stack>
  );
};
