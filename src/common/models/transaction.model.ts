import { Card } from './card.model';

export interface Transaction {
  id: string;
  action: string;
  amount: string;
  brandId: string;
  currencyCode: string;
  trackingCode: string;
  card: Card;
}

export interface TransactionResponse {
  data: Transaction[];
}
