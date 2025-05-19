function getRandomInt(max) {
  var max_int = Math.floor(Math.random() * (max - 0 + 1)) + 0;
  return max_int;
}

console.log(getRandomInt(5) + " or " + getRandomInt(3));
