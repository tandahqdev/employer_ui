export interface PaymentModel {
  selectedIndexs: PaymentStatus[];
  terms: PaymentTerms[];
  repay: number;
  selectedTerms?: PaymentTerms;
  rate: number;
  total: number;
  id: string;
  name?: string;
}

export interface PaymentTerms {
  month: number;
  price: number;
  id: string;
}

export enum PaymentStatus {
  Initialisation = 0,
  Conclusion = 1,
}
