import Link from 'next/link';
import { cardExamples } from '@/store';
import { DashRoutes } from '@/utils';
import { Card } from './Card';
import { SharedCardContainer } from './SharedCardContainer';

export const CardPage = () => {
  const renderCardExample = cardExamples.map((item) => {
    return (
      <Link key={item.id} href={DashRoutes.bankCardDetail(item.id)}>
        <Card data={item} />
      </Link>
    );
  });

  return (
    <SharedCardContainer renderItems={renderCardExample} tableSection='' />
  );
};
