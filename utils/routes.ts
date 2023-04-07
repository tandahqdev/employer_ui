export class DashRoutes {
  static home = '/';
  static dashboard = '/dashboard';

  // Financing
  static financeOverview = `${this.dashboard}/finance`;
  static financeGrow = `${this.financeOverview}/grow`;
  static financeExtend = `${this.financeOverview}/extend`;

  // Banking
  static bankOverview = `${this.dashboard}/bank`;
  static bankAccts = `${this.bankOverview}/accounts`;
  static bankAcctsStatements = `${this.bankAccts}/statements`;
  static bankCards = `${this.bankOverview}/cards`;
  static bankCardsCreate = `${this.bankOverview}/cards/create`;

  static bankCardDetail = (id: string) => `${this.bankOverview}/cards/${id}`;

  static bankPay = `${this.bankOverview}/payments`;
  static bankRepts = `${this.bankOverview}/recipients`;

  static settings = `${this.dashboard}/settings`;
  static help = `${this.dashboard}/help`;
  static faq = `${this.dashboard}/faq`;
  static draw = `${this.dashboard}/draw`;
  static expense = `${this.dashboard}/expense`;
}
