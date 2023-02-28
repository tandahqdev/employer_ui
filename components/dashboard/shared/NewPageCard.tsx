import { ColumnFlex } from '@/components';
import { NewPageProps } from '@/models';
import { DEFAULT_STYLES } from '@/styles';
import { GridItem, Text } from '@chakra-ui/react';

interface Props extends NewPageProps {
  btnText?: string;
  onClick?: () => void;
}

export const NewPageCard = ({ desc, title }: Props) => {
  return (
    <GridItem colSpan={2}>
      <ColumnFlex
        bg={DEFAULT_STYLES.white}
        border={`1px solid ${DEFAULT_STYLES.borderColor}`}
        rounded={16}
        minH='442px'
        pt='30px'
        pb='50px'
        px='40px'
        w='80%'
      >
        <Text
          textStyle='header'
          fontSize='1.5rem'
        >{`Welcome to Tanda ${title}`}</Text>

        <Text color={DEFAULT_STYLES.primaryColor} opacity={0.4} maxW='600px'>
          {desc}
        </Text>
      </ColumnFlex>
    </GridItem>
  );
};
