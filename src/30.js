// Node.js example: A simple calculator to perform basic arithmetic operations (+ - * / %)

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y !== 0) {
    return x / y;
  } else {
    throw new Error("Division by zero is not allowed.");
  }
}

module.exports = { add: add, subtract: subtract, multiply: multiply, divide: divide };
