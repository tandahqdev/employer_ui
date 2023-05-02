import { DEFAULT_STYLES } from 'styles';
import { DashRoutes } from 'utils';
import { useRouter } from 'next/router';

export const useColor = (addBg?: boolean) => {
  const router = useRouter();
  const isExpense = router.pathname === DashRoutes.expense;
  const color = isExpense ? DEFAULT_STYLES.pink : DEFAULT_STYLES.lightPurple;

  const bg = isExpense
    ? DEFAULT_STYLES.lightPinkBg
    : DEFAULT_STYLES.lightPurpleBg;

  const colors = addBg ? { color, bg } : { color };

  return colors;
};
