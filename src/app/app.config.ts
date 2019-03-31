import { environment } from '@env/environment';

export const apiConfig = {
  transaction_api_url: environment.transaction_api_url,
  transaction_api_filters: {
    paymentType: {
      id: 1,
      title: 'Transaction Type',
      filter: 'action',
      list: ['payment', 'credit']
    },
    currencyCode: {
      id: 2,
      title: 'Currency',
      filter: 'currencyCode',
      list: ['USD', 'EUR', 'GBP']
    }
  }
};
