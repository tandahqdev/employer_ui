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

  static onTermCheckedChange = (val: boolean, id: string) => {
    useDrawStore.setState((state) => ({
      terms: state.terms.map((term) => {
        if (term.id === id) {
          return { ...term, isChecked: val };
        } else {
          return { ...term, isChecked: false };
        }
      }),
    }));
  };
}
