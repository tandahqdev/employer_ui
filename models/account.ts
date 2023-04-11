export interface AccountModel {
  name: string;
  amount: string;
  accountNumber: string;
  id: string;
}

export enum CurrencyType {
  NGN = 'NGN',
  EUR = 'EUR',
  USD = 'USD',
  GBP = 'GBP',
}
