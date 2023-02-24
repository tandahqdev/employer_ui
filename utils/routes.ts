export class DashRoutes {
  static home = '/';
  static dashboard = '/dashboard';

  // TODO: Change to dynamic route system
  // Finance
  static dashboardFinanceOverview = `${this.dashboard}/finance/overview`;
  static dashboardFinanceGrow = `${this.dashboard}/finance/grow`;
  static dashboardFinanceExtend = `${this.dashboard}/finance/extend`;

  // Banking

  static dashboardBankOverview = `${this.dashboard}/bank/overview`;
  static dashboardBankAccts = `${this.dashboard}/bank/accounts`;
  static dashboardBankCards = `${this.dashboard}/bank/cards`;
  static dashboardBankPay = `${this.dashboard}/bank/payments`;
  static dashboardBankRepts = `${this.dashboard}/bank/recipients`;

  static dashboardSettings = `${this.dashboard}/settings`;
  static dashboardHelp = `${this.dashboard}/help`;
  static faq = `${this.home}faq`;
}
