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

// OOP exercise

class Pen {
  constructor(name, color, thickness, writtenContent) {
    this.name = name;
    this.color = color;
    this.thickness = thickness;
    this.writtenContent = writtenContent;
  }
  writeSomething() {
    console.log(
      this.name,
      "pen with color",
      this.color,
      "wrote the content, ",
      this.writtenContent
    );
  }
}

// inheritance
class SchneiderPen extends Pen {}

// abstraction and polymorphism
class Pencil extends Pen {
  drawSomething() {
    super.writeSomething();
    console.log("All pencils has", this.color, "color");
  }
}

// encapsulation

// const testPenOne = new Pen("bic", "black", "20mm", "hello world");
// testPenOne.writeSomething();

// const testSchneiderPen = new SchneiderPen(
//   "schneider",
//   "blue",
//   "30mm",
//   "Hello world"
// );
// testSchneiderPen.writeSomething();

// const testPencil = new Pencil("HB", "black", "15mm", "I drew a hat");
// testPencil.drawSomething();

// constructors
const date = new Date();
console.log(date);

const footballer = {
  name: "Mark",
  position: "striker",
  goals: 100,
};

let messiFootballer = Object.create(footballer);
// messiFootballer.name = "Messi";
// messiFootballer.position = "dribbler";
// messiFootballer.goals = "100+";
console.log(
  messiFootballer.name,
  messiFootballer.position,
  messiFootballer.goals
);

class Point {
  constructor(xCord, yCord, xTranslateStatus, yTranslateStatus, xTVal, yTVal) {
    this.xCord = xCord;
    this.yCord = yCord;
    this.xTranslateStatus = xTranslateStatus;
    this.yTranslateStatus = yTranslateStatus;
    this.xTVal = xTVal;
    this.yTVal = yTVal;
  }

  printPoint() {
    console.log(`The point is: x: ${this.xCord} and y: ${this.yCord}`);
  }

  pointTranslation() {
    if (this.xTranslateStatus === true && this.yTranslateStatus === true) {
      console.log(
        `The point went from ${this.xCord} and ${this.yCord} to ${
          this.xCord + this.xTVal
        } and ${this.yCord + this.yTVal} respectively`
      );
    }
  }
}

const Origin = new Point(0, 0, false, false, 0, 0);
Origin.printPoint();
Origin.xTranslateStatus = true;
Origin.yTranslateStatus = true;
console.log(Origin);
Origin.xTVal = 2;
Origin.yTVal = 2;
Origin.pointTranslation();
