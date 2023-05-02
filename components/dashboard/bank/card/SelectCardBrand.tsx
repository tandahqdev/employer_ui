import Image from 'next/image';
import { ColumnFlex } from 'components';
import { CardType, SupportedCardBrand } from 'models';
import { CardChangeHandler, useCardStore } from 'store';
import { DEFAULT_STYLES } from 'styles';
import { Center, Text } from '@chakra-ui/react';

export const SelectCardBrand = ({ value, image, text }: SupportedCardBrand) => {
  const { brand, type } = useCardStore();

  const { border, color, isDefault } =
    brand === value && type === CardType.Physical
      ? {
          color: DEFAULT_STYLES.lightPurple,
          border: `4px solid ${DEFAULT_STYLES.lightPurple}`,
          isDefault: false,
        }
      : brand === value && type === CardType.Virtual
      ? {
          color: DEFAULT_STYLES.pink,
          border: `4px solid ${DEFAULT_STYLES.pink}`,
          isDefault: false,
        }
      : {
          color: DEFAULT_STYLES.darkGray,
          border: '2px solid #E4E2E2',
          isDefault: true,
        };

  return (
    <ColumnFlex
      w={{ base: '274px', md: 'full', lg: '274px' }}
      minH='125px'
      layerStyle='card'
      transition={DEFAULT_STYLES.transition}
      border={`2px solid ${isDefault ? '#E4E2E2' : color}`}
      cursor='pointer'
      onClick={() => {
        CardChangeHandler.onBrandChange(value);
      }}
      justifyContent='center'
      position='relative'
    >
      <Center
        border={border}
        position='absolute'
        rounded='full'
        right='4'
        top='4'
        h='18px'
        w='18px'
        alignSelf='flex-end'
      />

      <ColumnFlex alignSelf='center'>
        <Image src={image} alt={value} />

        {text && (
          <Text
            textStyle='bolderBody'
            color={DEFAULT_STYLES.primaryHeaderColor}
          >
            {text}
          </Text>
        )}
      </ColumnFlex>
    </ColumnFlex>
  );
};
