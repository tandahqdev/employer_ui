export class DashRoutes {
  static home = '/';
  static dashboard = '/dashboard';

  // Finance
  static dashboardFinanceOverview = `${this.dashboard}/finance`;
  static dashboardFinanceGrow = `${this.dashboardFinanceOverview}/grow`;
  static dashboardFinanceExtend = `${this.dashboardFinanceOverview}/extend`;

  // Banking
  static dashboardBankOverview = `${this.dashboard}/bank`;
  static dashboardBankAccts = `${this.dashboardBankOverview}/accounts`;
  static dashboardBankCards = `${this.dashboardBankOverview}/cards`;
  static dashboardBankPay = `${this.dashboardBankOverview}/payments`;
  static dashboardBankRepts = `${this.dashboardBankOverview}/recipients`;

  static dashboardSettings = `${this.dashboard}/settings`;
  static dashboardHelp = `${this.dashboard}/help`;
  static faq = `${this.dashboard}/faq`;
}
