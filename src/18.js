function calculateAverage(numbers) {
  if (numbers.length === 0) {
    throw new Error("The array is empty.");
  }

  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return sum / numbers.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5]));
