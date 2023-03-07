import financeIcon from '@/assets/images/finance.png';
import bankIcon from '@/assets/images/bank.png';
import extendIcon from '@/assets/images/extend.png';
import growIcon from '@/assets/images/grow.png';
import fairerIcon from '@/assets/images/fairer.png';
import fasterIcon from '@/assets/images/faster.png';
import maskIcon from '@/assets/images/mask.png';
import credit from '@/assets/images/credit.png';
import rate from '@/assets/images/rate.png';
import termcap from '@/assets/images/termcap.png';
import { NewPageItemsModel } from '@/models';
import { nanoid } from 'nanoid';

export { financeIcon, bankIcon, extendIcon, growIcon, credit, rate, termcap };

export const newPageItems: NewPageItemsModel[] = [
  {
    title: 'Faster',
    desc: `The average term sheet
    takes over 30 meetings to
    get. You can get yours the
    next day.`,
    id: nanoid(12),
    icon: fasterIcon,
  },
  {
    title: 'Fairer',
    desc: `The average average founding team’s stake at exit is <15%. With Tanda yours will be higher.`,
    id: nanoid(12),
    icon: fairerIcon,
  },
  {
    title: 'More flexible',
    desc: `We partner directly with you to ensure you make the right decisions for your business.`,
    id: nanoid(12),
    icon: maskIcon,
  },
];
