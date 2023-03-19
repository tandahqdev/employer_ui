export interface DrawModel {
  selectedIndexs: number[];
  term: PaymentTerms[];
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
