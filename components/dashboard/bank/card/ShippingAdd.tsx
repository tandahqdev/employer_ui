import { ColumnFlex, Desc, InputComp } from '@/components';
import { CardChangeHandler } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import {
  Center,
  Checkbox,
  Grid,
  GridItem,
  Stack,
  Text,
} from '@chakra-ui/react';

export const ShippingAdd = () => {
  const cols = { base: 2, md: 1 };

  return (
    <Stack gap='8'>
      <ColumnFlex gap='5'>
        <Text textStyle='header'>Shipping address</Text>

        <Checkbox variant='dark'>Use Business’ Address on file</Checkbox>
      </ColumnFlex>

      <Grid
        w='full'
        templateColumns={DEFAULT_STYLES.gridColumns}
        columnGap='30px'
        rowGap='40px'
      >
        <GridItem colSpan={cols.base}>
          <InputComp
            label='Street Address   *'
            placeholder='100 Crosby Street'
            inputStyle={{
              bg: DEFAULT_STYLES.grayBg,
            }}
            onChange={(e) => {
              CardChangeHandler.onStreetChange(e);
            }}
          />
        </GridItem>

        <GridItem colSpan={cols.base}>
          <InputComp
            placeholder='Suite 607'
            label='Apartment/Suite   *'
            inputStyle={{
              bg: DEFAULT_STYLES.grayBg,
              isRequired: true,
            }}
            onChange={(e) => {
              CardChangeHandler.onSuiteChange(e);
            }}
          />
        </GridItem>

        <GridItem colSpan={cols}>
          <InputComp
            label='City   *'
            placeholder='New York'
            inputStyle={{
              bg: DEFAULT_STYLES.grayBg,
            }}
            onChange={(e) => {
              CardChangeHandler.onCityChange(e);
            }}
          />
        </GridItem>

        <GridItem colSpan={cols}>
          <InputComp
            label='State   *'
            placeholder='Enter State'
            inputStyle={{
              bg: DEFAULT_STYLES.grayBg,
            }}
            onChange={(e) => {
              CardChangeHandler.onStateChange(e);
            }}
          />
        </GridItem>

        <GridItem colSpan={cols}>
          <InputComp
            label='Postal Code   *'
            placeholder='10076'
            inputStyle={{
              bg: DEFAULT_STYLES.grayBg,
            }}
            onChange={(e) => {
              CardChangeHandler.onPostalChange(e);
            }}
          />
        </GridItem>

        <GridItem colSpan={cols}>
          <InputComp
            label='Country   *'
            placeholder='Nigeria'
            inputStyle={{
              bg: DEFAULT_STYLES.grayBg,
            }}
            onChange={(e) => {
              CardChangeHandler.onCountryChange(e);
            }}
          />
        </GridItem>
      </Grid>

      <Center
        bg='rgba(228, 226, 226, 0.08)'
        w={{ base: 'full', md: '568px' }}
        minH='86px'
        border={`3px solid ${DEFAULT_STYLES.borderColor}`}
        borderRadius='10px'
      >
        <Desc fontSize='1rem' maxW='80%' textAlign='center'>
          Your default account will be changed -{' '}
          <span
            style={{
              fontWeight: DEFAULT_STYLES.mediumbold,
              color: DEFAULT_STYLES.darkGray,
            }}
          >
            #2,000.00 VAT exclusive
          </span>{' '}
          for the physical card
        </Desc>
      </Center>
    </Stack>
  );
};
