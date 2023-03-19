import { PaymentTerms } from '@/models';
import { useDrawStore } from '../state';

export class DrawChangeHandler {
  static onIndexChange = (index: number) => {
    useDrawStore.setState((state) => ({
      selectedIndexs: [...state.selectedIndexs, index],
    }));
  };

  static onRepayChange = (num: number) => {
    useDrawStore.setState(() => ({
      repay: num,
    }));
  };

  static onRateChange = (num: number) => {
    useDrawStore.setState(() => ({
      rate: num,
    }));
  };

  static onTotalChange = (num: number) => {
    useDrawStore.setState(() => ({
      total: num,
    }));
  };

  static onTermChange = (val: PaymentTerms) => {
    useDrawStore.setState((state) => ({
      terms: state.terms.map((term) => {
        if (state.id === term.id) {
          term = val;
        } else {
          term = { ...term, isChecked: false };
        }

        return term;
      }),
    }));
  };
}
