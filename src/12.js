const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const sum = num1 + num2;
  res.send(`${num1} + ${num2} = ${sum}`);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
