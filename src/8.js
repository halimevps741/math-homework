
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  if (num2 === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return num1 / num2;
};

const calculate = (operation, num1, num2) => {
  switch (operation) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      throw new Error(`Unsupported operation: ${operation}`);
  }
};

const getRandomOperation = () => {
  const operations = ["+", "-", "*", "/"];
  return operations[Math.floor(Math.random() * operations.length)];
};

const generateRandomMathProblem = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const operation = getRandomOperation();
  return `${num1} ${operation} ${num2}`;
};

module.exports = { calculate, generateRandomMathProblem };