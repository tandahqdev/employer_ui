import { IProps } from '@/models';
import { DEFAULT_STYLES } from '@/styles';
import { Flex, FlexProps, Text } from '@chakra-ui/react';

interface Props extends FlexProps, IProps {}

export const DrawFlexItem = ({ title, desc, ...r }: Props) => {
  return (
    <Flex
      w={DEFAULT_STYLES.fullWidth}
      align='center'
      justify='space-between'
      {...r}
    >
      <Text textStyle='bolderBody'>{title}</Text>

      <Text textStyle='bolderBody'>{desc}</Text>
    </Flex>
  );
};
