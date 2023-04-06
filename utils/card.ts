import { CardType } from '@/models';
import { DEFAULT_STYLES } from '@/styles';

export const cardColorHandler = (type: CardType) => {
  let color: string;

  if (type === CardType.Physical) {
    color = DEFAULT_STYLES.redColor;
  } else {
    color = DEFAULT_STYLES.lightBlue;
  }

  return color;
};

export const hidePin = (pin: string | number, len: number = 4) => {
  let newPin = `${pin}`;
  const length = newPin.length;

  const ans = newPin
    .split('')
    .fill('*', 0, length - len)
    .reduce((prev, cur, index) => {
      if (index !== 0 && !(index % 4)) {
        prev += ' ';
      }
      return prev + cur;
    }, '');

  return ans;
};
