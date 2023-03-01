import financeIcon from '@/assets/images/finance.png';
import bankIcon from '@/assets/images/bank.png';
import extendIcon from '@/assets/images/extend.png';
import growIcon from '@/assets/images/grow.png';
import { NewPageItemsModel } from '@/models';
import { nanoid } from 'nanoid';

export { financeIcon, bankIcon, extendIcon, growIcon };

export const newPageItems: NewPageItemsModel[] = [
  {
    title: 'Faster',
    desc: `The average term sheet
    takes over 30 meetings to
    get. You can get yours the
    next day.`,
    id: nanoid(12),
  },
  {
    title: 'Fairer',
    desc: `The average average founding team’s stake at exit is <15%. With Tanda yours will be higher.`,
    id: nanoid(12),
  },
  {
    title: 'More flexible',
    desc: `We partner directly with you to ensure you make the right decisions for your business.`,
    id: nanoid(12),
  },
];
