import Link from 'next/link';
import { ColumnFlex } from 'components';
import { DEFAULT_STYLES } from 'styles';
import { DashRoutes } from 'utils';
import { Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <ColumnFlex
      align='center'
      justify='center'
      minH={DEFAULT_STYLES.fullHeight}
    >
      <Link href={DashRoutes.dashboard}>
        <Button>Go to Dashboard</Button>
      </Link>
    </ColumnFlex>
  );
}
