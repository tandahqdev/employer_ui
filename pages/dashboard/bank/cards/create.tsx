import { ColumnFlex, SelectCardType } from '@/components';
import { DashBoardLayout } from '@/layout';
import { useCardStore } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { Grid, Stack, Text } from '@chakra-ui/react';

const Create = () => {
  const { supportedTypes } = useCardStore();

  const renderTypes = supportedTypes.map((type) => {
    return <SelectCardType key={type.id} {...type} />;
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
          w='80%'
          minH='400px'
          mt='80px'
          mb='120px'
        >
          <Stack>
            <ColumnFlex>
              <Text textStyle='darkTitle'>Create card</Text>

              <Text
                textStyle='desc'
                fontWeight={DEFAULT_STYLES.mediumbold}
                color={DEFAULT_STYLES.primaryHeaderColor}
              >
                Please select card type
              </Text>
            </ColumnFlex>

            <Grid w='max-content' templateColumns='repeat(2,1fr)' gap='70px'>
              {renderTypes}
            </Grid>
          </Stack>
        </ColumnFlex>
      </Grid>
    </DashBoardLayout>
  );
};

export default Create;
