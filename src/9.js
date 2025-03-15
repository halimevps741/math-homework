const express = require('express');
const app = express();
app.get('/', function(req, res) {
  let num1 = Math.floor(Math.random() * 10 + 1);
  let num2 = Math.floor(Math.random() * 10 + 1);
  let sum = num1 + num2;
  res.send(`The sum of ${num1} and ${num2} is ${sum}.`);
});
app.listen(3000, function() {
  console.log('Server started on port 3000');
});
