import { ColumnFlex } from '@/components';
import { NavItemProps } from '@/models';
import { DEFAULT_STYLES } from '@/styles';
import { Text } from '@chakra-ui/react';
import { NavItem } from './NavItem';

interface Props {
  header: string;
  list: NavItemProps[];
}

export const NavCard = ({ header, list }: Props) => {
  list;
  const renderList = list.map((e) => {
    return <NavItem {...e} key={e.id} />;
  });

  return (
    <>
      <ColumnFlex>
        <Text
          fontSize='10px'
          fontWeight={400}
          textTransform='uppercase'
          color={DEFAULT_STYLES.darkGray}
          pl='0.5'
        >
          {header}
        </Text>

        {renderList}
      </ColumnFlex>
    </>
  );
};
