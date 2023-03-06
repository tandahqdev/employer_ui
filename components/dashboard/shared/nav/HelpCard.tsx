import Link from 'next/link';
import { ColumnFlex } from '@/components/shared';
import { DEFAULT_STYLES } from '@/styles';
import { DashRoutes } from '@/utils';
import { Text } from '@chakra-ui/react';

// ! Remember to add flex 1 when working on admin and other dashboard sidebars
export const HelpCard = () => {
  return (
    <ColumnFlex
      ml='30px'
      mr='10px'
      mb={{ base: '1', xl: '15px', '2xl': '30px' }}
      mt='20px'
      p='2'
      background='#EFF1F2'
      borderRadius={5}
    >
      <Text
        fontSize={DEFAULT_STYLES.smFontSize}
        fontWeight={DEFAULT_STYLES.mediumbold}
      >
        Need help?
      </Text>

      <Text textStyle='info'>
        You can{' '}
        <span
          style={{
            color: DEFAULT_STYLES.lightPurple,
          }}
        >
          <Link href={DashRoutes.dashboardHelp}>get in touch</Link>
        </span>{' '}
        with one of our experts or visit our
        <span
          style={{
            color: DEFAULT_STYLES.lightPurple,
          }}
        >
          <Link href={DashRoutes.faq}> {'  '}FAQ</Link>
        </span>
      </Text>
    </ColumnFlex>
  );
};
