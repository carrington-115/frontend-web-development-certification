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
