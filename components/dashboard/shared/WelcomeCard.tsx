import { Text } from '@chakra-ui/react';
import { getDay } from '@/utils';
import { ColumnFlex } from '@/components/shared';
import { Header } from './Header';
import { DEFAULT_STYLES } from '@/styles';

interface Props {
  name: string;
}

export const WelcomeCard = ({ name }: Props) => {
  return (
    <ColumnFlex>
      <Header>{`Welcome back, ${name}`}</Header>
      <Text
        textStyle='desc'
        fontWeight={DEFAULT_STYLES.semibold}
        color={DEFAULT_STYLES.darkGray}
      >
        {getDay(true)}
      </Text>
    </ColumnFlex>
  );
};
