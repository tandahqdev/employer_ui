import { ColumnFlex } from '@/components';
import { CardDetails, CardType } from '@/models';
import { Circle } from '@chakra-ui/react';

interface Props extends CardDetails {
  isActive?: boolean;
  type?: CardType;
}

export const SelectCardType = ({}: Props) => {
  return (
    <ColumnFlex>
      <Circle border='1px solid red' />
    </ColumnFlex>
  );
};
