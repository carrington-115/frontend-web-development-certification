// this is a calculator function
function calculator(a, b, operation) {
  operation = String(operation);
  switch (operation) {
    case "+":
      return Number(a) + Number(b);
      break;
    case "-":
      return Number(a) - Number(b);
      break;
    case "/":
      return b === 0 ? "division by zero not possible" : Number(a) / Number(b);
      break;
    case "*":
      return Number(a) * Number(b);
      break;
    case "%":
      return Number(a) % Number(b);
      break;
    case "**":
      return Number(a) ^ Number(b);
      break;
    default:
      console.log("This case does not exist");
      break;
  }
}

module.exports = calculator;
