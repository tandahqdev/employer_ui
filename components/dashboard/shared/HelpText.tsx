import Link from 'next/link';
import { DEFAULT_STYLES } from '@/styles';
import { DashRoutes } from '@/utils';
import { Text } from '@chakra-ui/react';

export const HelpText = () => {
  return (
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
  );
};
