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

// using classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printDetails() {
    console.log(`My name is ${this.name}, and I am ${this.age} years old`);
  }
}

const Mark = new Person("Fru Mark Carrington Chei", "20");
Mark.printDetails();

// OOP Principles
// 1. Inheritance

class Student extends Person {}

const markStudent = new Student("Mark", "20");
markStudent.printDetails();
