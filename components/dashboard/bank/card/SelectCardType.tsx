import { ColumnFlex } from '@/components';
import { CardType, SupportedCardType } from '@/models';
import { CardChangeHandler, useCardStore } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { Center, Icon, Text } from '@chakra-ui/react';

export const SelectCardType = ({ icon, value }: SupportedCardType) => {
  const { type } = useCardStore();

  const { bg, border, color, isDefault } =
    type === value && value === CardType.Physical
      ? {
          color: DEFAULT_STYLES.lightPurple,
          bg: DEFAULT_STYLES.lightPurpleBg,
          border: `5px solid ${DEFAULT_STYLES.lightPurple}`,
          isDefault: false,
        }
      : type === value && value === CardType.Virtual
      ? {
          color: DEFAULT_STYLES.pink,
          bg: DEFAULT_STYLES.lightPinkBg,
          border: `5px solid ${DEFAULT_STYLES.pink}`,
          isDefault: false,
        }
      : {
          color: DEFAULT_STYLES.darkGray,
          bg: DEFAULT_STYLES.grayBg,
          border: '2px solid #E4E2E2',
          isDefault: true,
        };

  return (
    <ColumnFlex
      w='381px'
      minH='215px'
      layerStyle='card'
      transition={DEFAULT_STYLES.transition}
      border={`2px solid ${isDefault ? '#E4E2E2' : color}`}
      p='4'
      gap='16'
      cursor='pointer'
      onClick={() => {
        CardChangeHandler.onTypeChange(value);
      }}
    >
      <Center
        border={border}
        rounded='full'
        h='38px'
        w='38px'
        alignSelf='flex-end'
        p='3.5'
      />

      <ColumnFlex gap='1.5'>
        <Center
          bg={bg}
          transition={DEFAULT_STYLES.transition}
          h='38px'
          w='38px'
          rounded='full'
        >
          <Icon
            as={icon}
            fontSize='1.3rem'
            transition={DEFAULT_STYLES.transition}
            color={color}
          />
        </Center>

        <Text color={DEFAULT_STYLES.darkGray} opacity={DEFAULT_STYLES.opacity}>
          Order{' '}
          <span
            style={{
              fontWeight: DEFAULT_STYLES.bold,
              textTransform: 'capitalize',
              color,
            }}
          >
            {value}
          </span>{' '}
          Card
        </Text>
      </ColumnFlex>
    </ColumnFlex>
  );
};
