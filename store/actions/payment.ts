import { PaymentTerms } from '@/models';
import { usePaymentStore } from '../state';

export class PaymentChangeHandler {
  static onIndexChange = (index: number) => {
    usePaymentStore.setState((state) => ({
      selectedIndexs: [...state.selectedIndexs, index],
    }));
  };

  static onRepayChange = (num: number) => {
    usePaymentStore.setState(() => ({
      repay: num,
    }));
  };

  static onRateChange = (num: number) => {
    usePaymentStore.setState(() => ({
      rate: num,
    }));
  };

  static onTotalChange = (num: number) => {
    usePaymentStore.setState(() => ({
      total: num,
    }));
  };

  static onSelectedTermChange = (term: PaymentTerms) => {
    usePaymentStore.setState(() => ({
      selectedTerms: term,
    }));
  };

  static onTermCheckedChange = (val: boolean, id: string) => {
    usePaymentStore.setState((state) => ({
      terms: state.terms.map((term) => {
        if (term.id === id) {
          return { ...term, isChecked: val };
        } else {
          return { ...term, isChecked: false };
        }
      }),

      selectedTerms: state.terms.find((term) => term.isChecked),
    }));
  };
}
