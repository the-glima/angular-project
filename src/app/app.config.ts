export const apiConfig = {
  transaction_url: 'https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions',
  transaction_filters: {
    paymentType: {
      title: 'Transaction Type',
      list: ['payment', 'authorize', 'credit']
    },
    currencyCode: {
      title: 'Currency',
      list: ['USD', 'EUR', 'GBP']
    }
  }
};
