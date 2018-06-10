export const apiConfig = {
  transaction_url: 'https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions',
  transaction_filters: {
    paymentType: {
      id: 1,
      title: 'Transaction Type',
      filter: 'action',
      list: ['payment', 'authorize', 'credit']
    },
    currencyCode: {
      id: 2,
      title: 'Currency',
      filter: 'currencyCode',
      list: ['USD', 'EUR', 'GBP']
    }
  }
};
