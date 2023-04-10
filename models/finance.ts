import { getDay } from '@/utils';

export interface TransactionModel {
  date: Date;
  status: TransactionStatus;
  repayment: number;
  outstanding: number;
}

export enum TransactionStatus {
  Processing = 'processing',
  Upcoming = 'upcoming',
}

export class TransactionData implements TransactionModel {
  constructor(data: TransactionModel) {
    this.date = data.date;
    this.status = data.status;
    this.repayment = data.repayment;
    this.outstanding = data.outstanding;
  }

  date: Date;
  status: TransactionStatus;
  repayment: number;
  outstanding: number;

  get dueDate(): string {
    return getDay('medium');
  }

  get paymentData() {
    return {
      repay: this.repayment.toLocaleString(),
      outstanding: this.outstanding.toLocaleString(),
    };
  }

  get statusBg(): boolean {
    if (this.status === TransactionStatus.Processing) {
      return true;
    } else {
      return false;
    }
  }
}
