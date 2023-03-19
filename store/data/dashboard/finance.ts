import { TransactionData, TransactionStatus } from '@/models';

export const tableItems: TransactionData[] = [
  new TransactionData({
    date: new Date(),
    outstanding: 223549,
    repayment: 223549,
    status: TransactionStatus.Processing,
  }),
  new TransactionData({
    date: new Date(),
    outstanding: 223549,
    repayment: 223549,
    status: TransactionStatus.Upcoming,
  }),
  new TransactionData({
    date: new Date(),
    outstanding: 223549,
    repayment: 223549,
    status: TransactionStatus.Upcoming,
  }),
  new TransactionData({
    date: new Date(),
    outstanding: 223549,
    repayment: 223549,
    status: TransactionStatus.Upcoming,
  }),
];
