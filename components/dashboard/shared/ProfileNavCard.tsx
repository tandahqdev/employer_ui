import { ColumnFlex, Desc } from '@/components';
import { Header } from './Header';
import { DEFAULT_STYLES } from '@/styles';
import { IProps } from '@/models';

export const ProfileNavCard = ({ title, desc }: IProps) => {
  return (
    <ColumnFlex>
      <Header>{title}</Header>
      <Desc
        fontWeight={DEFAULT_STYLES.semibold}
        color={DEFAULT_STYLES.darkGray}
      >
        {desc}
      </Desc>
    </ColumnFlex>
  );
};
