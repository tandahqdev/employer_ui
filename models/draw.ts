export interface PaymentModel {
  selectedIndexs: PaymentStatus[];
  terms: PaymentTerms[];
  repay: number;
  selectedTerms?: PaymentTerms;
  rate: number;
  total: number;
  id: string;
}

export interface PaymentTerms {
  isChecked?: boolean;
  month: number;
  price: number;
  id: string;
}

export enum PaymentStatus {
  Initialisation = 0,
  Conclusion = 1,
}
