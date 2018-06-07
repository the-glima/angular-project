export interface Transaction {
  id: string;
  action: string;
  amount: number;
  brandId: number;
  currencyCode: string;
  trackingCode: string;
  card: {
    expiryMonth: number;
    expiryYear: number;
    firstSixDigits: number;
    lastFourDigits: number;
    holderName: string;
  };
}
