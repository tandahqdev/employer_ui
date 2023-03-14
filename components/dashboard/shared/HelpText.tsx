import Link from 'next/link';
import { DEFAULT_STYLES } from '@/styles';
import { DashRoutes } from '@/utils';
import { Text } from '@chakra-ui/react';
import { useSharedColor } from '@/customHooks';

export const HelpText = () => {
  const color = useSharedColor();

  return (
    <Text textStyle='desc' color={DEFAULT_STYLES.darkGray}>
      You can{' '}
      <span
        style={{
          color: color,
        }}
      >
        <Link href={DashRoutes.dashboardHelp}>book a call</Link>
      </span>{' '}
      with one of our experts
    </Text>
  );
};
