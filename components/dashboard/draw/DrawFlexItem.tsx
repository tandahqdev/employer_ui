import { IProps } from '@/models';
import { DEFAULT_STYLES } from '@/styles';
import { Flex, Text } from '@chakra-ui/react';

export const DrawFlexItem = ({ title, desc }: IProps) => {
  return (
    <Flex w={DEFAULT_STYLES.fullWidth} align='center' justify='space-between'>
      <Text textStyle='subtitle' color={DEFAULT_STYLES.darkGray}>
        {title}
      </Text>

      <Text textStyle='subtitle' color={DEFAULT_STYLES.darkGray}>
        {desc}
      </Text>
    </Flex>
  );
};
