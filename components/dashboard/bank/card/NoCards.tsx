import { ColumnFlex } from '@/components';
import { DEFAULT_STYLES } from '@/styles';
import { Center, Grid, Icon, Text } from '@chakra-ui/react';
import { BsReceipt } from 'react-icons/bs';

export const NoCards = () => {
  return (
    <Grid
      w={DEFAULT_STYLES.fullWidth}
      px={DEFAULT_STYLES.mobilePx}
      minH='500px'
      layerStyle='card'
    >
      <ColumnFlex alignSelf='center' justifySelf='center' alignItems='center'>
        <Center
          bg={DEFAULT_STYLES.lightPurpleBg}
          h='38px'
          w='38px'
          rounded='6px'
        >
          <Icon as={BsReceipt} fontSize='1.4rem' />
        </Center>

        <Text textStyle='header' color={DEFAULT_STYLES.primaryHeaderColor}>
          No Cards found
        </Text>

        <Text textStyle='desc'>You don’t have any cards yet.</Text>
      </ColumnFlex>
    </Grid>
  );
};
