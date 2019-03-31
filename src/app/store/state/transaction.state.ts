const data = [
  {
    action: 'INITAL STATE',
    amount: '0.00',
    brandId: '0.00',
    card: {
      expiryMonth: '01',
      expiryYear: '1999',
      firstSixDigits: '123456',
      lastFourDigits: '7890',
      holderName: 'INITAL STATE'
    },
    currencyCode: 'BRL',
    id: '7b1c2fef-a001-460b-9d9a-7a6d849b1xxx',
    trackingCode: '10022a09-5a94-4552-83de-6128f360b906'
  }
];

export interface TransactionState {
  transactions: any;
  isLoading: boolean;
  isLoaded: boolean;
}

export const initialState: TransactionState = {
  transactions: data,
  isLoading: false,
  isLoaded: false
};
