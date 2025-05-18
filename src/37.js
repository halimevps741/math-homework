function sumOfSquares(numbers) {
  return numbers.reduce((acc, current) => acc + current ** 2, 0);
}

// Example usage:
const inputNumbers = [1, 2, 3, 4];
console.log(sumOfSquares(inputNumbers));
