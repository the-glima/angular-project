const faker = require("faker");

class DataBase {
  get allData() {
    return this.createData();
  }

  createData() {
    const createFakeData = () => {
      const currencyCodes = ["EUR", "GBP", "USD"];
      const paymentTypes = ["credit", "transfer", "other"];

      return {
        id: faker.datatype.uuid(),
        action: faker.random.arrayElement(paymentTypes),
        amount: parseInt(Math.random() * 1000, 10),
        brandId: parseInt(Math.random() * 1000, 10),
        currencyCode: faker.random.arrayElement(currencyCodes),
        trackingCode: faker.datatype.uuid(),
        card: {
          expiryMonth: this.printMonth(
            faker.datatype.number({ min: 1, max: 12 })
          ),
          expiryYear: faker.datatype.number({ min: 2020, max: 3000 }),
          firstSixDigits: parseInt(Math.random() * 100000, 10),
          lastFourDigits: faker.datatype.number({ min: 1000, max: 9999 }),
          holderName: faker.name.findName()
        }
      };
    };

    const data = [...Array(20)].map(() => createFakeData());

    return { data };
  }

  printMonth(number) {
    if (number <= 9) {
      return "0" + number;
    }
  }
}

module.exports = DataBase;
