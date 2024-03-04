// this is week 3

// 1. introduction to functional programming

function currencyConverter(amount, rate) {
  return amount * rate;
}

// const amountConverted = currencyConverter(100, 1.5);
// console.log("Currency converted:", amountConverted);

const currencyOperationsWithOOP = {
  amount: 0,
  converter: function (amount, rate, currency) {
    try {
      if (typeof amount === "number" && typeof currency === "string") {
        this.currency = currency;
        return amount * rate;
      } else {
        throw new TypeError();
      }
    } catch (error) {
      console.log(error);
    }
  },
  currency: "XAF",
};

const amount = 1500;
const rate = 1.2;
const newCurrency = "USD";
console.log(typeof amount, typeof rate, typeof newCurrency);

const newConversion = currencyOperationsWithOOP.converter(
  amount,
  rate,
  newCurrency
);
console.log("Amount converted is:", newConversion);
console.log(currencyOperationsWithOOP);
