import { ColumnFlex, Desc } from '@/components';
import { Header } from './Header';
import { DEFAULT_STYLES } from '@/styles';

interface Props {
  name: string;
  desc?: string;
}

export const WelcomeCard = ({ name, desc }: Props) => {
  return (
    <ColumnFlex>
      <Header>{`Welcome back, ${name}`}</Header>
      <Desc
        fontWeight={DEFAULT_STYLES.semibold}
        color={DEFAULT_STYLES.darkGray}
      >
        {desc}
      </Desc>
    </ColumnFlex>
  );
};
