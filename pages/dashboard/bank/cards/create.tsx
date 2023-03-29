import { ColumnFlex } from '@/components';
import { DashBoardLayout } from '@/layout';
import { DEFAULT_STYLES } from '@/styles';
import { Grid, Stack, Text } from '@chakra-ui/react';

const Create = () => {
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
          border='2px solid red'
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

            <Grid
              w='full'
              border='1px solid green'
              templateColumns='repeat(2,1fr)'
            ></Grid>
          </Stack>
        </ColumnFlex>
      </Grid>
    </DashBoardLayout>
  );
};

export default Create;
