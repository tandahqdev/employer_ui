export interface DrawModel {
  selectedIndexs: DrawStatus[];
  terms: PaymentTerms[];
  repay: number;
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

export enum DrawStatus {
  Initialisation = 0,
  Conclusion = 1,
}