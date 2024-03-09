// Object Oriented Programming (OOP)

// task: shoe calculator

// using functional programming
function shoeCalculator(shoeNumber, tax) {
  return shoeNumber * tax;
}

console.log("The total is: ", shoeCalculator(100, 1.5));

// using objects
let shoeCalOOP = {
  shoe: 100,
  tax: 1.5,
  totalPrice: () => {
    console.log("The total is: ", this.shoe * this.tax);
  },
};

shoeCalOOP.totalPrice();
