import data from "./data.json";

console.log("hello world");

export function printName(name) {
  console.log("My name is", name);
}

export function displayData() {
  console.log(JSON.parse(data));
}
