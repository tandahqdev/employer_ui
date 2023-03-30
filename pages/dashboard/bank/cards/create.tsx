import {
  ColumnFlex,
  InputComp,
  SelectCardBrand,
  SelectCardType,
} from '@/components';
import { DashBoardLayout } from '@/layout';
import { CardType } from '@/models';
import { useCardStore } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { Button, Flex, Grid, Select, Stack, Text } from '@chakra-ui/react';

const Create = () => {
  const { supportedTypes, type, supportedBrands } = useCardStore();
  const isVirtual = type === CardType.Virtual;

  const renderTypes = supportedTypes.map((type) => {
    return <SelectCardType key={type.id} {...type} />;
  });

  const renderBrands = supportedBrands.map((brand) => {
    return <SelectCardBrand {...brand} key={brand.id} />;
  });

  return (
    <DashBoardLayout showBckBtn otherBtn={true}>
      <Grid
        w={DEFAULT_STYLES.fullWidth}
        mx={DEFAULT_STYLES.mobilePx}
        minH='500px'
        layerStyle='card'
      >
        <ColumnFlex
          alignSelf='center'
          justifySelf='center'
          minW={{ base: 'full', lg: '854px' }}
          minH='400px'
          mt='80px'
          mb='120px'
          gap='5'
        >
          <Stack gap='8'>
            <ColumnFlex>
              <Text textStyle='header'>Create card</Text>

              <Text
                textStyle='desc'
                fontWeight={DEFAULT_STYLES.mediumbold}
                color={DEFAULT_STYLES.primaryHeaderColor}
                opacity={DEFAULT_STYLES.opacity}
              >
                Please select card type
              </Text>
            </ColumnFlex>

            <Grid w='full' templateColumns='repeat(2,1fr)' gap='75px'>
              {renderTypes}
            </Grid>
          </Stack>

          {type && (
            <Stack pt='5' gap='5'>
              <Text textStyle='subtitle' opacity={DEFAULT_STYLES.opacity}>
                Card information
              </Text>

              <ColumnFlex gap='7' pb='4'>
                <Text textStyle='subtitle' opacity={DEFAULT_STYLES.opacity}>
                  Card brand
                </Text>

                <Grid
                  w='full'
                  templateColumns='repeat(3,1fr)'
                  alignItems='flex-start'
                  gridAutoColumns='1fr'
                  gap='4'
                >
                  {renderBrands}
                </Grid>
              </ColumnFlex>

              <ColumnFlex gap='6'>
                {isVirtual && (
                  <InputComp
                    label='Card nickname'
                    inputStyle={{
                      bg: DEFAULT_STYLES.grayBg,
                    }}
                    options={{
                      custom(e) {
                        console.log(e);
                      },
                    }}
                  />
                )}

                <Grid
                  w={DEFAULT_STYLES.fullWidth}
                  templateColumns='repeat(2,1fr)'
                  gap='5'
                >
                  <InputComp label='Associated account'>
                    <Select
                      size='md'
                      bg={DEFAULT_STYLES.grayBg}
                      placeholder='Select an account'
                    ></Select>
                  </InputComp>

                  <InputComp label='Currency'>
                    <Select
                      size='md'
                      bg={DEFAULT_STYLES.grayBg}
                      placeholder='US Dollars - USD'
                    ></Select>
                  </InputComp>
                </Grid>

                {isVirtual && (
                  <InputComp
                    label='Amount to fund'
                    inputStyle={{
                      bg: DEFAULT_STYLES.grayBg,
                    }}
                    options={{
                      custom(e) {
                        console.log(e);
                      },
                    }}
                  />
                )}
              </ColumnFlex>
            </Stack>
          )}

          <Flex align='center' gap='3' mt='28'>
            {!isVirtual && (
              <Button variant='noBgBtn' size='smPadding'>
                Discard
              </Button>
            )}

            <Button size='smPadding'>
              {isVirtual ? 'Create card' : 'Continue'}
            </Button>
          </Flex>
        </ColumnFlex>
      </Grid>
    </DashBoardLayout>
  );
};

export default Create;
