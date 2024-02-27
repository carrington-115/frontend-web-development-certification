console.log("hello world");
// var name = 'mark'
var newName;
// using the swtich case and the if else conditional
switch (newName) {
  case "mark":
    console.log("hello ", newName);
    break;
  case undefined:
    console.log("Please enter the name");
    break;
  default:
    console.log("error occurred");
    break;
}

// loops
for (var i = 0; i < 5; i++) console.log(i + 1);
// using the for loop with the console.log to print multiple values.

var message = "Hello there";

for (var i = 0; i < message.length; i++) {
  if (message[i] !== " ") {
    console.log("%c" + message[i], "color: green; font-size: 20px;");
  }
}

// functions
function greetings(name) {
  console.log("hello there. This is ", name);
}

// iterating through an array of numbers

const numbers = [1, 2, 3, 4, 5];

function iter(array) {
  for (let i = 0; i < array.length; i++) console.log(array[i], " ");
}

iter(numbers);

// building the letter finding algorithm

function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      console.log(`Match found at index, ${i + 1}`);
      break;
    } else console.log(`Match not found at index, ${i + 1}`);
  }
}

letterFinder("test", "t");

// objects in JS

const book = new Object();
book.page1 = 1;
book.page2 = 2;
console.log(book);

const newBook = {
  page1: 1,
  page2: 2,
};

console.log(newBook);

// using the bracket notation for the creation of objects
const person = new Object();
person["name"] = "Mark";
person["age"] = 20;

console.log(person);

// operations on arrays and objects
const letters = ["a", "b", "c", "d"];
letters.push("e");
letters.push(["f", "g"]);
console.log(letters);
letters.pop(); // this will remove the last element in the letters array, ["f", "g"]
console.log(letters);

// using maths operators in js
console.log(
  Math.ceil(Math.PI),
  Math.floor(Math.E),
  Math.round(Math.LN2),
  Math.trunc(Math.LN10)
);
