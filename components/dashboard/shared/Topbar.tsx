import { ColumnFlex } from '@/components/shared/ColumnFlex';
import { DEFAULT_STYLES } from '@/styles';
import { Center, Flex, HStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  header?: ReactNode;
}

export const Topbar = ({ header }: Props) => {
  return (
    <Flex
      w={DEFAULT_STYLES.fullWidth}
      h='104px'
      position='fixed'
      bg={DEFAULT_STYLES.white}
      borderBottom='1px solid rgba(218, 220, 224, 0.83)'
      align='center'
      justify='center'
      zIndex={5}
    >
      <HStack
        width={DEFAULT_STYLES.containerWidth}
        align='center'
        justify='space-between'
      >
        <ColumnFlex>{header}</ColumnFlex>

        <Center
          width='54px'
          height='54px'
          bgColor={DEFAULT_STYLES.lightPurple}
          borderRadius='full'
        >
          <Center
            width='16px'
            height='16px'
            bg={DEFAULT_STYLES.lightGray}
            borderRadius='full'
          />
        </Center>
      </HStack>
    </Flex>
  );
};
