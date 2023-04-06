import Link from 'next/link';
import { DEFAULT_STYLES } from '@/styles';
import { DashRoutes } from '@/utils';
import { useSharedColor } from '@/customHooks';
import { Desc } from '@/components';

export const HelpText = () => {
  const color = useSharedColor();

  return (
    <Desc color={DEFAULT_STYLES.darkGray}>
      You can{' '}
      <span
        style={{
          color: color,
        }}
      >
        <Link href={DashRoutes.help}>book a call</Link>
      </span>{' '}
      with one of our experts
    </Desc>
  );
};
