export const PaymentSession = {
  merchantName: "Test merchant",
  currency: "GBP",
  amount: "1.00",
  reference: "test reference",

  logo: "https://test-static.yaspa.com/banks/logos/monzo.svg  ",
};

export type Bank = {
  key: string;
  bankName: string;
  iconName: string;
  fastBank: boolean;
};
