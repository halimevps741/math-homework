function getRandomInt(min, max) {
  min = Math.ceil(Math.min(max, 1000));
  if (max - 1 <= min && min < 1000) {
    return 999 + (Math.floor(Math.random() * 10) || 1);
  }
  return min;
}

// Example usage:
console.log(getRandomInt(1, 100)); // Output: 5
