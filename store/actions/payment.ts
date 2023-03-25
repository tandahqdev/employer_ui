import { PaymentTerms } from '@/models';
import { usePaymentStore } from '../state';

export class PaymentChangeHandler {
  static onIndexChange = (index: number, remove?: boolean) => {
    usePaymentStore.setState((state) => ({
      selectedIndexs: !remove
        ? [...state.selectedIndexs, index]
        : state.selectedIndexs.filter((i) => i !== index),
    }));
  };

  static onRepayChange = (repay: number) => {
    usePaymentStore.setState(() => ({
      repay,
    }));
  };

  static onRateChange = (rate: number) => {
    usePaymentStore.setState(() => ({
      rate: rate,
    }));
  };

  static onTotalChange = (total: number) => {
    usePaymentStore.setState(() => ({
      total: total,
    }));
  };

  static onNameChange = (name: string) => {
    usePaymentStore.setState(() => ({
      name,
    }));
  };

  static onSelectedTermChange = (payment: PaymentTerms) => {
    usePaymentStore.setState((state) => ({
      selectedTerms:
        state.selectedTerms?.id === payment.id ? undefined : payment,
    }));
  };
}
