// this is week 3

// 1. introduction to functional programming

function currencyConverter(amount, rate) {
  return amount * rate;
}

// const amountConverted = currencyConverter(100, 1.5);
// console.log("Currency converted:", amountConverted);

const currencyOperationsWithOOP = {
  amount: 0,
  converter: function (amount, rate) {
    try {
      return amount * rate;
    } catch (error) {
      console.log(error);
    }
  },
  currency: "XAF",
};

const amount = 1500;
const rate = 1.2;
const newCurrency = "USD";

const newConversion = currencyOperationsWithOOP.converter(amount, rate);
currencyOperationsWithOOP.currency = newCurrency;
console.log(newConversion, currencyOperationsWithOOP);
