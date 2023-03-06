import Link from 'next/link';
import { ColumnFlex } from '@/components';
import { DEFAULT_STYLES } from '@/styles';
import { DashRoutes } from '@/utils';
import { Text } from '@chakra-ui/react';

export const GrowHelpCard = () => {
  return (
    <ColumnFlex
      width='334px'
      bgColor={DEFAULT_STYLES.white}
      border={DEFAULT_STYLES.border}
      borderRadius={DEFAULT_STYLES.borderRadius}
      align='center'
      justifyContent='center'
      minH='127px'
      maxH='127px'
      gap='4'
    >
      <Text
        textStyle='title'
        fontSize='1rem'
        color={DEFAULT_STYLES.primaryHeaderColor}
        alignSelf='flex-start'
        pl='10'
      >
        Need some help?
      </Text>

      <Text textStyle='desc' color={DEFAULT_STYLES.darkGray}>
        You can{' '}
        <span
          style={{
            color: DEFAULT_STYLES.lightPurple,
          }}
        >
          <Link href={DashRoutes.dashboardHelp}>book a call</Link>
        </span>{' '}
        with one of our experts
      </Text>
    </ColumnFlex>
  );
};
